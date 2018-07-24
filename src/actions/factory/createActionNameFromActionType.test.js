import createActionNameFromActionType from './createActionNameFromActionType';

const ADD = 'ADD';
const FETCH_CURRENCY_SUCCESS = 'FETCH_CURRENCY_SUCCESS';

test('Transform ADD to simple', () => {
    expect(createActionNameFromActionType(ADD)).toBe('add');
});

test('Transform FETCH_CURRENCY_SUCCESS to fetchCurrencySuccess', () => {
    expect(createActionNameFromActionType(FETCH_CURRENCY_SUCCESS)).toBe('fetchCurrencySuccess');
});
