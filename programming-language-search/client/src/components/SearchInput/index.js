import { getSearchInput } from '../../api/fetchLanguage.js';
import { store } from '../../store/store.js';
import { searchInput } from '../../store/action.js';
import { debounce } from '../../lib/debounce.js';

const SearchInput = () => {
	let $element;
	let state;

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

		if (!actionIgnoreKeys.includes(e.key)) {
			const payload = {
				keyword,
				suggestionLanguages: [],
			};

			if (keyword.length !== 0) {
				const suggestionLanguages = await getSearchInput(keyword);
				payload.suggestionLanguages = suggestionLanguages;
			}

			store.dispatch(searchInput(payload));
		}
	};

	const bindEvents = () => {
		$element
			.querySelector('.SearchInput__input')
			.addEventListener('keyup', debounce(handleChangeSearchInput, 300));

		$element.addEventListener('submit', handleSubmitForm);
	};

	const focusInput = () => {
		const { keyword } = state;

		const $input = $element.querySelector('.SearchInput__input');
		const value = keyword;

		$input.focus();
		$input.value = value;
	};

	const render = () => {
		const $searchInput = document.createElement('form');
		$searchInput.setAttribute('class', 'SearchInput');
		$searchInput.innerHTML = `
      <input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요." autofocus />
    `;

		return $searchInput;
	};

	return () => {
		state = store.getState();
		$element = render();

		focusInput();
		bindEvents();

		return $element;
	};
};

export default SearchInput;
