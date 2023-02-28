import ContentTitle from "../components/ContentTitle.js";

class SignupPage {
  constructor(container) {
    this.$container = container;
  }

  render() {
    const $title = new ContentTitle(this.$container, "Sign Up, GreatPeoPle!");

    $title.render();
  }
}

export default SignupPage;
