import Table from "./src/components/Table.js";
import { getEmployeeInfo } from "./src/api/index.js";

class App {
  constructor({ container }) {
    this.$container = container;
    this.employeeInfo = null;
    this.render();
  }

  async fetchEmployeeInfoData() {
    try {
      const data = await getEmployeeInfo();
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  async render() {
    this.employeeInfo = await this.fetchEmployeeInfoData();

    const $table = new Table({
      container: this.$container,
      employeeInfo: this.employeeInfo,
    });

    $table.render();
  }
}

export default App;
