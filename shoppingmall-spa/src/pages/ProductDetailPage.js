import { store } from '../store/store.js';
import { getProductItem } from '../api/fetchProductItem.js';
import { ProductDetail } from '../components/index.js';

const ProductDetailPage = () => {
	const COMPONENTS = {
		ProductDetail: ProductDetail(),
	};

	const fetchData = async () => {
		const [, , , productId] = window.location.pathname.split('/');
		const productItem = await getProductItem(productId);

		store.setState({ productItem });
	};

	const render = ({ target, productItem }) => {
		const $container = target.cloneNode();
		const $productDetailPage = document.createElement('div');
		$productDetailPage.setAttribute('class', 'ProductDetailPage');

		const { name } = productItem;

		const $header = document.createElement('h1');
		$header.innerText = name;

		const $productDetail = COMPONENTS.ProductDetail(productItem);

		$productDetailPage.appendChild($header);
		$productDetailPage.appendChild($productDetail);

		$container.appendChild($productDetailPage);

		return $container;
	};

	return async (target) => {
		await fetchData();

		const { productItem } = store.getState();
		const $productDetailPage = render({ target, productItem });

		return $productDetailPage;
	};
};

export default ProductDetailPage;
