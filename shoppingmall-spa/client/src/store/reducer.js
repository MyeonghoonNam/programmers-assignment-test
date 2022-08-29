const INITIAL_STATE = {};

const reducer = (state, action) => {
	if (!action) {
		return { ...INITIAL_STATE };
	}

	return false;
};

export { reducer };
