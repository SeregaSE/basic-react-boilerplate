import createActionNameFromActionType from './createActionNameFromActionType';

export default type => ({
    name: createActionNameFromActionType(type),
    creator: payload => ({
        payload,
        type,
    }),
});
