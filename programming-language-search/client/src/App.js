const App = () => {
	const render = (target) => {
		const $container = target.cloneNode();
		const $app = document.createElement('main');
		$app.innerHTML = `
      init App
    `;

		$container.appendChild($app);

		return $container;
	};

	return (target) => {
		const $app = render(target);
		return $app;
	};
};

export default App;
