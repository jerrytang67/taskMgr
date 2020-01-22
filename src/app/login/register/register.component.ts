import { Component, OnInit } from '@angular/core';
import { _Array } from 'src/app/utils/array.util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  avatars: string[] = _Array.range(1, 16, 1).map(x => `users-${x}`);

  constructor() { }

  ngOnInit() {
  }

}
