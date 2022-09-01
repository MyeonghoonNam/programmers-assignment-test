import { router } from './router/router.js';
import { ProductListPage, ProductDetailPage, CartPage } from './pages/index.js';

const App = () => {
	router.init({
		'/web/': ProductListPage(),
		'/web/products/:productId': ProductDetailPage(),
		'/web/cart': CartPage(),
	});

	let $target;

	const render = () => {
		const { pathname } = window.location;
		const $app = router.routing(pathname, $target);

		return $app;
	};

	return (root) => {
		$target = root;

		const $app = render();
		return $app;
	};
};

export default App;
