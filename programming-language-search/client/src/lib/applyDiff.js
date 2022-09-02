const isNodeChanged = (node1, node2) => {
	const n1Attributes = node1.attributes();
	const n2Attributes = node2.attributes();

	if (n1Attributes.length !== n2Attributes.length) {
		return true;
	}

	const isDiffAttribute = Array.from(n1Attributes).find((attribute) => {
		const { name } = attribute;

		const n1Attribute = node1.getAttribute(name);
		const n2Attribute = node2.getAttribute(name);

		return n1Attribute !== n2Attribute;
	});

	if (isDiffAttribute) {
		return true;
	}

	if (
		node1.children.length === 0 &&
		node2.children.length === 0 &&
		node1.textContent !== node2.textContent
	) {
		return true;
	}

	return false;
};

const applyDiff = (parentNode, realNode, virtualNode) => {
	if (realNode && !virtualNode) {
		realNode.remove();
		return;
	}

	if (!realNode && virtualNode) {
		parentNode.appendChild(virtualNode);
		return;
	}

	if (isNodeChanged(realNode, virtualNode)) {
		realNode.replaceWith(virtualNode);
		return;
	}

	const realNodeChildren = Array.from(realNode.children);
	const virtualNodeChildren = Array.from(virtualNode.children);
	const maxChildrenLength = Math.max(
		realNodeChildren.length,
		virtualNodeChildren.length,
	);

	for (let i = 0; i < maxChildrenLength; i += 1) {
		applyDiff(realNode, realNodeChildren[i], virtualNodeChildren[i]);
	}
};

export default applyDiff;
