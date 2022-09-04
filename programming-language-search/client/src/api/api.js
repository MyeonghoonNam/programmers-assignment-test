const CACHE = {};

const parseResponse = async (response) => {
	const { status } = response;
	let data;

	if (status !== 204) {
		data = await response.json();
	}

	return { status, data };
};

const request = async (params) => {
	try {
		const { url, method = 'GET', headers = {}, body } = params;

		if (CACHE[url]) {
			return CACHE[url];
		}

		const config = {
			method,
			headers,
		};

		if (body) {
			config.body = JSON.stringify(body);
		}

		const response = await fetch(url, config);

		if (response.ok) {
			const res = await parseResponse(response);
			CACHE[url] = res;

			return res;
		}

		throw new Error('API 오류');
	} catch (e) {
		// eslint-disable-next-line no-console
		console.log(e.message);
		return false;
	}
};

const get = async (url, headers) => {
	const response = await request({
		url,
		method: 'GET',
		headers,
	});

	return response.data;
};

export default {
	get,
};
