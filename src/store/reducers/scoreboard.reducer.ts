import { createReducer, on, Action } from '@ngrx/store';

import * as ScoreboardPageActions from '../actions/scoreboard-page.actions'

export interface ScoreBoardState {
    home: 0,
    away: 0,
}


export const initialState: ScoreBoardState = {
    home: 0,
    away: 0,
};

const scoreboardReducer = createReducer(
    initialState,
    on(ScoreboardPageActions.homeScore, state => ({ ...state, home: state.home + 1 })),
    on(ScoreboardPageActions.awayScore, state => ({ ...state, away: state.away + 1 })),
    on(ScoreboardPageActions.resetScore, state => ({ home: 0, away: 0 })),
    on(ScoreboardPageActions.setScores, (state, { game }) => ({ home: game.home, away: game.away }))
);

export function reducer(state: ScoreBoardState | undefined, action: Action) {
    return scoreboardReducer(state, action);
}