import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { User } from 'src/domain';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  name: string;

  options: User[] = [
    { id: 1, name: "张三" },
    { id: 2, name: "李四" },
    { id: 3, name: "王五" }]

  constructor(@Inject(MAT_DIALOG_DATA) private data) {

  }

  ngOnInit() {

  }

  onSave() {
    console.log(this.name);
    console.log(this.data);
  }

  displayUser(user?: User): string | undefined {
    return user ? user.name : undefined;
  }
}

