import createActionCreator from './createActionCreator';
import createActionTypeWithPostfix from './createActionTypeWithPostfix';
import { FAIL, SUCCESS } from '../../constants';

export default (type, fetchArgs = [], successArgs = ['data'], failArgs = ['errors']) => {
    const fetch = createActionCreator(type, ...fetchArgs);
    const success = createActionCreator(createActionTypeWithPostfix(type, SUCCESS), ...successArgs);
    const fail = createActionCreator(createActionTypeWithPostfix(type, FAIL), ...failArgs);

    return {
        [fetch.name]: fetch.creator,
        [success.name]: success.creator,
        [fail.name]: fail.creator,
    };
};
