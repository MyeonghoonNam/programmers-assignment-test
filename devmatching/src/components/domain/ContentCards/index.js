const ContentCards = () => {
	const render = ({ personalInfo }) => {
		const $contentCards = document.createElement('div');
		$contentCards.setAttribute('id', 'cards_container');
		$contentCards.innerHTML = personalInfo
			.map(
				({ idx, nickname, mbti }) => `
          <div idx="${idx}" class="card">
            <div class="card_plane card_plane--front">${nickname}</div>
            <div class="card_plane card_plane--back">${mbti}</div>
          </div>
        `,
			)
			.join('');

		return $contentCards;
	};

	return (state) => {
		const $contentCards = render(state);

		return $contentCards;
	};
};

export default ContentCards;
