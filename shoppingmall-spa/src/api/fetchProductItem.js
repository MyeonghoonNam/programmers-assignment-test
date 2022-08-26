import api from './api.js';

const BASE_URL =
	'https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev/products';

const HEADERS = {
	'Content-Type': 'application/json',
};

const getProductItem = (id) => api.get(`${BASE_URL}/${id}`, HEADERS);

export { getProductItem };
