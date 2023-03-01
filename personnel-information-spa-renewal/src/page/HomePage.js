import ContentTitle from "../components/ContentTitle.js";
import Cards from "../components/Cards.js";

class HomePage {
  constructor(container) {
    this.$container = container;
  }

  render() {
    const $title = new ContentTitle(this.$container, "Great PeoPle");
    const $cards = new Cards(this.$container);

    $title.render();
    $cards.render();
  }
}

export default HomePage;
