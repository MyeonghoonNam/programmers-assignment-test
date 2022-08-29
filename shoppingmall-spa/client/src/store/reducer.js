const INITIAL_STATE = {
	productList: [],
	productItem: {},
};

const reducer = (state, action) => {
	if (!action) {
		return { ...INITIAL_STATE };
	}

	return false;
};

export { reducer };
