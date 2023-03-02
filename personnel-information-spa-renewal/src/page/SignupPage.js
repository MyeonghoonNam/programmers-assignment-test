import ContentTitle from "../components/ContentTitle.js";
import Form from "../components/Form.js";

class SignupPage {
  constructor(container) {
    this.$container = container;
  }

  render() {
    const $title = new ContentTitle(this.$container, "Sign Up, GreatPeoPle!");
    const $form = new Form(this.$container);

    $title.render();
    $form.render();
  }
}

export default SignupPage;
