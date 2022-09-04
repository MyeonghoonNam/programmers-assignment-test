import {
	SelectedLanguage,
	SearchInput,
	Suggestion,
} from './components/index.js';
import { store } from './store/store.js';
import { storage } from './lib/storage.js';

const App = () => {
	let $element;

	const COMPONENTS = {
		SelectedLanguage: SelectedLanguage(),
		SearchInput: SearchInput(),
		Suggestion: Suggestion(),
	};

	const setup = () => {
		const payload = storage.getItem('state');

		if (payload) {
			store.setState(payload);
		}
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

	setup();

	return (target) => {
		$element = render(target);
		return $element;
	};
};

export default App;
