import { store } from '../../store/store.js';
import ProductSelectedOptions from './ProductSelectedOptions/index.js';
import getNumberWithCommas from '../../utils/getNumberWithCommas.js';
import { changeSelect } from '../../store/action.js';

const ProductDetail = () => {
	let state;

	const COMPONENTS = {
		ProductSelectedOptions: ProductSelectedOptions(),
	};

	const handleChangeSelect = (e) => {
		const { productItem, selectedOptions } = state;
		const $element = e.target;

		if ($element.tagName === 'SELECT') {
			const selectedOptionId = Number($element.value);
			const option = productItem.productOptions.find(
				(productOption) => productOption.id === selectedOptionId,
			);
			const hasSelectedOption = selectedOptions.some(
				(selectedOption) => selectedOption.optionId === selectedOptionId,
			);

			if (option && !hasSelectedOption) {
				const payload = {
					productId: productItem.id,
					optionId: option.id,
					optionName: option.name,
					optionPrice: option.price,
					quantity: 1,
				};

				store.dispatch(changeSelect(payload));
			}
		}
	};

	const bindEvents = (target) => {
		target.addEventListener('change', handleChangeSelect);
	};

	const render = () => {
		const { productItem } = state;

		const $productDetail = document.createElement('div');
		$productDetail.setAttribute('class', 'ProductDetail');
		$productDetail.innerHTML = `
      <img src=${productItem.imageUrl} >
      <div class="ProductDetail__info">
        <h2>${productItem.name}</h2>
        <div class="ProductDetail__price">
          ${getNumberWithCommas(productItem.price)}원~
        </div>
        <select>
          <option>선택하세요.</option>
        ${productItem.productOptions.map(
					(option) => `
          <option value=${option.id} ${option.stock === 0 ? 'disabled' : ''}>
            ${option.stock === 0 ? '(품절) ' : ''}${productItem.name} ${
						option.name
					} ${option.price > 0 ? `(+${option.price}원)` : ''}
          </option>
        `,
				)}
        </select>
    `;

		const $productSelectedOptions = COMPONENTS.ProductSelectedOptions();

		$productDetail
			.querySelector('.ProductDetail__info')
			.appendChild($productSelectedOptions);

		return $productDetail;
	};

	return () => {
		state = store.getState();

		const $productDetail = render();
		bindEvents($productDetail);

		return $productDetail;
	};
};

export default ProductDetail;
