import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContributorService } from 'app/components/services/contributors/contributors.service';
import { TaskService } from 'app/components/services/tasks/tasks.service';
import { ContributorDialogListComponent } from 'app/contributor-dialog-list/contributor-dialog-list.component';
import { Contributor } from 'app/models/contributor';
import { Task } from 'app/models/task';
import { TaskDialogListComponent } from 'app/task-dialog-list/task-dialog-list.component';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  tasks: Task[] = [];
  contributors: Contributor[] = [];

  constructor(private taskService: TaskService,
              private contributorService: ContributorService,
              private dialogModel: MatDialog) { }

  ngOnInit() {
    this.startSubscription();
  }

  startSubscription() {
    this.contributorService.getContibutors().subscribe(res => {
      this.contributors = res;
    })

    this.taskService.getTasks().subscribe(res => {
      res.forEach(item => {
        if(item.assignee != "") {
          const contributor = this.contributors.find(con => con.userName == item.assignee);
          if(contributor) {
              this.tasks.push({
                id: item.id,
                title: item.title,
                description: item.description,
                assignee: contributor
              })
          } else {
            this.tasks.push({
              id: item.id,
              title: item.title,
              description: item.description,
              assignee: new Contributor()
            })
          }
        } else {
          this.tasks.push({
            id: item.id,
            title: item.title,
            description: item.description,
            assignee: new Contributor()
          })
        }
      })
    })
  }

  openTaskDialog(task: Task){
    const dialog = this.dialogModel.open(TaskDialogListComponent, {
      width: '600px',
      data: {
        title: task.title,
        description: task.description,
        assignee: task.assignee,
        contributors: this.contributors
      }
    });
    dialog.afterClosed().subscribe(result => {
      if(result) {
        const index = this.tasks.findIndex((obj: Task) => obj == task);
        this.tasks[index].title = result.title;
        this.tasks[index].description = result.description;
        this.tasks[index].assignee = result.assignee;
      }
    })
  }

  deleteTask(task : Task){
    const index = this.tasks.findIndex((obj: Task) => obj == task);
    this.tasks.splice(index, 1);
  }

  openContributorDialog(contributor : Contributor) {
    const dialog = this.dialogModel.open(ContributorDialogListComponent, {
      width: '600px',
      data: {
        firstName: contributor.firstName,
        lastName: contributor.lastName,
        userName: contributor.userName
      }
    });
    dialog.afterClosed().subscribe(result => {
      if(result) {
        const index = this.contributors.findIndex((obj: Contributor) => obj == contributor);
        this.contributors[index].firstName = result.firstName;
        this.contributors[index].lastName = result.lastName;
        this.contributors[index].userName = result.userName;
      }
    })
  }

  deleteContributor(contributor: Contributor) {
    //dodati za task
    const index = this.contributors.findIndex((obj : Contributor) => obj == contributor);
    this.contributors.splice(index, 1);
    this.tasks.forEach(task => {
      if(task.assignee == contributor) {
        task.assignee = new Contributor();
      }
    })
  }
}
