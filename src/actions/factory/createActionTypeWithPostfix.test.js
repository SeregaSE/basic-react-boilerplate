import createActionTypeWithPostfix from './createActionTypeWithPostfix';

const ACTION_TYPE = 'FETCH_CURRENCY';
const POSTFIX = 'SUCCESS';

test('Add postfix for action', () => {
    expect(createActionTypeWithPostfix(ACTION_TYPE, POSTFIX)).toBe('FETCH_CURRENCY_SUCCESS');
});