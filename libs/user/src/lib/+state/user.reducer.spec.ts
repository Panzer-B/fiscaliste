import * as UserActions from './user.actions';
import { userReducer } from './user.reducer';

describe('user reducer', () => {
    test('setHourlyRate', () => {
        const state = {};
        const action = UserActions.setUserHourlyRate({ hourlyRate: 10 });
        expect(userReducer(state, action)).toEqual({ hourlyRate: 10 });
    });
});
