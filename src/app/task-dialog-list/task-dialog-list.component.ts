import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskDialogData } from 'app/models/task-dialog-data';

@Component({
  selector: 'app-task-dialog-list',
  templateUrl: './task-dialog-list.component.html',
  styleUrls: ['./task-dialog-list.component.scss']
})
export class TaskDialogListComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<TaskDialogListComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: TaskDialogData) { }

  ngOnInit(): void {
  }

  onClick() : void {
    this.dialogRef.close();
  }

}
