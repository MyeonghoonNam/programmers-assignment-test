const Suggestion = () => {
	const render = () => {
		const $suggestion = document.createElement('div');
		$suggestion.setAttribute('class', 'Suggestion');
		$suggestion.innerHTML = `
      <ul>
        <li class="Suggestion__item--selected">Action<span class="Suggestion__item--matched">Script</span></li>
        <li>Java<span class="Suggestion__item--matched">Script</span></li>
        <li>Type<span class="Suggestion__item--matched">Script</span></li>
        <li>Pure<span class="Suggestion__item--matched">Script</span></li>
      </ul>
    `;

		return $suggestion;
	};

	return () => {
		const $suggestion = render();
		return $suggestion;
	};
};

export default Suggestion;
