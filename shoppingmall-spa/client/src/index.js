import App from './App.js';
import applyDiff from './utils/applyDiff.js';
import { store } from './store/store.js';

const config = {
	root: '.App',
};

const app = App();

const render = () => {
	window.requestAnimationFrame(async () => {
		const entry = document.body;
		const realDom = document.querySelector(config.root);
		const virtualDom = await app(realDom);

		applyDiff(entry, realDom, virtualDom);
	});
};

store.subscribe(render);
render();
