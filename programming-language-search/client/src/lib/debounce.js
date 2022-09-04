const debounce = (callback, delay) => {
	let timer;

	return (e) => {
		if (timer) clearTimeout(timer);
		timer = setTimeout(callback, delay, e);
	};
};

export { debounce };
