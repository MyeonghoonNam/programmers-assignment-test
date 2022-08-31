const Cart = () => {
	const render = () => {
		const $cart = document.createElement('div');
		$cart.setAttribute('class', 'Cart');
		$cart.innerHTML = `
      <div class="Cart">
        <ul>
          <li class="Cart__item">
            <img src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png">
            <div class="Cart__itemDesription">
              <div>커피잔 100개 번들 10,000원 10개</div>
              <div>100,000원</div>
            </div>
          </li>
          <li class="Cart__item">
            <img src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png">
            <div class="Cart__itemDesription">
              <div>커피잔 1000개 번들 15,000원 5개</div>
              <div>75,000원</div>
            </div>
          </li>
        </ul>

        <div class="Cart__totalPrice">
          총 상품가격 175,000원
        </div>

        <button class="OrderButton">주문하기</button>
      </div>
    `;
	};

	return () => {
		const $cart = render();
		return $cart;
	};
};

export default Cart;