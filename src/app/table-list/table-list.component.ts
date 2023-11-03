import { Component, OnInit } from '@angular/core';
import { ContributorService } from 'app/components/services/contributors/contributors.service';
import { TaskService } from 'app/components/services/tasks/tasks.service';
import { Contributor } from 'app/models/contributor';
import { Task } from 'app/models/task';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  tasks: Task[] = [];
  contributors: Contributor[] = [];

  constructor(private taskService: TaskService,
              private contributorService: ContributorService) { }

  ngOnInit() {
    this.startSubscription();
  }

  startSubscription() {
    this.taskService.getTasks().subscribe(res => {
      this.tasks = res;
    })

    this.contributorService.getContibutors().subscribe(res => {
      this.contributors = res;
    })
  }

}
