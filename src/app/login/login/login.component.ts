import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ScoreBoardState } from 'src/store/reducers/scoreboard.reducer';

import * as ScoreboardPageActions from '../../../store/actions/scoreboard-page.actions'
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  count$: Observable<ScoreBoardState>;

  form: FormGroup;


  constructor(private store: Store<any>,
    private fb: FormBuilder) {
    this.count$ = store.pipe(select("game"));
  }

  ngOnInit() {

    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    // new FormGroup({
    //   username: new FormControl('', Validators.required),
    //   password: new FormControl('', Validators.required)
    // })

    this.store.dispatch(ScoreboardPageActions.homeScore())
  }

  onClick() {
  }

  onSubmit({ value, valid }, ev: Event) {
    event.preventDefault();
    console.log(value);
    console.log(valid);
    this.store.dispatch(ScoreboardPageActions.homeScore())

  }
}
