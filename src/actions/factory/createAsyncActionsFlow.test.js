import createAsyncActionsFlow from './createAsyncActionsFlow';

const ACTION_TYPE = 'FETCH_CURRENCY';

test('AsyncActionsFlow object', () => {
    const actions = createAsyncActionsFlow(ACTION_TYPE);

    expect(actions).toEqual({
        fetchCurrency: actions.fetchCurrency,
        fetchCurrencySuccess: actions.fetchCurrencySuccess,
        fetchCurrencyFail: actions.fetchCurrencyFail,
    });

    expect(actions.fetchCurrency({ id: 1 })).toEqual({
        type: 'FETCH_CURRENCY',
        payload: {
            id: 1,
        },
    });

    expect(actions.fetchCurrencySuccess({
        data: {
            name: 'bitcoin',
            amount: 2173123618727347632,
        },
    })).toEqual({
        type: 'FETCH_CURRENCY_SUCCESS',
        payload: {
            data: {
                name: 'bitcoin',
                amount: 2173123618727347632,
            },
        },
    });

    const error = new Error('Failed to fetch');

    expect(actions.fetchCurrencyFail({ errors: [error] })).toEqual({
        type: 'FETCH_CURRENCY_FAIL',
        payload: {
            errors: [new Error('Failed to fetch')],
        },
    });
});
