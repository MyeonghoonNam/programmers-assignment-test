import Card from "./Card.js";

class Cards {
  constructor(container) {
    this.$container = container;
    this.personalInfo = JSON.parse(localStorage.getItem("personalInfo"));
  }

  render() {
    const $div = document.createElement("div");
    $div.setAttribute("id", "cards_container");

    this.personalInfo.forEach(({ idx, nickname, mbti }) => {
      const card = new Card($div, idx, nickname, mbti);
      card.render();
    });

    this.$container.appendChild($div);
  }
}

export default Cards;
