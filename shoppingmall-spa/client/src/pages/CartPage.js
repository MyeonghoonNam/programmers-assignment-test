import { Cart } from '../components/index.js';
import { storage } from '../utils/storage.js';
import { router } from '../router/router.js';

const CartPage = () => {
	let $target;

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

	return (root) => {
		$target = root;

		const cart = storage.getItem('products_cart', false);

		if (!cart) {
			// eslint-disable-next-line no-alert
			window.alert('장바구니가 비어 있습니다');
			router.routeChange('/web/');

			return false;
		}

		const $cartPage = render();
		return $cartPage;
	};
};

export default CartPage;
