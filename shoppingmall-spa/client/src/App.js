import Router from './router/router.js';
import { ProductListPage, ProductDetailPage, CartPage } from './pages/index.js';

const App = () => {
	const router = Router({
		'/web/': ProductListPage(),
		'/web/products/:productId': ProductDetailPage(),
		'/web/cart': CartPage(),
	});

	return (target) => {
		const $app = router(target);
		return $app;
	};
};

export default App;
