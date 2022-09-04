export const SEARCH_INPUT = 'SEARCH_INPUT';
export const KEYUP_ARROW_SUGGESTION = 'KEYUP_ARROW_SUGGESTION';

export const searchInput = (payload) => ({
	type: SEARCH_INPUT,
	payload,
});

export const keyupArrowSuggestion = (payload) => ({
	type: KEYUP_ARROW_SUGGESTION,
	payload,
});
