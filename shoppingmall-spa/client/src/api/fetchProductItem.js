import api from './api.js';

const BASE_URL = 'http://localhost:8080/products';

const HEADERS = {
	'Content-Type': 'application/json',
};

const getProductItem = (id) => api.get(`${BASE_URL}/${id}`, HEADERS);

export { getProductItem };
