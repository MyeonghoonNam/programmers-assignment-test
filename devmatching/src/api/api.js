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
		const { url, headers = {}, body, method = 'GET' } = params;
		const config = {
			method,
			headers,
		};

		if (body) {
			config.body = JSON.stringify(body);
		}

		const response = await fetch(url, config);

		if (response.ok) {
			return parseResponse(response);
		}

		throw new Error('API 통신 오류');
	} catch (e) {
		// eslint-disable-next-line no-console
		console.log(e.message);
		return false;
	}
};

const get = async (url, headers) => {
	const response = await request({
		url,
		headers,
		method: 'GET',
	});

	return response.data;
};

export default {
	get,
};
