import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BranchesService } from '../../services/branches.service';
import { BranchesMaintenanceComponent } from '../branches-maintenance/branches-maintenance.component';

@Component({
  selector: 'app-branches-dialog',
  templateUrl: './branches-dialog.component.html',
  styleUrls: ['./branches-dialog.component.scss']
})
export class BranchesDialogComponent implements OnInit {

  branch: any = {};

  constructor(
    public dialogRef: MatDialogRef<BranchesMaintenanceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private branchesService: BranchesService
  ) { }

  branchGroup = this.formBuilder.group({
    name: [{ value: '', disabled: true}],
  });

  ngOnInit(): void {
    if (this.data.type === 'edit' || this.data.type === 'view') {
      this.getOneBranch(this.data.id, this.data.type);
    } else {
      this.branchGroup = this.formBuilder.group({
        name: ['']
      });
    }
  }

  getOneBranch(id: number, type: string) {
    this.branchesService.getBranchById(id).subscribe(response => {
      this.branch = response;
      this.branchGroup = this.formBuilder.group({
        name: [{ value: this.branch.name, disabled: type==='view'}]
      });
    })
  }

  editOneBranch(id: number, user: any) {
    let branchData = this.branchAsign();
    this.branchesService.editBranch(id, branchData).subscribe(response => {
      this.branch = response;
    })
  }

  createBranch() {
    let branchData = this.branchAsign();
    this.branchesService.createBranch(branchData).subscribe(response => {
      console.log(response);
    });
  }

  branchAsign(): Object {
    let branch = {};
    branch['name'] = this.branchGroup.controls.name.value;
    return branch;
  }

  deleteBranch(id: number) {
    this.branchesService.deleteBranch(id).subscribe(response => {
      console.log(response);
    });
  }

}
