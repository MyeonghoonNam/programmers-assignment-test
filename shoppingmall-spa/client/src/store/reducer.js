import { SELECT_CHANGE, PRODUCT_QUANTITY_INPUT_CHANGE } from './action.js';

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
		case SELECT_CHANGE: {
			return {
				...state,
				selectedOptions: [...state.selectedOptions, payload],
			};
		}
		case PRODUCT_QUANTITY_INPUT_CHANGE: {
			const newState = { ...state };
			const { productItem, selectedOptions } = newState;

			const selectedOptionIndex = selectedOptions.findIndex(
				(selectedOption) => selectedOption.optionId === payload.optionId,
			);

			const productOption = productItem.productOptions.find(
				(option) => option.id === payload.optionId,
			);

			selectedOptions[selectedOptionIndex].quantity =
				productOption.stock >= payload.nextQuantity
					? payload.nextQuantity
					: productOption.stock;

			return newState;
		}
		default:
			return false;
	}
};

export { reducer };
