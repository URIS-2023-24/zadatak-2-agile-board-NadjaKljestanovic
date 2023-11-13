import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RoleDialogData } from 'app/models/role-dialog-data';

@Component({
  selector: 'app-role-dialog-list',
  templateUrl: './role-dialog-list.component.html',
  styleUrls: ['./role-dialog-list.component.scss']
})
export class RoleDialogListComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<RoleDialogListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RoleDialogData) { }

  ngOnInit(): void {
  }

  onClick() : void {
    this.dialogRef.close();
  }

}
