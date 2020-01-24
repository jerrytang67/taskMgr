import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Project } from '../project-list/project-list.component';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  project: Project = { id: 3, name: "", desc: "", coverImg: "assets/images/covers/3.jpg" };

  constructor(@Inject(MAT_DIALOG_DATA) private data, private dialogRef: MatDialogRef<NewProjectComponent>) { }

  ngOnInit() {
    console.log(this.data);
    this.project.id = this.data.id;
    var randnum = Math.floor(Math.random() * 39);
    this.project.coverImg = `assets/images/covers/${randnum}.jpg`
  }

  onSave() {
    this.dialogRef.close(this.project);
  }
}
