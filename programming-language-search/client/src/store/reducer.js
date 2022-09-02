import getCloneDeepObject from '../utils/getCloneDeepObject.js';

const INITIAL_STATE = {};

const reducer = (state, action) => {
	if (!action) {
		return getCloneDeepObject(INITIAL_STATE);
	}

	return false;
};

export { reducer };
