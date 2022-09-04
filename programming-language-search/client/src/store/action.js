export const SEARCH_INPUT = 'SEARCH_INPUT';
export const KEYUP_ARROW_SUGGESTION = 'KEYUP_ARROW_SUGGESTION';
export const SELECT_LANGUAGE = 'SELECT_LANGUAGE';

export const searchInput = (payload) => ({
	type: SEARCH_INPUT,
	payload,
});

export const keyupArrowSuggestion = (payload) => ({
	type: KEYUP_ARROW_SUGGESTION,
	payload,
});

export const selectLanguage = (payload) => ({
	type: SELECT_LANGUAGE,
	payload,
});
