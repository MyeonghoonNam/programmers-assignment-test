import { store } from '../../store/store.js';

const Suggestion = () => {
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

	const render = () => {
		const { suggestionLanguages } = state;

		const $suggestion = document.createElement('div');
		$suggestion.setAttribute('class', 'Suggestion');

		if (suggestionLanguages.length > 0) {
			$suggestion.innerHTML = `
        <ul>
        ${suggestionLanguages
					.map(
						(language) => `
            <li class="Suggestion__item--selected">
              ${renderHighlight(language)}
            </li>
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

		const $suggestion = render();
		return $suggestion;
	};
};

export default Suggestion;
