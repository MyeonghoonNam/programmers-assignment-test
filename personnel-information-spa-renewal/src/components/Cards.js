import Card from "./Card.js";

class Cards {
  constructor(container) {
    this.$container = container;
    this.personalInfo = JSON.parse(localStorage.getItem("personalInfo"));
    this.cardIncrementInterval = 4;
    this.cardIncrementIntervalCount = 2;
    this.currentCardCount = 0;
    this.totalCardCount = this.personalInfo.length;
  }

  infiniteScroll(container) {
    let target = container.lastChild;

    const io = new IntersectionObserver(
      (entry, observer) => {
        if (entry[entry.length - 1].isIntersecting) {
          observer.unobserve(target);

          for (
            let i = this.currentCardCount;
            i < this.cardIncrementInterval * this.cardIncrementIntervalCount;
            i++
          ) {
            if (this.personalInfo[i]) {
              const { idx, nickname, mbti } = this.personalInfo[i];
              const card = new Card(container, idx, nickname, mbti);

              card.render();
              this.currentCardCount++;
            }
          }

          this.cardIncrementIntervalCount++;
          target = container.lastChild;

          if (this.currentCardCount !== this.totalCardCount) {
            observer.observe(target);
          }
        }
      },
      {
        threshold: 0.7,
      }
    );

    io.observe(target);
  }

  async render() {
    const $div = document.createElement("div");
    $div.setAttribute("id", "cards_container");

    $div.addEventListener("click", (e) => {
      const $card = e.target.closest(".card");

      if (!$card) return;

      $card.classList.toggle("is-flipped");

      const idx = $card.getAttribute("idx");
      const status = $card.getAttribute("class");
      const cardStatus = JSON.parse(localStorage.getItem("cardStatus"));

      cardStatus[idx].status = status;
      localStorage.setItem("cardStatus", JSON.stringify(cardStatus));
    });

    for (let i = 0; i < this.cardIncrementInterval; i++) {
      const { idx, nickname, mbti } = this.personalInfo[i];
      const card = new Card($div, idx, nickname, mbti);

      card.render();
      this.currentCardCount++;
    }

    this.infiniteScroll($div);
    this.$container.appendChild($div);
  }
}

export default Cards;
