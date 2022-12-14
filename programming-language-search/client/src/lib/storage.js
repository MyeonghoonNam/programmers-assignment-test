const Storage = () => {
	const storage = window.localStorage;

	const getItem = (key, defaultValue = false) => {
		try {
			const value = storage.getItem(key) ?? JSON.stringify(defaultValue);
			return JSON.parse(value);
		} catch (e) {
			// eslint-disable-next-line no-console
			console.log(e);
			return defaultValue;
		}
	};

	const setItem = (key, value) => {
		try {
			storage.setItem(key, JSON.stringify(value));
		} catch (e) {
			// eslint-disable-next-line no-console
			console.log(e);
		}
	};

	return { getItem, setItem };
};

export const storage = Storage();
