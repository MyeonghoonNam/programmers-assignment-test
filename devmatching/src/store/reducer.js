const INITIAL_STATE = {
	personalInfo: [],
};

const reducer = (state, action) => {
	if (!action) {
		return { ...INITIAL_STATE };
	}

	return false;
};

export { reducer };
