import { NgModule } from '@angular/core';
import { TaskHomeComponent } from './task-home.component';
import { SharedModule } from '../shared/shared.module';
import { TaskListComponent } from './task-list.component';
import { TaskItemComponent } from './task-item.component';
import { TaskHeaderComponent } from './task-header.component';
import { TaskRoutingModule } from './task-routing.module';
import { NewTaskComponent } from './new-task/new-task.component';



@NgModule({
  declarations: [
    TaskHomeComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskHeaderComponent,
    NewTaskComponent
  ],
  imports: [
    SharedModule,
    TaskRoutingModule
  ],
  entryComponents: [NewTaskComponent]
})
export class TaskModule { }
