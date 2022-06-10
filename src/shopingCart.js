productsInCart = [];

const parentElement = document.querySelector('.buyItems');
const cartSumPrice = document.querySelector('.navbar__cart-text');
const products = document.querySelectorAll(".products__discription");
console.log(products)

const countTheSumPrice = function () { // 4
  let sum = 0;
  productsInCart.forEach(item => {
    sum += item.price;
  });
  return sum;
}

const updateShoppingCartHTML = function () {  // 3
  localStorage.setItem('shoppingCart', JSON.stringify(productsInCart));
  if (productsInCart.length > 0) {
    let result = productsInCart.map(product => {
      return `<div class="shoping-cart__main-cont">
        <div class="shoping-cart__container">
          <div class="shoping-cart__img-container">
            <img class="shoping-cart__img" src="${product.image}" alt=" essential oil image">
          
          <div class="shoping-cart__text-container">
            <h3 class="shoping-cart__title">${product.name}</h3>
            <p class="shoping-cart__text">$<span class="shoping-cart__price">${product.price}</span> x <span
                class="shoping-cart__number"> </span> $<span class="shoping-cart__span"></span>.00</p>
          </div>
          </div>
          <div class="shoping-cart__counter">
							<button class="button-minus" data-id=${product.id}>-</button>
							<span class="countOfProduct">${product.count}</span>
							<button class="button-plus" data-id=${product.id}>+</button>
					</div>
      </div>`
    });
    parentElement.innerHTML = result.join('');
    document.querySelector('.checkout').classList.remove('hidden');
    cartSumPrice.innerHTML = '$' + countTheSumPrice();

  }
  else {
    document.querySelector('.checkout').classList.add('hidden');
    parentElement.innerHTML = '<h4 class="empty">Your shopping cart is empty simret</h4>';
    cartSumPrice.innerHTML = '';
  }
}

function updateProductsInCart(product) { // 2
  for (let i = 0; i < productsInCart.length; i++) {
    if (productsInCart[i].id == product.id) {
      productsInCart[i].count += 1;
      productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
      return;
    }
  }
  productsInCart.push(product);
}


products.forEach(item => {   // 1
  item.addEventListener('click', (e) => {
    if (e.target.classList.contains('addToCart')) {
      const productID = e.target.dataset.productId;
      const productName = item.querySelector('.pure__title').textContent;
      const productPrice = item.querySelector('.product__price').textContent;
      console.log(productPrice)
      const productImage = item.querySelector('img').src;
      let product = {
        name: productName,
        image: productImage,
        id: productID,
        count: 0,
        price: productPrice,
        // basePrice: +productPrice,
      }
      updateProductsInCart(product);
      updateShoppingCartHTML();
    }
  });

});

parentElement.addEventListener('click', (e) => { // Last
  const isPlusButton = e.target.classList.contains('button-plus');
  const isMinusButton = e.target.classList.contains('button-minus');
  if (isPlusButton || isMinusButton) {
    for (let i = 0; i < productsInCart.length; i++) {
      if (productsInCart[i].id == e.target.dataset.id) {
        if (isPlusButton) {
          productsInCart[i].count += 1
        }
        else if (isMinusButton) {
          productsInCart[i].count -= 1
        }
        productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;

      }
      if (productsInCart[i].count <= 0) {
        productsInCart.splice(i, 1);
      }
    }
    updateShoppingCartHTML();
  }
});

updateShoppingCartHTML();