import { ProductList } from '../components/index.js';
import { getProductList } from '../api/fetchProductList.js';
import { store } from '../store/store.js';

const ProductListPage = () => {
	const COMPONENTS = {
		ProductList: ProductList(),
	};

	const fetchData = async () => {
		const productList = await getProductList();
		store.setState({ productList });
	};

	const render = (target) => {
		const $container = target.cloneNode();

		const $productListPage = document.createElement('div');
		$productListPage.setAttribute('class', 'ProductListPage');

		const $header = document.createElement('h1');
		$header.innerText = '상품목록';

		const $productList = COMPONENTS.ProductList();

		$productListPage.appendChild($header);
		$productListPage.appendChild($productList);

		$container.appendChild($productListPage);

		return $container;
	};

	return async (target) => {
		await fetchData();

		const $productListPage = render(target);
		return $productListPage;
	};
};

export default ProductListPage;
