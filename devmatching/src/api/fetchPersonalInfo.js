import api from './api.js';

const BASE_URL = 'http://127.0.0.1:5500/src/data/new_data.json';

const HEADERS = {
	'Content-Type': 'application/json',
};

const getPersonalInfo = () => api.get(BASE_URL, HEADERS);

export { getPersonalInfo };
