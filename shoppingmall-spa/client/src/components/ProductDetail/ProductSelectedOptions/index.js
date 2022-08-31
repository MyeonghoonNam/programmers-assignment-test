import { store } from '../../../store/store.js';
import { changeProductQuantity } from '../../../store/action.js';

const ProductSelectedOptions = () => {
	let state;

	const handleChangeProductQuantity = (e) => {
		const $element = e.target;

		if ($element.tagName === 'INPUT') {
			const optionId = Number($element.dataset.optionid);
			const nextQuantity = Number($element.value);

			if (typeof nextQuantity === 'number') {
				store.dispatch(changeProductQuantity({ optionId, nextQuantity }));
			}
		}
	};

	const bindEvents = (target) => {
		target.addEventListener('change', handleChangeProductQuantity);
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
					}" data-optionid=${selectedOption.optionId} min="1" >개</div>
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
