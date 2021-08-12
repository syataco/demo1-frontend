import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { InformationDialogComponent } from '../information-dialog/information-dialog.component';

@Component({
  selector: 'app-users-maintenance',
  templateUrl: './users-maintenance.component.html',
  styleUrls: ['./users-maintenance.component.scss']
})
export class UsersMaintenanceComponent implements OnInit {

  usersList: any = [];

  displayedColumns: string[] = ['id', 'names', 'username', 'password', 'actions'];
  dataSource = new MatTableDataSource<any>(this.usersList);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private usersService: UsersService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllUsers();
  }

  openDialog(id: number, type: string): void {
    const dialogRef = this.dialog.open(InformationDialogComponent, {
      width: '650px',
      data: {
        id,
        type
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      if (!result) {
        this.getAllUsers();
      }
    });
  }

  doSomething(arg: any): void {
    console.log(arg);
  }

  getAllUsers() {
    this.usersService.getAllUsers().subscribe(response => {
      this.dataSource.data = response;
      console.log(this.dataSource.data);
    });
  }

  getOneUser(id: number) {
    this.usersService.getUserById(id).subscribe(response => {
      console.log(response);
    });
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id).subscribe(response => {
      if (response) {
        this.getAllUsers();
      }
    });
  }

}
