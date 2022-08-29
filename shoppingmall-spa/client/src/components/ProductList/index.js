import getNumberWithCommas from '../../utils/getNumberWithCommas.js';

const ProductList = () => {
	const render = ({ productList }) => {
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

	return (state) => {
		const $productList = render(state);
		return $productList;
	};
};

export default ProductList;
