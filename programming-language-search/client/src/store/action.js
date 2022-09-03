export const SEARCH_INPUT = 'SEARCH_INPUT';
export const KEYUP_SUGGESTION = 'KEYUP_SUGGESTION';

export const searchInput = (payload) => ({
	type: SEARCH_INPUT,
	payload,
});

export const keyupSuggestion = (payload) => ({
	type: KEYUP_SUGGESTION,
	payload,
});
