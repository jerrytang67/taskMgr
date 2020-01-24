import { Component, OnInit, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';
import { slideToRight } from 'src/animations/router.animation';
import { listAnimation } from 'src/animations/list.animation';

export interface Project {
  id: string | number,
  name: string,
  desc: string,
  coverImg: string
}


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [slideToRight, listAnimation]
})
export class ProjectListComponent implements OnInit {

  // @HostBinding('@routeAnim') state;

  projects: Project[] = [
    {
      id: 1,
      name: "自动化测试项目",
      desc: "这里一个企业内部项目",
      coverImg: "assets/images/covers/1.jpg"
    },
    {
      id: 2,
      name: "内部项目",
      desc: "这是一个内部项目",
      coverImg: "assets/images/covers/2.jpg"
    },
  ]

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, { data: { id: this.projects.length + 1 } })
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      this.projects = [...this.projects, res]
    })
  }

  openInviteDialog(project) {
    const dialogRef = this.dialog.open(InviteComponent, { data: project })
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    })
  }

  delete(project: Project) {
    console.log("delete", project);
    this.projects = this.projects.filter(x => x.id !== project.id);
  }

}
