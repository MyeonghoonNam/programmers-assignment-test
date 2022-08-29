const ProductSelectedOptions = () => {
	const render = () => {
		const $productSelectedOptions = document.createElement('div');
		$productSelectedOptions.setAttribute(
			'class',
			'ProductDetail__selectedOptions',
		);
		$productSelectedOptions.innerHTML = `
      <h3>선택된 상품</h3>
      <ul>
        <li>
            커피잔 100개 번들 10,000원 <div><input type="number" value="10">개</div>
        </li>
        <li>
            커피잔 1000개 번들 15,000원 <div><input type="number" value="5">개</div>
        </li>
      </ul>
      <div class="ProductDetail__totalPrice">175,000원</div>
      <button class="OrderButton">주문하기</button>
    `;

		return $productSelectedOptions;
	};

	return () => {
		const $productSelectedOptions = render();
		return $productSelectedOptions;
	};
};

export default ProductSelectedOptions;
