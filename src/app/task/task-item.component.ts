import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-item',
  template: `
<mat-list-item
 class="container"
 [ngClass]="{
    'priority-normal': item.priority === 3,
    'priority-important': item.priority === 2,
    'priority-emergency': item.priority === 1}"
 >
  <mat-checkbox
  class="status"
  [checked]="item.completed"
  (click)="onCheckboxClick($event)"
  (change)="checkboxChanged()">
</mat-checkbox>
  <div mat-line [matTooltip]="item.desc" class="content" [ngClass]="{'completed': item.completed}">{{item.desc}}</div>
  <div mat-line class="bottom-bar">
    <span class="duedate" *ngIf="item.dueDate">{{item.dueDate | date:"yyyy-MM-dd"}}</span>
    <mat-icon *ngIf="item.reminder" class="alarm">alarm</mat-icon>
  </div>
  <mat-icon [svgIcon]="item.owner.avatar"  md-list-avatar class="avatar"></mat-icon>
</mat-list-item>
  `,
  styles: [`
mat-icon.avatar {
  overflow: hidden;
  width:64px;
  height:auto;
  max-height: 64px;
  border-radius: 50%;
  background-color:#FFDB00;
  order: 3;
}

.mat-list-text{
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  height:100%;
}

.completed {
  opacity: 0.64;
  color: #d9d9d9;
  text-decoration: line-through;
}

.priority-normal {
  border-left: 3px solid #A6A6A6;
}

.priority-important {
  border-left: 3px solid #FFAF38;
}

.priority-emergency {
  border-left: 3px solid red;
}

.checkbox-section {
  border: 0 solid #A6A6A6;
}

.duedate {
  background-color: #FF4F3E;
  color: #fff;
}

.alarm {
  font-size: 18px;
}

.bottom-bar {
  margin-top: 3px;
  margin-bottom: 2px;
  font-size: 10px;
  width: 100%;
  order: 1;
}

.status {
  order: -1;
}

.content {
  order: 1;
  width: 100%;
  padding: 5px;
}

.container {
  width: 100%;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.drag-start {
  opacity: 0.5;
  border: #ff525b dashed 2px;
}

:host {
  width: 100%;
}

  `]
})
export class TaskItemComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

  onCheckboxClick(event) {

  }

  checkboxChanged() {

  }
}
