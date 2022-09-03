import { store } from '../../store/store.js';
import { keyupSuggestion } from '../../store/action.js';

const Suggestion = () => {
	let $element;
	let state;

	const renderHighlight = (language) => {
		const { keyword } = state;

		const keywordReg = new RegExp(keyword, 'i');

		const highlightKeyword = language.match(keywordReg)[0];
		const highlightKeywordReg = new RegExp(highlightKeyword, 'gi');

		const result = language.replace(
			highlightKeywordReg,
			`<span class="Suggestion__item--matched">${highlightKeyword}</span>`,
		);

		return result;
	};

	const handleKeyUpArrowAndEnter = (e) => {
		const { currentFocusSuggestionLanguageIndex, suggestionLanguages } = state;

		if (suggestionLanguages.length > 0) {
			const { key } = e;
			const actionKeys = ['ArrowUp', 'ArrowDown'];
			const lastSuggestionLanguageIndex = suggestionLanguages.length - 1;
			let nextFocusSuggestionLanguageIndex =
				currentFocusSuggestionLanguageIndex;

			if (actionKeys.includes(key)) {
				if (key === 'ArrowUp') {
					nextFocusSuggestionLanguageIndex =
						currentFocusSuggestionLanguageIndex === 0
							? lastSuggestionLanguageIndex
							: currentFocusSuggestionLanguageIndex - 1;
				} else if (key === 'ArrowDown') {
					nextFocusSuggestionLanguageIndex =
						currentFocusSuggestionLanguageIndex === lastSuggestionLanguageIndex
							? 0
							: currentFocusSuggestionLanguageIndex + 1;
				}
			}

			const payload = {
				index: nextFocusSuggestionLanguageIndex,
			};

			store.dispatch(keyupSuggestion(payload));
		}
	};

	const bindEvents = () => {
		window.addEventListener('keyup', handleKeyUpArrowAndEnter);
	};

	const render = () => {
		const { currentFocusSuggestionLanguageIndex, suggestionLanguages } = state;

		const $suggestion = document.createElement('div');
		$suggestion.setAttribute('class', 'Suggestion');

		if (suggestionLanguages.length > 0) {
			$suggestion.innerHTML = `
        <ul>
        ${suggestionLanguages
					.map(
						(language, index) => `
            <li ${
							index === currentFocusSuggestionLanguageIndex
								? 'class="Suggestion__item--selected"'
								: ''
						}>${renderHighlight(language)}</li>
          `,
					)
					.join('')}
        </ul>
      `;
		} else {
			$suggestion.style.display = 'none';
		}

		return $suggestion;
	};

	return () => {
		state = store.getState();
		$element = render();
		console.log(state);
		bindEvents($element);

		return $element;
	};
};

export default Suggestion;
