class Header {
  constructor(container) {
    this.$container = container;
  }

  /**
   *
   * @param {string} position: menu의 위치 (left, right)
   * @param {string} id: menu의 이름 (home, signup)
   * @param {string} text: menu에 보여지는 text (사용자 지정에 따른 랜덤값)
   */
  createMenuElement(position, id, text) {
    const $div = document.createElement("div");
    $div.setAttribute("class", `header header_${position}`);

    const $span = document.createElement("span");
    $span.setAttribute("class", "menu_name");
    $span.setAttribute("id", `menu_${id}`);
    $span.appendChild(document.createTextNode(text));

    $div.appendChild($span);

    return $div;
  }

  render() {
    const $header = document.createElement("header");
    const $home_menu = this.createMenuElement("left", "home", "HOME");
    const $signup_menu = this.createMenuElement("right", "signup", "SIGNUP");

    $header.appendChild($home_menu);
    $header.appendChild($signup_menu);

    this.$container.appendChild($header);

    $home_menu.addEventListener("click", () => {
      window.history.pushState("", "", "/web/");

      const urlChange = new CustomEvent("urlChange", {
        detail: { href: "/web/" },
      });

      document.dispatchEvent(urlChange);
    });

    $signup_menu.addEventListener("click", () => {
      window.history.pushState("", "", "/web/signup");

      const urlChange = new CustomEvent("urlChange", {
        detail: { href: "/web/signup" },
      });

      document.dispatchEvent(urlChange);
    });
  }
}

export default Header;
