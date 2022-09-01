const Storage = () => {
	const getItem = (key, defaultValue) => {
		try {
			const value = window.localStorage.getItem(key) ?? defaultValue;
			return JSON.parse(value);
		} catch {
			return defaultValue;
		}
	};

	const setItem = (key, value) => {
		window.localStorage.setItem(key, JSON.stringify(value));
	};

	const removeItem = (key) => {
		window.localStorage.removeItem(key);
	};

	return { getItem, setItem, removeItem };
};

export const storage = Storage();
