import { SELECT_CHANGE } from './action.js';

const INITIAL_STATE = {
	productList: [],
	productItem: {},
	selectedOptions: [],
};

const reducer = (state, action) => {
	if (!action) {
		return { ...INITIAL_STATE };
	}

	const { type, payload } = action;

	switch (type) {
		case SELECT_CHANGE:
			return {
				...state,
				selectedOptions: [...state.selectedOptions, payload],
			};
		default:
			return false;
	}
};

export { reducer };
