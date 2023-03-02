class Form {
  constructor(container) {
    this.$container = container;
  }

  createMarkElement(text) {
    const $span = document.createElement("span");
    $span.setAttribute("class", "mark");
    $span.appendChild(document.createTextNode(text));

    return $span;
  }

  createInputElement(type, id, labelText, placeholder, required) {
    const $span = document.createElement("span");
    $span.setAttribute("class", "form_elem");

    const $label = document.createElement("label");
    $label.setAttribute("for", id);
    $label.appendChild(document.createTextNode(labelText));

    const $input = document.createElement("input");
    $input.setAttribute("type", type);
    $input.setAttribute("id", id);
    $input.setAttribute("placeholder", placeholder);

    if (id === "name") {
      const regexp = "^[가-힣]{2,4}$";
      const title = "2~4 글자의 한글만 입력이 가능합니다.";

      $input.setAttribute("pattern", regexp);
      $input.setAttribute("title", title);
    }

    if (id === "email") {
      const regexp = "^[a-zA-Z0-9]*@grepp.co$";
      const title =
        "이메일 ID는 영문(대소문자 구분 없음)과 숫자만 입력이 가능하며, @grepp.co 형식의 이메일만 입력이 가능합니다.";

      $input.setAttribute("pattern", regexp);
      $input.setAttribute("title", title);
    }

    if (id === "nickname") {
      const regexp = "^[a-zA-z]{3,10}$";
      const title = "대소문자 구분 없이 3~10 글자의 영문만 입력이 가능합니다.";

      $input.setAttribute("pattern", regexp);
      $input.setAttribute("title", title);
    }

    if (required) {
      $input.setAttribute("required", "");
      $label.appendChild(this.createMarkElement("(필수*)"));
    }

    $span.appendChild($label);
    $span.appendChild($input);

    return $span;
  }

  createSelectElement(
    id,
    labelText,
    optionValueList,
    optionTextList,
    required
  ) {
    const $span = document.createElement("span");
    $span.setAttribute("class", "form_elem");

    const $label = document.createElement("label");
    $label.setAttribute("for", id);
    $label.appendChild(document.createTextNode(labelText));

    const $select = document.createElement("select");
    $select.setAttribute("id", id);
    $select.setAttribute("name", id);

    if (required) {
      $select.setAttribute("required", "");
      $label.appendChild(this.createMarkElement("(필수*)"));
    }

    for (let i = 0; i < optionValueList.length; i++) {
      const value = optionValueList[i];
      const text = optionTextList[i];

      const $option = document.createElement("option");
      $option.setAttribute("value", value);
      $option.appendChild(document.createTextNode(text));

      $select.appendChild($option);
    }

    $span.appendChild($label);
    $span.appendChild($select);

    return $span;
  }

  createButtonElement(text) {
    const $span = document.createElement("span");
    $span.setAttribute("class", "form_elem");

    const $button = document.createElement("button");
    $button.setAttribute("type", "submit");
    $button.appendChild(document.createTextNode(text));

    $span.appendChild($button);

    return $span;
  }

  render() {
    const $div = document.createElement("div");
    $div.setAttribute("id", "form_container");

    const $form = document.createElement("form");
    $form.setAttribute("id", "form");

    const $name = this.createInputElement("text", "name", "이름", "이름", true);
    const $email = this.createInputElement(
      "email",
      "email",
      "이메일",
      "이메일",
      true
    );
    const $nickName = this.createInputElement(
      "text",
      "nickname",
      "닉네임",
      "닉네임",
      true
    );

    const jobOptionValueList = ["", "backend", "frontend", "fullstack"];
    const jobOptionTextList = [
      "직군을 선택해주세요",
      "백엔드",
      "프론트엔드",
      "풀스택",
    ];

    const mbtiOptionValueList = [
      "",
      "enfj",
      "entj",
      "enfp",
      "entp",
      "esfj",
      "estj",
      "esfp",
      "estp",
      "infj",
      "intj",
      "infp",
      "intp",
      "isfj",
      "istj",
      "isfp",
      "istp",
    ];

    const mbtiOptionTextList = [
      "MBTI를 선택해주세요",
      "ENFJ",
      "ENTJ",
      "ENFP",
      "ENTP",
      "ESFJ",
      "ESTJ",
      "ESFP",
      "ESTP",
      "INFJ",
      "INTJ",
      "INFP",
      "INTP",
      "ISFJ",
      "ISTJ",
      "ISFP",
      "ISTP",
    ];

    const $jop = this.createSelectElement(
      "role",
      "직군",
      jobOptionValueList,
      jobOptionTextList,
      true
    );

    const $mbti = this.createSelectElement(
      "mbti",
      "MBTI",
      mbtiOptionValueList,
      mbtiOptionTextList,
      false
    );

    const $button = this.createButtonElement("등록");

    $form.appendChild($name);
    $form.appendChild($email);
    $form.appendChild($nickName);
    $form.appendChild($jop);
    $form.appendChild($mbti);
    $form.appendChild($button);

    $div.appendChild($form);

    this.$container.appendChild($div);
  }
}

export default Form;
