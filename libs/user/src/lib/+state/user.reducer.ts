import { User } from './user.model';
import * as UserActions from './user.actions';
import { createReducer, on } from '@ngrx/store';

export const initialUsersState: User = {};

export const userReducer = createReducer(
    initialUsersState,
    on(UserActions.setUserHourlyRate, (state, { hourlyRate }) => ({
        ...state,
        hourlyRate,
    }))
);
