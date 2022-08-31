import { store } from '../store/store.js';
import { getProductItem } from '../api/fetchProductItem.js';
import { ProductDetail } from '../components/index.js';

const ProductDetailPage = () => {
	let $target;
	let state;

	const COMPONENTS = {
		ProductDetail: ProductDetail(),
	};

	const fetchData = async () => {
		const [, , , productId] = window.location.pathname.split('/');
		const productItem = await getProductItem(productId);

		store.setState({ productItem });
	};

	const render = () => {
		const { productItem } = state;

		const $container = $target.cloneNode();

		const $productDetailPage = document.createElement('div');
		$productDetailPage.setAttribute('class', 'ProductDetailPage');

		const $header = document.createElement('h1');
		$header.innerText = `${productItem.name} 상품 정보`;

		const $productDetail = COMPONENTS.ProductDetail();

		$productDetailPage.appendChild($header);
		$productDetailPage.appendChild($productDetail);

		$container.appendChild($productDetailPage);

		return $container;
	};

	return async (target) => {
		await fetchData();

		$target = target;
		state = store.getState();

		const $productDetailPage = render();
		return $productDetailPage;
	};
};

export default ProductDetailPage;
