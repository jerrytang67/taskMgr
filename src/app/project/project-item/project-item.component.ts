import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import { Project } from '../project-list/project-list.component';
import { cardAnimation } from 'src/animations/card.animation';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [cardAnimation]
})
export class ProjectItemComponent implements OnInit {
  @Input() item: Project;
  @Output() onInvite = new EventEmitter<void>();
  @Output() onDelete = new EventEmitter<void>();

  @HostBinding('@card') cardState = 'out';

  constructor() { }


  @HostListener("mouseenter")
  onMouseEnter() {
    this.cardState = 'hover';
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.cardState = 'out';
  }

  ngOnInit() {
    console.log(this.item);
  }

  onInviteClick() {
    this.onInvite.emit();
  }

  onDeleteClick()
  {
    this.onDelete.emit();
  }
}
