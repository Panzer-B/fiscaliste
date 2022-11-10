import {selectHourlyRate} from './user.selector';

describe('User selector', () => {
    test('getHourlyRate', () => {
        const state = {
            user: {
                hourlyRate: 10
            }
        }
        expect(selectHourlyRate(state)).toEqual(10);
    });
});