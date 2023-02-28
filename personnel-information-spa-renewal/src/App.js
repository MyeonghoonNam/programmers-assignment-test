import Header from "./components/Header.js";
import HomePage from "./page/HomePage.js";
import SignupPage from "./page/SignupPage.js";

class App {
  constructor(container) {
    this.$container = container;
    this.render();
  }

  render() {
    const $header = new Header(this.$container);
    $header.render();

    const $main = document.createElement("main");
    $main.setAttribute("id", "page_content");
    this.$container.appendChild($main);

    const homePage = new HomePage($main);
    const signupPage = new SignupPage($main);

    homePage.render();

    document.addEventListener("urlChange", (e) => {
      let pathname = e.detail.href;

      $main.innerHTML = "";

      switch (pathname) {
        case "/web/":
          homePage.render();
          break;
        case "/web/signup":
          signupPage.render();
          break;
        default:
      }
    });
  }
}

export default App;
