import { reducer } from './reducer.js';
import getCloneDeepObject from '../utils/getCloneDeepObject.js';

const createStore = () => {
	const listeners = [];
	let state = reducer();

	const subscribe = (listener) => {
		listeners.push(listener);
	};

	const publish = () => {
		const payload = Object.freeze(getCloneDeepObject(state));
		listeners.forEach((listener) => listener(payload));
	};

	const dispatch = (action) => {
		const newState = reducer(state, action);
		state = newState;
		publish();
	};

	const getState = () => Object.freeze(state);

	const setState = (payload) => {
		if (!payload) {
			state = reducer();
			return;
		}

		const keys = Object.keys(payload);

		for (let i = 0; i < keys.length; i += 1) {
			const key = keys[i];

			if (!state[key]) return;
		}

		state = {
			...state,
			...payload,
		};
	};

	return {
		subscribe,
		dispatch,
		getState,
		setState,
	};
};

export const store = createStore();
