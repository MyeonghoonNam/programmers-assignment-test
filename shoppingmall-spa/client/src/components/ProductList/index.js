import { store } from '../../store/store.js';
import getNumberWithCommas from '../../utils/getNumberWithCommas.js';

const ProductList = () => {
	let state;

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
		return $productList;
	};
};

export default ProductList;
