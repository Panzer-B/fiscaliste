import { createSelector, createFeatureSelector } from '@ngrx/store';
import { User } from './user.model';
import { getIncomeTaxesTotal, getNetIncome, tax_ca_qc } from '@fiscaliste/tax';

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

export const selectCalcGrossIncome = createSelector(
    selectHourlyRate,
    selectWeeklyHours,
    (hourlyRate, weeklyHours) => {
        if (hourlyRate && weeklyHours) {
            return hourlyRate * weeklyHours * 52; // TODO: replace 52 by a selector (user that works part time)
        } else {
            return 0;
        }
    }
);

export const selectGrossIncome = createSelector(
    selectFeature,
    selectCalcGrossIncome,
    (state: User, calcGrossIncome) => state.grossIncome ? state.grossIncome : calcGrossIncome || 0
);

export const selectCalcNetIncome = createSelector(
    selectGrossIncome,
    (grossIncome) => {
        if (grossIncome) {
            return getNetIncome(grossIncome, tax_ca_qc.incomeTaxes); // replace tax_ca_qc by root context state value.
        } else {
            return 0;
        }
    }
);

export const selectNetIncome = createSelector(
    selectFeature,
    selectCalcNetIncome,
    (state: User, calcNetIncome: number) => state.netIncome ? state.netIncome : calcNetIncome || 0
);

