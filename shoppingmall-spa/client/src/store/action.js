export const SELECT_CHANGE = 'SELECT_CHANGE';
export const PRODUCT_QUANTITY_INPUT_CHANGE = 'PRODUCT_QUANTITY_INPUT_CHANGE';

export const changeSelect = (payload) => ({
	type: SELECT_CHANGE,
	payload,
});

export const changeProductQuantity = (payload) => ({
	type: PRODUCT_QUANTITY_INPUT_CHANGE,
	payload,
});
