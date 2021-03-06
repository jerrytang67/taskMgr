import { Component, OnInit, HostBinding } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { NewTaskComponent } from './new-task/new-task.component';
import { MoveTaskComponent } from './move-task.component';
import { RenameTaskComponent } from './rename-task.component';
import { slideToRight } from 'src/animations/router.animation';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-home',
  template: `
<div class="task-lists">
  <app-task-list *ngFor="let item of lists; let i=index" class="list-container" >
    <app-task-header 
    (moveTask)="openMoveTaskDialog(item)"
    (newTask)="openNewTaskDialog(item)"
    (renameTask)="openRenameTaskDialog(item)"
    >{{item.name}}</app-task-header>

    <div class="task-item-container" cdkDropList [id]="item.desc" 
    [cdkDropListData]="item.tasks" 
    [cdkDropListConnectedTo]="listIds" (cdkDropListDropped)="onTaskDrop($event)">
      
      <app-task-item *ngFor="let task of item.tasks" [item]="task" cdkDrag [cdkDragData]="task">
      <div class="example-custom-placeholder" *cdkDragPlaceholder></div>
      </app-task-item>
    </div>

  </app-task-list>
</div>
<button mat-fab (click)="openNewTaskDialog()">
  <mat-icon>add</mat-icon>
</button>
  `,
  styles: [`
.mat-fab {
  position: fixed;
  right: 32px;
  bottom: 96px;
  z-index: 998;
}
.task-item-container{
  min-height:100%;
}
.task-lists{
  min-width:100%;
  height:100%;
  display:flex;
  flex-direction:row;
  flex-wrap:nowrap;
  overflow-x:scroll;
}
.list-container{
  flex: 0 0 360px;
  overflow-y:scroll;
  overflow-x:hidden;
}


  `],
  animations: [slideToRight]
})
export class TaskHomeComponent implements OnInit {

  get listIds(): string[] {
    let result = this.lists.map(track => track.desc);
    return result;
  }

  lists: any[] = [{
    id: 1,
    name: '待办',
    desc: 'todo',
    tasks: [
      {
        id: 1,
        desc: '任务一:去星巴克买杯咖啡',
        completed: true,
        priority: 3,
        owner: {
          id: 1,
          name: '张三',
          avatar: 'users-1'
        },
        dueDate: new Date()
      },
      {
        id: 2,
        desc: '任务二:完成老板布置的PPT作业',
        completed: false,
        priority: 2,
        owner: {
          id: 2,
          name: '李四',
          avatar: 'users-2'
        },
        dueDate: new Date()
      }]
  },
  {
    id: 2,
    name: '进行中',
    desc: 'doing',
    tasks: [
      {
        id: 3,
        desc: '任务三:去星巴克买杯咖啡',
        completed: false,
        priority: 2,
        owner: {
          id: 1,
          name: '张三',
          avatar: 'users-1'
        },
        dueDate: new Date()
      },
      {
        id: 4,
        desc: '任务四:完成老板布置的PPT作业完成老板布置的PPT作业',
        completed: false,
        priority: 1,
        owner: {
          id: 2,
          name: '李四',
          avatar: 'users-2'
        },
        dueDate: new Date()
      }]
  }
  ];

  // @HostBinding('@routeAnim') state;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  onTaskDrop(event: CdkDragDrop<any[]>) {
    console.log(event);

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

    console.log(this.lists);

  }

  openNewTaskDialog(list) {
    this.dialog.open(NewTaskComponent, { data: 'this is my data' });
  }

  openMoveTaskDialog(list) {
    const dialogRef = this.dialog.open(MoveTaskComponent, { data: this.lists });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });
  }

  openRenameTaskDialog(list) {
    const dialogRef = this.dialog.open(RenameTaskComponent, { data: this.lists });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res)
    })
  }



}
