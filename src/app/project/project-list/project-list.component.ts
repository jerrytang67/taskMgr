import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';

export interface Project {
  name: string,
  desc: string,
  coverImg: string
}


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects: Project[] = [
    {
      name: "自动化测试项目",
      desc: "这里一个企业内部项目",
      coverImg: "assets/images/covers/1.jpg"
    },
    {
      name: "2222",
      desc: "内部项目",
      coverImg: "assets/images/covers/2.jpg"
    },
    {
      name: "3333",
      desc: "内部项目",
      coverImg: "assets/images/covers/3.jpg"
    },
    {
      name: "4444",
      desc: "内部项目",
      coverImg: "assets/images/covers/5.jpg"
    },
    {
      name: "5555",
      desc: "内部项目",
      coverImg: "assets/images/covers/6.jpg"
    },
    {
      name: "6666",
      desc: "内部项目",
      coverImg: "assets/images/covers/7.jpg"
    }
  ]


  constructor(private dialog: MatDialog) { }

  ngOnInit() {

  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, { data: 'this is my data' })
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    })
  }

}
