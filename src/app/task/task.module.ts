import { NgModule } from '@angular/core';
import { TaskHomeComponent } from './task-home.component';
import { SharedModule } from '../shared/shared.module';
import { TaskListComponent } from './task-list.component';
import { TaskItemComponent } from './task-item.component';
import { TaskHeaderComponent } from './task-header.component';
import { TaskRoutingModule } from './task-routing.module';
import { NewTaskComponent } from './new-task/new-task.component';
import { MoveTaskComponent } from './move-task.component';
import { RenameTaskComponent } from './rename-task.component';



@NgModule({
  declarations: [
    TaskHomeComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskHeaderComponent,
    NewTaskComponent,
    MoveTaskComponent,
    RenameTaskComponent
  ],
  imports: [
    SharedModule,
    TaskRoutingModule
  ],
  entryComponents: [
    NewTaskComponent,
    MoveTaskComponent,
    RenameTaskComponent
  ]
})
export class TaskModule { }
