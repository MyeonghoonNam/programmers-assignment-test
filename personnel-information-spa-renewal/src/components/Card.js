class Card {
  constructor(container, idx, nickname, mbti) {
    this.$container = container;
    this.idx = idx;
    this.nickname = nickname;
    this.mbti = mbti;
  }

  /**
   * @param {string} side: 카드가 보여지는 방향 (front, back)
   * @param {string} data: 카드에 보여지는 Text 정보
   */
  createCardPlaneElement(side, data) {
    const $div = document.createElement("div");
    $div.setAttribute("class", `card_plane card_plane--${side}`);
    $div.appendChild(document.createTextNode(data));

    return $div;
  }

  render() {
    const cardStatus = JSON.parse(localStorage.getItem("cardStatus")) || [];
    const index = this.idx - 1;

    if (!cardStatus[index]) {
      cardStatus.push({ idx: this.idx, status: "card" });
      localStorage.setItem("cardStatus", JSON.stringify(cardStatus));
    }

    const $div = document.createElement("div");
    $div.setAttribute("idx", cardStatus[index].idx);
    $div.setAttribute("class", cardStatus[index].status);

    const $front = this.createCardPlaneElement("front", this.nickname);
    const $back = this.createCardPlaneElement("back", this.mbti);

    $div.appendChild($front);
    $div.appendChild($back);

    this.$container.appendChild($div);
  }
}

export default Card;
