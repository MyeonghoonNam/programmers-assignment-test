import { ProductList } from '../components/index.js';
import { getProductList } from '../api/fetchProductList.js';
import { store } from '../store/store.js';

const ProductListPage = () => {
	let $target;

	const COMPONENTS = {
		ProductList: ProductList(),
	};

	const fetchData = async () => {
		const productList = await getProductList();
		store.setState({ productList });
	};

	const render = () => {
		const $container = $target.cloneNode();

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

	return async (root) => {
		await fetchData();

		$target = root;

		const $productListPage = render();
		return $productListPage;
	};
};

export default ProductListPage;
