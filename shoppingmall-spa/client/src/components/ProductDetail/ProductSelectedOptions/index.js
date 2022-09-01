import { store } from '../../../store/store.js';
import { changeProductQuantity } from '../../../store/action.js';
import { storage } from '../../../utils/storage.js';

const ProductSelectedOptions = () => {
	let state;

	const handleClickProductOrder = (e) => {
		const $element = e.target;

		if ($element.tagName === 'BUTTON') {
			e.preventDefault();

			const { selectedOptions } = state;
			const cart = storage.getItem('products_cart', []);

			storage.setItem(
				'products_cart',
				cart.concat(
					selectedOptions.map((selectedOption) => ({
						productId: selectedOption.productId,
						optionId: selectedOption.optionId,
						quantity: selectedOption.quantity,
					})),
				),
			);
		}
	};

	const handleChangeProductQuantity = (e) => {
		const $element = e.target;

		if ($element.tagName === 'INPUT') {
			const optionId = Number($element.dataset.optionid);
			const nextQuantity = Number($element.value);

			if (typeof nextQuantity === 'number') {
				const payload = {
					optionId,
					nextQuantity,
				};

				store.dispatch(changeProductQuantity(payload));
			}
		}
	};

	const bindEvents = (target) => {
		target.addEventListener('change', handleChangeProductQuantity);
		target.addEventListener('click', handleClickProductOrder);
	};

	const getTotalPrice = () => {
		const { productItem, selectedOptions } = state;
		const { price } = productItem;
		const totalPrice = selectedOptions.reduce(
			(acc, option) => acc + (price + option.optionPrice) * option.quantity,
			0,
		);

		return totalPrice;
	};

	const getProductMaxQuantity = (selectedOption) => {
		const { productItem } = state;
		const productOption = productItem.productOptions.filter(
			(option) => option.id === selectedOption.optionId,
		)[0];

		return productOption.stock;
	};

	const render = () => {
		const { productItem, selectedOptions } = state;

		const $productSelectedOptions = document.createElement('div');
		$productSelectedOptions.setAttribute(
			'class',
			'ProductDetail__selectedOptions',
		);

		$productSelectedOptions.innerHTML = `
      <h3>선택된 상품</h3>
      <ul>
      ${selectedOptions
				.map(
					(selectedOption) => `
        <li>
          ${selectedOption.optionName} ${
						productItem.price + selectedOption.optionPrice
					}원 <div><input type="number" value="${
						selectedOption.quantity
					}" data-optionid=${
						selectedOption.optionId
					} min="1" max=${getProductMaxQuantity(selectedOption)}>개</div>
        </li>
      `,
				)
				.join('')}
      </ul>
      <div class="ProductDetail__totalPrice">${getTotalPrice()}원</div>
      <button class="OrderButton">주문하기</button>
    `;

		return $productSelectedOptions;
	};

	return () => {
		state = store.getState();

		const $productSelectedOptions = render();
		bindEvents($productSelectedOptions);

		return $productSelectedOptions;
	};
};

export default ProductSelectedOptions;
