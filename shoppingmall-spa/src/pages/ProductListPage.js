const ProductListPage = () => {
	const render = (target) => {
		const $container = target.cloneNode();
		$container.innerHTML = `
      <div class="ProductListPage">
        <h1>상품목록</h1>
        <ul>
          <li class="Product" data-id="1">
            <img src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png">
            <div class="Product__info">
              <div>커피잔</div>
              <div>10,000원~</div>
            </div>
          </li>
          <li class="Product" data-id="2">
            <img src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png">
            <div class="Product__info">
              <div>커피잔</div>
              <div>10,000원~</div>
            </div>
          </li>
          <li class="Product" data-id="3">
            <img src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png">
            <div class="Product__info">
              <div>커피잔</div>
              <div>10,000원~</div>
            </div>
          </li>
          <li class="Product" data-id="4">
            <img src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png">
            <div class="Product__info">
              <div>커피잔</div>
              <div>10,000원~</div>
            </div>
          </li>
          <li class="Product" data-id="5">
            <img src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png">
            <div class="Product__info">
              <div>커피잔</div>
              <div>10,000원~</div>
            </div>
          </li>
          <li class="Product" data-id="6">
            <img src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png">
            <div class="Product__info">
              <div>커피잔</div>
              <div>10,000원~</div>
            </div>
          </li>
        </ul>
      </div>
    `;

		return $container;
	};

	return (target) => {
		const $productListPage = render(target);
		return $productListPage;
	};
};

export default ProductListPage;
