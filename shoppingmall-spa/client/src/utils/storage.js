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
		window.window.localStorage.setItem(key, JSON.stringify(value));
	};

	return { getItem, setItem };
};

export const storage = Storage();
