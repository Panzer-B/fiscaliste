import {selectHourlyRate, selectWeeklyHours, selectDailyCommute, selectGrossIncome, selectNetIncome} from './user.selector';

import {User} from './user.model';

describe('User selector', () => {
    test('getHourlyRate', () => {
        const state = {
            user: <User>{
                hourlyRate: 10
            }
        }
        expect(selectHourlyRate(state)).toEqual(10);
    });

    test('selectWeeklyHours', () => {
        const state = {
            user:<User>{
                weeklyHours: 40
            }
        }
        expect(selectWeeklyHours(state)).toEqual(40);
    });

    test('selectDailyCommute', () => {
        const state = {
            user: <User>{
                dailyCommuteHours: 2
            }
        }
        expect(selectDailyCommute(state)).toEqual(2);
    });

    test('selectGrossIncome', () => {
        const state = {
            user: <User>{
                grossIncome: 50000
            }
        }
        expect(selectGrossIncome(state)).toEqual(50000);
    });

    test('selectNetIncome', () => {
        const state = {
            user: <User>{
                netIncome: 30000
            }
        }
        expect(selectNetIncome(state)).toEqual(30000);
    });
});