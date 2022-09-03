import { getSearchInput } from '../../api/fetchLanguage.js';
import { store } from '../../store/store.js';
import { searchInput } from '../../store/action.js';

const SearchInput = () => {
	const handleChangeSearchInput = async (e) => {
		const keyword = e.target.value;
		const suggestionLanguages = await getSearchInput(keyword);

		const payload = {
			keyword,
			suggestionLanguages,
		};

		store.dispatch(searchInput(payload));
	};

	const bindEvents = (target) => {
		target
			.querySelector('.SearchInput__input')
			.addEventListener('keyup', handleChangeSearchInput);
	};

	const render = () => {
		const $searchInput = document.createElement('form');
		$searchInput.setAttribute('class', 'SearchInput');
		$searchInput.innerHTML = `
      <input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요.">
    `;

		return $searchInput;
	};

	return () => {
		const $searchInput = render();
		bindEvents($searchInput);

		return $searchInput;
	};
};

export default SearchInput;
