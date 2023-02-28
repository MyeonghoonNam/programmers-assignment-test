class ContentTitle {
  constructor(container, title) {
    this.$container = container;
    this.$title = title;
  }

  render() {
    const $div = document.createElement("div");
    $div.setAttribute("class", "content_title");

    const $h1 = document.createElement("h1");
    $h1.appendChild(document.createTextNode(this.$title));

    $div.appendChild($h1);
    this.$container.appendChild($div);
  }
}

export default ContentTitle;
