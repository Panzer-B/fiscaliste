import { createAction, props } from '@ngrx/store';

export const setUserHourlyRate = createAction(
    '[User] Set Hourly Rate',
    props<{ hourlyRate: number }>()
);
