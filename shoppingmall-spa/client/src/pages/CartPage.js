import { Cart } from '../components/index.js';
import { store } from '../store/store.js';

const CartPage = () => {
	let $target;
	let state;

	const COMPONENTS = {
		Cart: Cart(),
	};

	const render = () => {
		const $container = $target.cloneNode();

		const $cartPage = document.createElement('div');
		$cartPage.setAttribute('class', 'CartPage');

		const $header = document.createElement('h1');
		$header.innerText = '장바구니';

		const $cart = COMPONENTS.Cart();

		$cartPage.appendChild($header);
		$cartPage.appendChild($cart);

		$container.appendChild($cartPage);

		return $container;
	};

	return (target) => {
		$target = target;
		state = store.getState();

		const $cartPage = render(target);
		return $cartPage;
	};
};

export default CartPage;
