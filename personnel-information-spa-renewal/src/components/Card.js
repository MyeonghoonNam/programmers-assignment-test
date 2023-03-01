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
    const $div = document.createElement("div");
    $div.setAttribute("idx", this.idx);
    $div.setAttribute("class", "card");

    const $front = this.createCardPlaneElement("front", this.nickname);
    const $back = this.createCardPlaneElement("back", this.mbti);

    $div.appendChild($front);
    $div.appendChild($back);

    this.$container.appendChild($div);
  }
}

export default Card;
