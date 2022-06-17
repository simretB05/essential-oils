let productsInCart = JSON.parse(localStorage.getItem('shopingCart'));
if (!productsInCart) {
    productsInCart = [];
}
const parentElement = document.querySelector('.shoping-cart__items');
const cartSumPrice = document.querySelector('.navbar__cart-text');
const products = document.querySelectorAll(".products__discription");
const shopingCart = document.querySelector('.shoping-cart')
const totalContainer = document.querySelector('.shoping-cart__subTotal')

let cartItem = document.querySelector('.navbar__cart');

cartItem.addEventListener("click", () => {
    console.log('clicked')
    shopingCart.classList.toggle('removeShopingCart')



})

const countTheTotalItems = function () { // 4
    let numOfItems = 0;
    productsInCart.forEach(item => {
        numOfItems += item.count;
    });
    return numOfItems;
}

function addNums() {
    let grandTotal = 0
    let subTotal = document.getElementsByClassName('shoping-cart__text')[0]
    let totalPrice = document.getElementsByClassName('shoping-cart__total')
    for (let i = 0; i < totalPrice.length; i++) {
        totalPriceContent = Number(totalPrice[i].innerText.replace('$', ''))
        grandTotal += totalPriceContent
        grandTotal = Math.round(grandTotal * 100) / 100
    }

    subTotal.children[0].innerText = '$' + grandTotal

}


const updateShoppingCartHTML = function () {  // 3
    localStorage.setItem('shopingCart', JSON.stringify(productsInCart));
    if (productsInCart.length > 0) {
        let result = productsInCart.map(product => {

            console.log(typeof (product.price))
            console.log(typeof (product.count))



            return `<li class="shoping-cart__main-cont">
                        <div class="shoping-cart__container">
                            <div div class="shoping-cart__img-container">
                                <img class="shoping-cart__img" src="${product.image}" alt=" essential oil image">
                                <div class="shoping-cart__text-container">
                                <h3 class="shoping-cart__title">${product.name}</h3>
                           
                                <span class="shoping-cart__total">${(product.count * product.price).toFixed(2)}</span><span class="shoping-cart__span">CAD</span></p>
                                </div>
                        </div>
                        <div>
                            <button class="shoping-cart__btn__minus" data-id=${product.id}>-</button>
                            <span class="shoping-cart__countOfProduct">${product.count}</span>
                            <button class="shoping-cart__btn__plus" data-id=${product.id}>+</button>
                        </div>
                </li>
                `
        });
        parentElement.innerHTML = result.join('');
        document.querySelector('.checkOut').classList.remove('hidden');
        totalContainer.classList.remove('hidden')
        cartSumPrice.innerHTML = countTheTotalItems();


    }
    else {
        document.querySelector('.checkOut').classList.add('hidden');
        parentElement.innerHTML = '<h4 class="shoping-cart__empty">cart is empty</h4>';
        cartSumPrice.innerHTML = '';
        totalContainer.classList.add('hidden')

    }
}

function updateProductsInCart(product) { // 2
    for (let i = 0; i < productsInCart.length; i++) {
        if (productsInCart[i].id == product.id) {
            productsInCart[i].count += 0;
            productsInCart[i].id.price = product.price;

            return;
        }
    }
    productsInCart.push(product);
}
/****************/
products.forEach(item => {   // 1
    item.addEventListener('click', (e) => {
        if (e.target.classList.contains('addToCart')) {
            const productID = e.target.dataset.productId;
            const productName = item.querySelector('.pure__title').textContent;
            const productPrice = item.querySelector('.product__price').textContent;
            console.log(typeof (productPrice))
            console.log(productName)
            const productImage = item.querySelector('img').src;
            let product = {
                name: productName,
                image: productImage,
                id: productID,
                count: 1,
                price: parseFloat(productPrice),

            }
            updateProductsInCart(product);
            updateShoppingCartHTML();
            addNums()

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
                // productsInCart[i].price = productsInCart[i].price * productsInCart[i].count;

            }
            if (productsInCart[i].count <= 0) {
                productsInCart.splice(i, 1);
            }
        }
        updateShoppingCartHTML();
        addNums()

    }
});

updateShoppingCartHTML();

