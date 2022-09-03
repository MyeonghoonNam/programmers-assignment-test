import { SelectedLanguage } from './components/index.js';

const App = () => {
	const COMPONENTS = {
		SelectedLanguage: SelectedLanguage(),
	};

	const render = (target) => {
		const $container = target.cloneNode();

		const $selectedLanguage = COMPONENTS.SelectedLanguage();

		$container.appendChild($selectedLanguage);

		return $container;
	};

	return (target) => {
		const $app = render(target);
		return $app;
	};
};

export default App;
