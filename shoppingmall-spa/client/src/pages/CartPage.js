import { Cart } from '../components/index.js';
import { storage } from '../utils/storage.js';
import { router } from '../router/router.js';
import { store } from '../store/store.js';
import { getProductItem } from '../api/fetchProductItem.js';

const CartPage = () => {
	let $target;

	const COMPONENTS = {
		Cart: Cart(),
	};

	const fetchData = async () => {
		const cart = storage.getItem('products_cart', false);

		if (!cart || cart.length === 0) {
			// eslint-disable-next-line no-alert
			window.alert('장바구니가 비어 있습니다');
			router.routeChange('/web/');

			return false;
		}

		const cartProductList = await Promise.all(
			cart.map(async (cartItem) => {
				const productItem = await getProductItem(cartItem.productId);
				const selectedOption = productItem.productOptions.find(
					(option) => option.id === cartItem.optionId,
				);

				return {
					imageUrl: productItem.imageUrl,
					productName: productItem.name,
					productPrice: productItem.price,
					optionName: selectedOption.name,
					optionPrice: selectedOption.price,
					quantity: cartItem.quantity,
				};
			}),
		);

		store.setState({ cartProductList });

		return false;
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

	return async (root) => {
		await fetchData();

		$target = root;

		const $cartPage = render();
		return $cartPage;
	};
};

export default CartPage;
