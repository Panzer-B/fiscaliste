import { createAction, props } from '@ngrx/store';

export const setUserHourlyRate = createAction(
    '[User] Set Hourly Rate',
    props<{ hourlyRate: number }>()
);

export const setWeeklyHours = createAction(
    '[User] Set Weekly Hours',
    props<{ weeklyHours: number }>()
);

export const setDailyCommuteHours = createAction(
    '[User] Set Daily Commute Hours',
    props<{ dailyCommuteHours: number }>()
);

export const setGrossIncome = createAction(
    '[User] Set Gross Income',
    props<{ grossIncome: number }>()
);
