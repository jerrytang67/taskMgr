import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: "new-tak.component.html",
  styleUrls: ["new-tak.component.scss"]
})
export class NewTaskComponent implements OnInit {

  priorities: Array<{ label: string, value: number }> = [
    {
      label: "紧急",
      value: 1
    },
    {
      label: "重要",
      value: 2
    },
    {
      label: "普通",
      value: 3
    },
  ]

  name: string;
  dueDate: Date;

  constructor() { }

  ngOnInit() {
  }

  onSave() {

  }

}
