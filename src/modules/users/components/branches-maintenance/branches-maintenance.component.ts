import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BranchesService } from '../../services/branches.service';
import { BranchesDialogComponent } from '../branches-dialog/branches-dialog.component';
import { InformationDialogComponent } from '../information-dialog/information-dialog.component';

@Component({
  selector: 'app-branches-maintenance',
  templateUrl: './branches-maintenance.component.html',
  styleUrls: ['./branches-maintenance.component.scss']
})
export class BranchesMaintenanceComponent implements OnInit {

  branchesList: any = [];

  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource = new MatTableDataSource<any>(this.branchesList);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor(
    private branchesService: BranchesService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllBranches();
  }

  openDialog(id: number, type: string): void {
    const dialogRef = this.dialog.open(BranchesDialogComponent, {
      width: '650px',
      data: {
        id,
        type
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      // if (!result) {
        this.getAllBranches();
      // }
    });
  }

  doSomething(arg: any): void {
    console.log(arg);
  }

  getAllBranches() {
    this.branchesService.getAllBranches().subscribe(response => {
      this.dataSource.data = response;
      console.log(this.dataSource.data);
    });
  }

  getOneBranch(id: number) {
    this.branchesService.getBranchById(id).subscribe(response => {
      console.log(response);
    });
  }

  deleteBranch(id: number) {
    this.branchesService.deleteBranch(id).subscribe(response => {
      if (response) {
        this.getAllBranches();
      }
    });
  }

}
