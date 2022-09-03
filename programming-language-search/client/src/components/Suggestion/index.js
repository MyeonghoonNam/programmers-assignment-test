import { store } from '../../store/store.js';

const Suggestion = () => {
	let state;

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
              ${language}
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
