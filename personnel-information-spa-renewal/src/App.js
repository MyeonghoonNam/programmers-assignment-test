class App {
  constructor(container) {
    this.$container = container;
    this.render();
  }

  render() {
    const div = document.createElement("div");
    div.innerHTML = "init";

    this.$container.appendChild(div);
  }
}

export default App;
