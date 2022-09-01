import { store } from '../store/store.js';

const Router = () => {
	const ROUTES = {};
	let $target;

	const init = (routes) => {
		Object.assign(ROUTES, routes);

		window.addEventListener('popstate', () => {
			routeChange(window.location.pathname);
		});
	};

	const routeChange = async (pathname) => {
		window.history.pushState({}, null, pathname);
		store.setState();

		const page = await routing(pathname, $target);
		render(page);
	};

	const routing = async (pathname, target) => {
		if (!$target) {
			$target = target;
		}

		const [, prefix, routename, param] = pathname.split('/');
		let page;

		if (ROUTES[pathname]) {
			page = await ROUTES[pathname]($target);
		} else if (param) {
			page = await ROUTES[`/${prefix}/${routename}/:productId`]($target, param);
		}

		return page;
	};

	const render = (page) => {
		document.body.innerHTML = '';
		document.body.appendChild(page);
	};

	return { init, routing, routeChange };
};

export const router = Router();
