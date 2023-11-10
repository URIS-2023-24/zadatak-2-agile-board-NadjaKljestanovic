import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ContributorDialogData } from 'app/models/contributor-dialog-data';

@Component({
  selector: 'app-contributor-dialog-list',
  templateUrl: './contributor-dialog-list.component.html',
  styleUrls: ['./contributor-dialog-list.component.scss']
})
export class ContributorDialogListComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ContributorDialogListComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: ContributorDialogData) { }
    
  ngOnInit(): void {
  }

  onClick() : void {
    this.dialogRef.close();
  }
}
