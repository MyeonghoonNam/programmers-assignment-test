import { getSearchInput } from '../../api/fetchLanguage.js';
import { store } from '../../store/store.js';
import { searchInput } from '../../store/action.js';
import { debounce } from '../../lib/debounce.js';

const SearchInput = () => {
	let $element;

	const handleSubmitForm = (e) => {
		e.preventDefault();
	};

	const handleChangeSearchInput = async (e) => {
		const actionIgnoreKeys = [
			'Enter',
			'ArrowUp',
			'ArrowDown',
			'ArrowLeft',
			'ArrowRight',
		];

		const keyword = e.target.value;

		if (!actionIgnoreKeys.includes(keyword)) {
			const suggestionLanguages = await getSearchInput(keyword);
			console.log(suggestionLanguages);
			const payload = {
				keyword,
				suggestionLanguages,
			};

			store.dispatch(searchInput(payload));
		}
	};

	const bindEvents = () => {
		$element
			.querySelector('.SearchInput__input')
			.addEventListener('keyup', debounce(handleChangeSearchInput, 500));

		$element.addEventListener('submit', handleSubmitForm);
	};

	const render = () => {
		const $searchInput = document.createElement('form');
		$searchInput.setAttribute('class', 'SearchInput');
		$searchInput.innerHTML = `
      <input class="SearchInput__input" type="text" autofocus placeholder="프로그램 언어를 입력하세요.">
    `;

		return $searchInput;
	};

	return () => {
		$element = render();
		bindEvents();

		return $element;
	};
};

export default SearchInput;
