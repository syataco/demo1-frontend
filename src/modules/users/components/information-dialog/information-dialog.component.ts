import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BranchesService } from '../../services/branches.service';
import { UsersService } from '../../services/users.service';
import { UsersMaintenanceComponent } from '../users-maintenance/users-maintenance.component';

@Component({
  selector: 'app-information-dialog',
  templateUrl: './information-dialog.component.html',
  styleUrls: ['./information-dialog.component.scss']
})
export class InformationDialogComponent implements OnInit {

  user: any = {};
  branches: any = [];

  constructor(
    public dialogRef: MatDialogRef<UsersMaintenanceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private branchesService: BranchesService
  ) { }

  userGroup = this.formBuilder.group({
    names: [{ value: '', disabled: true}],
    username: [{ value: '', disabled: true}],
    password: [{ value: '', disabled: true}],
    branchid: [{ value: '', disabled: true}],
  });

  ngOnInit(): void {

    if (this.data.type === 'edit' || this.data.type === 'view') {
      this.getOneUser(this.data.id, this.data.type);
    } else {
      this.userGroup = this.formBuilder.group({
        names: [''],
        username: [''],
        password: [''],
        branchid: ['']
      });
      this.branchesService.getAllBranches().subscribe(response => {
        this.branches = response as any;
      });
    }

  }

  getOneUser(id: number, type: string) {
    this.usersService.getUserById(id).subscribe(response => {
      this.user = response;
      console.log(response);
      this.userGroup = this.formBuilder.group({
        names: [{ value: this.user.names, disabled: type==='view'}],
        username: [{ value: this.user.username, disabled: type==='view'}],
        password: [{ value: this.user.password, disabled: type==='view'}],
        branchid: [{ value: this.user.branchid, disabled: type==='view'}],
      });
    })
  }

  editOneUser(id: number, user: any) {
    let userData = this.userAsign();
    this.usersService.editUser(id, userData).subscribe(response => {
      this.user = response;
      console.log(response);
      console.log(this.user);
    })
  }

  createUser() {
    let userData = this.userAsign();
    this.usersService.createUser(userData).subscribe(response => {
      console.log(response);
    });
  }

  userAsign(): Object {
    let user = {};
    user['names'] = this.userGroup.controls.names.value;
    user['username'] = this.userGroup.controls.username.value;
    user['password'] = this.userGroup.controls.password.value;
    user['branchid'] = this.userGroup.controls.branchid.value;
    return user;
  }

}
