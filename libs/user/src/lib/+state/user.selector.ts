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