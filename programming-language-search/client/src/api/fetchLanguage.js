import api from './api.js';

const BASE_URL = 'http://localhost:8080';

const HEADERS = {
	'Content-Type': 'application/json',
};

const getSearchInput = (keyword) =>
	api.get(`${BASE_URL}/languages?keyword=${keyword}`, HEADERS);

export { getSearchInput };
