import {
	SelectedLanguage,
	SearchInput,
	Suggestion,
} from './components/index.js';

const App = () => {
	let $element;

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
		$element = render(target);
		return $element;
	};
};

export default App;
