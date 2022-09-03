const SelectedLanguage = () => {
	const render = () => {
		const $selectedLanguage = document.createElement('div');
		$selectedLanguage.setAttribute('class', 'SelectedLanguage');
		$selectedLanguage.innerHTML = `
      <ul>
        <li>JavaScript</li>
        <li>Python</li>
        <li>Elixir</li>
        <li>Java</li>
        <li>PHP</li>
      </ul>
    `;

		return $selectedLanguage;
	};

	return () => {
		const $selectedLanguage = render();
		return $selectedLanguage;
	};
};

export default SelectedLanguage;
