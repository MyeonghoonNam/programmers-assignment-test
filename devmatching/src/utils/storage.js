const Storage = () => {
	const storage = window.localStorage;

	const getItem = (key) => {
		try {
			const value = storage.getItem(key);

			if (!value) {
				return false;
			}

			return JSON.parse(value);
		} catch {
			return false;
		}
	};

	const setItem = (key, value) => {
		storage.setItem(key, JSON.stringify(value));
	};

	return {
		getItem,
		setItem,
	};
};

export const storage = Storage();
