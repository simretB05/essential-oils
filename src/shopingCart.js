productsInCart = [];

const parentElement = document.querySelector('.shoping-cart__items');
const cartSumPrice = document.querySelector('.navbar__cart-text');
const products = document.querySelectorAll(".products__discription");
const shopingCart = document.querySelector('.shoping-cart')

let cartItem = document.querySelector('.navbar__cart');

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
            return `<li class="shoping-cart__main-cont">
                        <div class="shoping-cart__container">
                            <div div class="shoping-cart__img-container">
                                <img class="shoping-cart__img" src="${product.image}" alt=" essential oil image">
                                <div class="shoping-cart__text-container">
                                <h3 class="shoping-cart__title">${product.name}</h3>
                                <p class="shoping-cart__text"><span class="shoping-cart__price">${product.price}</span> x <span
                                class="shoping-cart__number" </span> <span class="shoping-cart__span"></span>${product.count}
                                </span><span class="shoping-cart__total">${product.count * product.price}</span></p>

                                </div>
                        </div>
                        <div>
                            <button class="shoping-cart__btn__minus" data-id=${product.id}>-</button>
                            <span class="shoping-cart__countOfProduct">${product.count}</span>
                            <button class="shoping-cart__btn__plus" data-id=${product.id}>+</button>
                        </div>
                </li>`
        });
        console.log(result);
        parentElement.innerHTML = result.join('');
        console.log(result);
        document.querySelector('.checkOut').classList.remove('hidden');
        cartSumPrice.innerHTML = '$' + countTheSumPrice();

    }
    else {
        document.querySelector('.checkOut').classList.add('hidden');
        parentElement.innerHTML = '<h4 class="shoping-cart__empty">cart is empty</h4>';
        cartSumPrice.innerHTML = '';
    }
}

function updateProductsInCart(product) { // 2
    for (let i = 0; i < productsInCart.length; i++) {
        if (productsInCart[i].id == product.id) {
            productsInCart[i].count += 1;
            productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
            // productTotal[i].total = productsInCart[i].length * productsInCart[i].count;
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
            // const totalPrice = item.querySelector('.shoping-cart__total').textContent;

            console.log(productPrice)
            const productImage = item.querySelector('img').src;
            let product = {
                name: productName,
                image: productImage,
                id: productID,
                count: 0,
                price: productPrice,
                // total: totalPrice,
                // basePrice: +productPrice,
            }
            updateProductsInCart(product);
            updateShoppingCartHTML();
        }
    });

});

parentElement.addEventListener('click', (e) => { // Last
    const isPlusButton = e.target.classList.contains('shoping-cart__btn__plus');
    const isMinusButton = e.target.classList.contains('shoping-cart__btn__minus');
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

cartItem.addEventListener("click", () => {
    console.log('clicked')
    shopingCart.classList.toggle('removeShopingCart')



})