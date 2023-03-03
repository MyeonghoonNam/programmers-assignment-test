class Table {
  constructor({ container, employeeInfo }) {
    this.$container = container;
    this.employeeInfo = employeeInfo;
    console.log(this.employeeInfo);
  }

  createTableHeadElement() {
    const $table_head = document.createElement("thead");
    const $tr = document.createElement("tr");

    for (let key in this.employeeInfo[0]) {
      const $th = document.createElement("th");
      $th.innerText = key;

      $tr.appendChild($th);
    }

    $table_head.appendChild($tr);

    return $table_head;
  }

  createTableBodyElement() {
    const $table_body = document.createElement("tbody");

    for (let info of this.employeeInfo) {
      const $tr = document.createElement("tr");

      for (let key in info) {
        const $td = document.createElement("td");
        $td.innerText = info[key];

        $tr.appendChild($td);
      }

      $table_body.appendChild($tr);
    }

    return $table_body;
  }

  render() {
    const $div = document.createElement("div");
    $div.setAttribute("class", "area");
    $div.setAttribute("id", "table");

    const $table = document.createElement("table");
    const $table_head = this.createTableHeadElement();
    const $table_body = this.createTableBodyElement();

    $table.appendChild($table_head);
    $table.appendChild($table_body);

    $div.appendChild($table);

    this.$container.appendChild($div);
  }
}

export default Table;
