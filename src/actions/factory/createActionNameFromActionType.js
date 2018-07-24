import { capitalize } from '../../utils';

export default type => type
    .split('_')
    .map((part, i) => {
        if (i) {
            return capitalize(part);
        }

        return part.toLowerCase();
    })
    .join('');
