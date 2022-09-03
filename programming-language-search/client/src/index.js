import App from './App.js';
import applyDiff from './lib/applyDiff.js';
import { store } from './store/store.js';

const config = {
	root: '.App',
};

const app = App();

const render = () => {
	window.requestAnimationFrame(() => {
		const entry = document.body;
		const realDom = document.querySelector(config.root);
		const virtualDom = app(realDom);

		applyDiff(entry, realDom, virtualDom);
	});
};

store.subscribe(render);
render();
