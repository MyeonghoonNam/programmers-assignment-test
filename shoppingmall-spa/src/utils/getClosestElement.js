const getClosestElement = (element, selector) => {
	const reg = /^\./;
	let evaluate = false;

	if (reg.test(selector)) {
		evaluate = element.classList.contains(selector);
	} else {
		evaluate = element.tagName === selector.toUpperCase();
	}

	if (evaluate) return element;
	if (!element.parentElement) return false;

	return getClosestElement(element.parentElement, selector);
};

export default getClosestElement;
