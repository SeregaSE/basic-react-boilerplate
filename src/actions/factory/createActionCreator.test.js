import createActionCreator from './createActionCreator';

const ACTION_TYPE = 'FETCH_CURRENCY';
const payload = { id: 1 };

test('ActionCreator object', () => {
    const action = createActionCreator(ACTION_TYPE);

    expect(action.name).toBe('fetchCurrency');

    expect(action.creator(payload)).toEqual({
        type: 'FETCH_CURRENCY',
        payload: {
            id: 1,
        },
    });
});
