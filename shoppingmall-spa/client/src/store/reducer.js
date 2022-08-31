import { SELECT_CHANGE, PRODUCT_QUANTITY_INPUT_CHANGE } from './action.js';
import getCloneDeepObject from '../utils/getCloneDeepObject.js';

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
			const newState = getCloneDeepObject(state);
			newState.selectedOptions.push(payload);

			return newState;
		}

		case PRODUCT_QUANTITY_INPUT_CHANGE: {
			const newState = getCloneDeepObject(state);
			const { productItem, selectedOptions } = newState;

			const selectedOptionIndex = selectedOptions.findIndex(
				(selectedOption) => selectedOption.optionId === payload.optionId,
			);

			const productOption = productItem.productOptions.find(
				(option) => option.id === payload.optionId,
			);

			if (payload.nextQuantity < 1) {
				selectedOptions[selectedOptionIndex].quantity = 1;
			} else {
				selectedOptions[selectedOptionIndex].quantity =
					productOption.stock >= payload.nextQuantity
						? payload.nextQuantity
						: productOption.stock;
			}

			return newState;
		}
		default:
			return false;
	}
};

export { reducer };
