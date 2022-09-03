import {
	SelectedLanguage,
	SearchInput,
	Suggestion,
} from './components/index.js';

const App = () => {
	const COMPONENTS = {
		SelectedLanguage: SelectedLanguage(),
		SearchInput: SearchInput(),
		Suggestion: Suggestion(),
	};

	const render = (target) => {
		const $app = target.cloneNode();

		const $selectedLanguage = COMPONENTS.SelectedLanguage();
		const $searchInput = COMPONENTS.SearchInput();
		const $suggestion = COMPONENTS.Suggestion();

		$app.appendChild($selectedLanguage);
		$app.appendChild($searchInput);
		$app.appendChild($suggestion);

		return $app;
	};

	return (target) => {
		const $app = render(target);
		return $app;
	};
};

export default App;
