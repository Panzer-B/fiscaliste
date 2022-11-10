import { createSelector, createFeatureSelector } from '@ngrx/store';
import { User } from './user.model';
 
export const featureKey = 'user';
 
export interface AppState {
  user: User;
}
 
export const selectFeature = createFeatureSelector<AppState, User>(featureKey);
 
export const selectHourlyRate = createSelector(
  selectFeature,
  (state: User) => state.hourlyRate
);

export const selectWeeklyHours = createSelector(
    selectFeature,
    (state: User) => state.weeklyHours
);

export const selectDailyCommute = createSelector(
    selectFeature,
    (state: User) => state.dailyCommuteHours
);

export const selectGrossIncome = createSelector(
    selectFeature,
    (state: User) => state.grossIncome
);

export const selectNetIncome = createSelector(
    selectFeature,
    (state: User) => state.netIncome
);
