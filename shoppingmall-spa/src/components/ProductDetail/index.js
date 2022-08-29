import { ProductSelectedOptions } from '../index.js';
import getNumberWithCommas from '../../utils/getNumberWtihCommas.js';

const ProductDetail = () => {
	const COMPONENTS = {
		ProductSelectedOptions: ProductSelectedOptions(),
	};

	const render = (productItem) => {
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
          <option value=${option.id} ${option.stock === 0 ? 'disaled' : ''}>
            ${option.stock === 0 ? '(품절) ' : ''}${productItem.name} ${
						option.name
					} ${option.price > 0 ? `(+${option.price}원)` : ''}
          </option>
        `,
				)}
        </select>
    `;

		const $productSelectedOptions = COMPONENTS.ProductSelectedOptions();

		$productDetail.appendChild($productSelectedOptions);

		return $productDetail;
	};

	return (productItem) => {
		const $productDetail = render(productItem);
		return $productDetail;
	};
};

export default ProductDetail;
