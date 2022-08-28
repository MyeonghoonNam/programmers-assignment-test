const ContentTitle = () => {
	const render = ({ title }) => {
		const $contentTitle = document.createElement('div');
		$contentTitle.setAttribute('class', 'content_title');
		$contentTitle.innerHTML = `
      <h1>${title}</h1>
    `;

		return $contentTitle;
	};

	return (title) => {
		const $contentTitle = render({ title });
		return $contentTitle;
	};
};

export default ContentTitle;
