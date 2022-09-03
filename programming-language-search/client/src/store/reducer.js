import getCloneDeepObject from '../utils/getCloneDeepObject.js';
import { SEARCH_INPUT } from './action.js';

const INITIAL_STATE = {
	keyword: '',
	suggestionLanguages: [],
};

const reducer = (state, action) => {
	if (!action) {
		return getCloneDeepObject(INITIAL_STATE);
	}

	const { type, payload } = action;

	switch (type) {
		case SEARCH_INPUT: {
			const newState = {
				...getCloneDeepObject(state),
				...payload,
			};

			return newState;
		}
		default:
			return false;
	}
};

export { reducer };
