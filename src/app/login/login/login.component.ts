import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ScoreBoardState } from 'src/store/reducers/scoreboard.reducer';

import * as ScoreboardPageActions from '../../../store/actions/scoreboard-page.actions'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  count$: Observable<ScoreBoardState>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(ScoreboardPageActions.homeScore())
    this.count$ = this.store.select(x => x.game);
  }

  onClick() {
    this.store.dispatch(ScoreboardPageActions.homeScore())
  }
}
