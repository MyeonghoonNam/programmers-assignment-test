import { store } from '../../store/store.js';
import getNumberWithCommas from '../../utils/getNumberWithCommas.js';
import getClosestElement from '../../utils/getClosestElement.js';
import { router } from '../../router/router.js';

const ProductList = () => {
	let state;

	const handleClickProductList = (e) => {
		const $element = getClosestElement(e.target, 'li');

		if ($element) {
			const id = $element.dataset.productId;
			router.routeChange(`/web/products/${id}`);
		}
	};

	const bindEvents = (target) => {
		target.addEventListener('click', handleClickProductList);
	};

	const render = () => {
		const { productList } = state;

		const $productList = document.createElement('ul');
		$productList.innerHTML = productList
			.map(
				({ id, imageUrl, name, price }) => `
			<li class="Product" data-product-id="${id}">
				<img src="${imageUrl}">
				<div class="Product__info">
					<div>${name}</div>
					<div>${getNumberWithCommas(price)}원~</div>
				</div>
			</li>
		`,
			)
			.join('');

		return $productList;
	};

	return () => {
		state = store.getState();

		const $productList = render();
		bindEvents($productList);

		return $productList;
	};
};

export default ProductList;
