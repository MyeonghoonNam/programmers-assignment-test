import { store } from '../../store/store.js';

const SelectedLanguage = () => {
	let $element;
	let state;

	const render = () => {
		const { selectedLanguages } = state;

		const $selectedLanguage = document.createElement('div');
		$selectedLanguage.setAttribute('class', 'SelectedLanguage');
		$selectedLanguage.innerHTML = `
      <ul>
      ${selectedLanguages
				.map(
					(language) => `
        <li>${language}</li>
      `,
				)
				.join('')}
      </ul>
    `;

		return $selectedLanguage;
	};

	return () => {
		state = store.getState();
		$element = render();

		return $element;
	};
};

export default SelectedLanguage;
