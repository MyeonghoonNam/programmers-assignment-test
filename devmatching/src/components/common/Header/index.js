const Header = () => {
	const render = () => {
		const $header = document.createElement('header');
		$header.innerHTML = `
      <div class="header header_left">
        <span class="menu_name" id="menu_home">HOME</span>
      </div>
      <div class="header header_right">
        <div class="menu_name" id="menu_signup">SIGNUP</div>
      </div>
    `;

		return $header;
	};

	return () => {
		const $header = render();
		return $header;
	};
};

export default Header;
