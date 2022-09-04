import getCloneDeepObject from '../utils/getCloneDeepObject.js';
import {
	SEARCH_INPUT,
	KEYUP_ARROW_SUGGESTION,
	SELECT_LANGUAGE,
} from './action.js';

const INITIAL_STATE = {
	keyword: '',
	suggestionLanguages: [],
	currentFocusSuggestionLanguageIndex: 0,
	selectedLanguages: [],
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

		case SELECT_LANGUAGE: {
			const { language } = payload;

			const newState = {
				...getCloneDeepObject(state),
			};

			if (newState.selectedLanguages.includes(language)) {
				newState.selectedLanguages = newState.selectedLanguages.filter(
					(l) => l !== language,
				);
			}

			newState.selectedLanguages = newState.selectedLanguages.concat(language);

			if (newState.selectedLanguages.length > 5) {
				newState.selectedLanguages.shift();
			}

			return newState;
		}

		default:
			return false;
	}
};

export { reducer };
