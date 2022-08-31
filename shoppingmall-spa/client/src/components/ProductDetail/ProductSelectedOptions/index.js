import { store } from '../../../store/store.js';

const ProductSelectedOptions = () => {
	let state;

	const getTotalPrice = () => {
		const { productItem, selectedOptions } = state;
		const { price } = productItem;
		const totalPrice = selectedOptions.reduce(
			(acc, option) => acc + (price + option.optionPrice) * option.quantity,
			0,
		);

		return totalPrice;
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
					}">개</div>
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
		return $productSelectedOptions;
	};
};

export default ProductSelectedOptions;
