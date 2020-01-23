import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  template: `
    <mat-list>
      <ng-content></ng-content>
    </mat-list>
  `,
  styles: []
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
