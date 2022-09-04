import { reducer } from './reducer.js';
import getCloneDeepObject from '../utils/getCloneDeepObject.js';
import { storage } from '../lib/storage.js';

const CreateStore = () => {
	const listeners = [];
	let state = reducer();

	const subscribe = (listener) => {
		listeners.push(listener);
	};

	const publish = () => {
		const payload = Object.freeze(state);
		listeners.forEach((listener) => listener(payload));
	};

	const dispatch = (action) => {
		const newState = reducer(state, action);
		state = newState;
		storage.setITem('state', state);

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

			if (!key) return;
		}

		state = getCloneDeepObject({
			...state,
			...payload,
		});
	};

	const isEmpty = (value) => {
		if (Array.isArray(value)) {
			return value.length === 0;
		}

		if (typeof value === 'object') {
			return Object.keys(value).length === 0;
		}

		return new Error('잘못된 데이터 타입을 조회하였습니다.');
	};

	return {
		subscribe,
		dispatch,
		getState,
		setState,
		isEmpty,
	};
};

export const store = CreateStore();
