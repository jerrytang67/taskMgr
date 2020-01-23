import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../project-list/project-list.component';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  @Input() item: Project;
  @Output() onInvite = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
    console.log(this.item);
  }

  onInviteClick() {
    this.onInvite.emit();
  }
}
