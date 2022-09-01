import { store } from '../../store/store.js';
import getNumberWithCommas from '../../utils/getNumberWithCommas.js';

const Cart = () => {
	let state;

	const getTotalPrice = () => {
		const { cartProductList } = state;

		const price = cartProductList.reduce(
			(acc, product) =>
				acc + (product.productPrice + product.optionPrice) * product.quantity,
			0,
		);

		return price;
	};

	const render = () => {
		const { cartProductList } = state;

		const $cart = document.createElement('div');
		$cart.setAttribute('class', 'Cart');
		$cart.innerHTML = `
      <ul>
      ${cartProductList
				.map(
					({
						imageUrl,
						productName,
						productPrice,
						optionName,
						optionPrice,
						quantity,
					}) => `
        <li class="Cart__item">
          <img src="${imageUrl}">
          <div class="Cart__itemDesription">
            <div>${productName} ${optionName} ${quantity}개</div>
            <div>${getNumberWithCommas(productPrice + optionPrice)}원</div>
          </div>
        </li>
        `,
				)
				.join('')}
      </ul>

      <div class="Cart__totalPrice">
        총 상품가격 ${getNumberWithCommas(getTotalPrice())}원
      </div>

      <button class="OrderButton">주문하기</button>
    `;

		return $cart;
	};

	return () => {
		state = store.getState();
		getTotalPrice();
		const $cart = render();
		return $cart;
	};
};

export default Cart;
