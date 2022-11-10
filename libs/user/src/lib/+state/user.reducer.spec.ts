import * as UserActions from './user.actions';
import { userReducer } from './user.reducer';

describe('user reducer', () => {
    test('setHourlyRate', () => {
        const state = {};
        const action = UserActions.setUserHourlyRate({ hourlyRate: 10 });
        expect(userReducer(state, action)).toEqual({ hourlyRate: 10 });
    });

    test('setWeeklyHours', () => {
        const state = {};
        const action = UserActions.setWeeklyHours({ weeklyHours: 40 });
        expect(userReducer(state, action)).toEqual({ weeklyHours: 40 });
    });

    test('setDailyCommuteHours', () => {
        const state = {};
        const action = UserActions.setDailyCommuteHours({ dailyCommuteHours: 2 });
        expect(userReducer(state, action)).toEqual({ dailyCommuteHours: 2 });
    });

    test('setGrossIncome', () => {
        const state = {};
        const action = UserActions.setGrossIncome({ grossIncome: 50000 });
        expect(userReducer(state, action)).toEqual({ grossIncome: 50000 });
    });

    test('setNetIncome', () => {
        const state = {};
        const action = UserActions.setNetIncome({ netIncome: 30000 });
        expect(userReducer(state, action)).toEqual({ netIncome: 30000 });
    });
});
