const SearchInput = () => {
	const render = () => {
		const $searchInput = document.createElement('form');
		$searchInput.setAttribute('class', 'SearchInput');
		$searchInput.innerHTML = `
      <input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요." value="Script">
    `;

		return $searchInput;
	};

	return () => {
		const $searchInput = render();
		return $searchInput;
	};
};

export default SearchInput;
