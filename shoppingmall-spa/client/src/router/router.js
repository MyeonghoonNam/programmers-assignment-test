import getClosestElement from '../utils/getClosestElement.js';
import { store } from '../store/store.js';

const Router = (routes) => {
	const ROUTES = { ...routes };
	let $root;

	window.addEventListener('click', (e) => {
		const $element = getClosestElement(e.target, 'li');

		if ($element?.className === 'Product') {
			const { productId } = $element.dataset;

			store.setState();
			routePush(`/web/products/${productId}`);
		}
	});

	window.addEventListener('click', (e) => {
		const $element = e.target;

		if ($element.className === 'OrderButton') {
			store.setState();
			routePush('/web/cart');
		}
	});

	window.addEventListener('popstate', () => {
		store.setState();
		routing(window.location.pathname, 'Routing');
	});

	const routePush = (pathname) => {
		window.history.pushState({}, null, pathname);
		routing(pathname, 'Routing');
	};

	const routing = async (pathname, mode = 'StateChange') => {
		const [, prefix, routename, param] = pathname.split('/');
		let page;

		if (ROUTES[pathname]) {
			page = await ROUTES[pathname]($root);
		} else if (param) {
			page = await ROUTES[`/${prefix}/${routename}/:productId`]($root, param);
		}

		if (page) {
			if (mode === 'Routing') {
				render(page);
			} else if (mode === 'StateChange') {
				return page;
			}
		} else {
			// page = not found Page
		}

		return false;
	};

	const render = (page) => {
		const $target = $root;

		$target.innerHTML = '';
		$target.appendChild(page);
	};

	return (target) => {
		$root = target;

		const { pathname } = window.location;
		const $element = routing(pathname);
		return $element;
	};
};

export default Router;
