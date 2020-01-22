import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  name: string;

  desc: string;

  constructor(@Inject(MAT_DIALOG_DATA) private data, private dialogRef: MatDialogRef<NewProjectComponent>) { }

  ngOnInit() {
    console.log(this.data);
  }

  onSave() {
    this.dialogRef.close({ name: this.name, desc: this.desc });
  }
}
