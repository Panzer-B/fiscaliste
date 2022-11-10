import { createAction, props } from '@ngrx/store';

export const setUserHourlyRate = createAction(
    '[User] Set Hourly Rate',
    props<{ hourlyRate: number }>()
);

export const setWeeklyHours = createAction(
    '[User] Set Hourly Rate',
    props<{ weeklyHours: number }>()
);

export const setDailyCommuteHours = createAction(
    '[User] Set Hourly Rate',
    props<{ dailyCommuteHours: number }>()
);

export const setGrossIncome = createAction(
    '[User] Set Hourly Rate',
    props<{ grossIncome: number }>()
);

export const setNetIncome = createAction(
    '[User] Set Hourly Rate',
    props<{ netIncome: number }>()
);
