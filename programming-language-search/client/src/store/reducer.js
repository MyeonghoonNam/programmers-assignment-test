import getCloneDeepObject from '../utils/getCloneDeepObject.js';
import { SEARCH_INPUT, KEYUP_ARROW_SUGGESTION } from './action.js';

const INITIAL_STATE = {
	keyword: '',
	suggestionLanguages: [],
	currentFocusSuggestionLanguageIndex: 0,
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

		case KEYUP_ARROW_SUGGESTION: {
			const newState = {
				...getCloneDeepObject(state),
				currentFocusSuggestionLanguageIndex: payload.index,
			};

			return newState;
		}

		default:
			return false;
	}
};

export { reducer };
