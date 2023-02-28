import Header from "./components/Header.js";

class App {
  constructor(container) {
    this.$container = container;
    this.render();
  }

  render() {
    const $header = new Header(this.$container);

    $header.render();
  }
}

export default App;
