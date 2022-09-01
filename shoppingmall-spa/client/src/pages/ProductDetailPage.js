import { store } from '../store/store.js';
import { getProductItem } from '../api/fetchProductItem.js';
import { ProductDetail } from '../components/index.js';

const ProductDetailPage = () => {
	let $target;
	let state;

	const COMPONENTS = {
		ProductDetail: ProductDetail(),
	};

	const fetchData = async (id) => {
		const { productItem } = store.getState();

		if (store.isEmpty(productItem)) {
			const data = await getProductItem(id);

			Object.assign(productItem, data);
			store.setState({ productItem });
		}
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

	return async (root, param) => {
		await fetchData(param);

		$target = root;
		state = store.getState();

		const $productDetailPage = render();
		return $productDetailPage;
	};
};

export default ProductDetailPage;
