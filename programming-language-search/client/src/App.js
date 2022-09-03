import { SelectedLanguage, SearchInput } from './components/index.js';

const App = () => {
	const COMPONENTS = {
		SelectedLanguage: SelectedLanguage(),
		SearchInput: SearchInput(),
	};

	const render = (target) => {
		const $app = target.cloneNode();

		const $selectedLanguage = COMPONENTS.SelectedLanguage();
		const $searchInput = COMPONENTS.SearchInput();

		$app.appendChild($selectedLanguage);
		$app.appendChild($searchInput);

		return $app;
	};

	return (target) => {
		const $app = render(target);
		return $app;
	};
};

export default App;
