import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-task-header',
  template: `
<div mat-subheader class="header-container">
  <div>
    <h3>
      <ng-content></ng-content>
    </h3>
  </div>
  <div class="fill">
   <button mat-button (click)="onNewTaskClick()">
      <mat-icon>add_circle_outline</mat-icon>
      <span>新任务</span>
    </button>
  </div>
  <div>
   <button mat-icon-button [matMenuTriggerFor]="menu">
      <mat-icon>keyboard_arrow_down</mat-icon>
    </button>
    <mat-menu #menu="matMenu">
      <button mat-menu-item (click)="onRenameTaskClick()">
        <mat-icon>mode_edit</mat-icon>
        <span>修改列表名称</span>
      </button>
      <button mat-menu-item (click)="onMoveTaskClick()">
        <mat-icon>move_to_inbox</mat-icon>
        <span>移动列表所有内容</span>
      </button>
      <button mat-menu-item>
        <mat-icon>delete</mat-icon>
        <span>删除</span> 
      </button>
    </mat-menu>
  </div>
</div>
  `,
  styles: [`
  .fill{
    flex:1;
    text-align:center;
  }
.header-container{
  display:flex;
  flex-direction:row;
  flex-wrap:nowrap;
  justify-content:center;
  align-content:center;
  width:100%;
}
  `]
})
export class TaskHeaderComponent implements OnInit {

  @Output() newTask = new EventEmitter<void>();
  @Output() moveTask = new EventEmitter<void>();
  @Output() renameTask = new EventEmitter<void>();

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  onNewTaskClick() {
    this.newTask.emit();
  }

  onMoveTaskClick() {
    this.moveTask.emit();
  }

  onRenameTaskClick() {
    this.renameTask.emit();
  }
}
