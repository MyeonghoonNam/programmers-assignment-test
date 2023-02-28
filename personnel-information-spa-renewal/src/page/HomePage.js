import ContentTitle from "../components/ContentTitle.js";

class HomePage {
  constructor(container) {
    this.$container = container;
  }

  render() {
    const $title = new ContentTitle(this.$container, "Great PeoPle");

    $title.render();
  }
}

export default HomePage;
