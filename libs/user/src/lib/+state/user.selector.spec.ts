import {
    selectHourlyRate,
    selectWeeklyHours,
    selectDailyCommute,
    selectGrossIncome,
    selectNetIncome,
    selectCalcGrossIncome,
    selectCalcNetIncome,
} from './user.selector';

import { User } from './user.model';

describe('User selector', () => {
    test('getHourlyRate', () => {
        const state = {
            user: <User>{
                hourlyRate: 10,
            },
        };
        expect(selectHourlyRate(state)).toEqual(10);
    });

    test('selectWeeklyHours', () => {
        const state = {
            user: <User>{
                weeklyHours: 40,
            },
        };
        expect(selectWeeklyHours(state)).toEqual(40);
    });

    test('selectDailyCommute', () => {
        const state = {
            user: <User>{
                dailyCommuteHours: 2,
            },
        };
        expect(selectDailyCommute(state)).toEqual(2);
    });

    describe('selectGrossIncome', () => {
        test('with grossIncome', () => {
            const state = {
                user: <User>{
                    grossIncome: 50000,
                },
            };
            expect(selectGrossIncome(state)).toEqual(50000);
        });
    
        test('with calcGrossIncome', () => {
            const state = {
                user: <User>{
                    hourlyRate: 30,
                    weeklyHours: 40,
                },
            };
            expect(selectGrossIncome(state)).toEqual(62400);
        });

        test('with nothing', () => {
            expect(selectGrossIncome({user: {}})).toEqual(0);
        });
    });

    describe('selectNetIncome', () => {

        test('with netIncome', () => {
            const state = {
                user: <User>{
                    netIncome: 30000,
                },
            };
            expect(selectNetIncome(state)).toEqual(30000);
        });

        test('with predefined grossIncome', () => {
            const state = {
                user: <User>{
                    grossIncome: 62400
                },
            };
            expect(selectCalcNetIncome(state)).toEqual(42854.13);
        });
    
        test('without calculated grossIncome', () => {
            const state = {
                user: <User>{
                    hourlyRate: 30,
                    weeklyHours: 40,
                },
            };
            expect(selectCalcNetIncome(state)).toEqual(42854.13);
        });

        test('with nothing', () => {
            expect(selectCalcNetIncome({user: {}})).toEqual(0);
        });
    });
});
