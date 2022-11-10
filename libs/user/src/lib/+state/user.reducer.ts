import { User } from './user.model';
import * as UserActions from './user.actions';
import { createReducer, on } from '@ngrx/store';

export const initialUsersState: User = {};

export const userReducer = createReducer(
    initialUsersState,
    on(UserActions.setUserHourlyRate, (state, { hourlyRate }) => ({
        ...state,
        hourlyRate,
    })),
    on(UserActions.setWeeklyHours, (state, { weeklyHours }) => ({
        ...state,
        weeklyHours,
    })),
    on(UserActions.setDailyCommuteHours, (state, { dailyCommuteHours }) => ({
        ...state,
        dailyCommuteHours,
    })),
    on(UserActions.setGrossIncome, (state, { grossIncome }) => ({
        ...state,
        grossIncome,
    })), 
    on(UserActions.setNetIncome, (state, { netIncome }) => ({
        ...state,
        netIncome,
    }))
);
