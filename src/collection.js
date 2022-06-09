
let currentSlid = 0;//current slide
let tottalSlides = 4;// total slides

const radios = document.querySelectorAll(".radio-container__btn")
const images = document.querySelectorAll(".slider__card__list-img")
console.log(images)
// toogling buttons
function next() {
  document.getElementById("img" + (currentSlid + 1)).
    classList.remove("show-img");
  currentSlid = (tottalSlides + currentSlid + 1) % tottalSlides;
  document.getElementById("img" + (currentSlid + 1)).classList.add("show-img")
  radioToogle(currentSlid + 1);
}
function prev() {
  document.getElementById("img" + (currentSlid + 1)).
    classList.remove("show-img");
  currentSlid = (tottalSlides + currentSlid + 1) % tottalSlides;
  document.getElementById("img" + (currentSlid + 1)).classList.add("show-img")
  radioToogle(i + 1);
}
let radioToogle = (num) => {
  radios.forEach(radio => {
    radio.style.backgroundColor = "white"
  });
  document.querySelector(".radio-container button:nth-child(" + num + ")").style.backgroundColor = "#6E4A9E";
}
// togling rodio buttons

// let imagNav = (index) => {
//   images.forEach(image => {
//     image.classList.remove("show-img")
//   });
//   document.getElementById("img" + index).classList.add("show-img")
//   i = index - 1;
//   radioToogle(index);
// }




/************adding to carts******/


let navbarText = document.querySelector(".navbar__text")
const popup = document.querySelector('.shoping-cart')
let add = document.querySelector(".counter__btn-plus")[0];
let remove = document.querySelector(".counter__btn-minus");
let counterInteger = document.querySelector(".counter__text")
let intCart = document.querySelector('.navbar__text')
let cartBtn = document.querySelector('.navbar__cart-img')
let mainPop = document.querySelector('.shoping-cart__main-cont')
let empty = document.querySelector('.shoping-cart__empty')






let integer = 0;


let products = [];

let item = function (itemNo, product, wholeSalePrice, retail, count) {
  this.itemNo = itemNo
  this.product = product
  this.retail = retail
  this.count = count
};
/***********add to  cart ****************/
function addToCartClicked(event) {
  let button = event.target
  let shopItem = button.parentElement.parentElement
  let title = shopItem.getElementsByClassName('pure__title')[0].innerText
  let price = shopItem.getElementsByClassName('pure__price')[0].innerText
  // let imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
  addItemToCart(title, price)
  updateCartTotal()
}
function addItemToCart(itemNo, product, wholeSalePrice, retail, count) {
  for (let i in products) {
    if (products[i].itemNo === itemNo) {
      products[i].count++;
      console.log(products)
      // empty.classList.remove("show-up")
      return;
    }
  }
  let newItem = new item(itemNo, retail, wholeSalePrice, product, count);

  products.push(newItem);


  // add.forEach(itemAdd => {
  add.addEventListener("click", (e) => {
    // if (integer < 0) {        // empty.classList.add('hide')

    //     int.textContent = 0
    //     removeItemFromCart("discription")
    //     empty.classList.add("show-up")
    //     removeItemFromCart("discription", 125.00, 1)

    // // }
    // else {
    for (let x = 0; x < add.length; x++) {
      if (integer += 1) {
        counterInteger.textContent = integer
        console.log(integer)
        empty.classList.add("hide")
        addItemToCart(itemNo, retail, wholeSalePrice, product, count)

      }

      else {
        if (integer < 0) {
          int.textContent === 0
          empty.classList.add("hide")

        }

      }
    }
  });

}

// /***********remove from cart  ****************/

// // function removeItemFromCart(discription, price, count) {

// //     for (var i in products) {
// //         // if (products[i].count === 0) {
// //         //     products[i].discription === discription
// //         //     products.splice(i, 1);
// //         //     return false
// //         // }


// //         if (products[i].discription === discription) {

// //             products[i].count--;// cart[i].count = cart[i].count -1
// //             if (products[i].count <= 0) {
// //                 products.splice(i, 1);
// //             }
// //         }

// //     }
// // }



// // remove.addEventListener("click", (e) => {
// //     e.preventDefault();

// //     integer -= 1

// //     if (integer < 0) {
// //         integer = 0
// //         mainPop.classList.remove("show-popup");
// //         empty.classList.add("hide");

// //     }
// //     else {
// //         // mainPop.classList.remove("show-popup");
// //         empty.classList.add("hide");
// //         mainPop.classList.remove("show-popup")

// //     }

// //     int.textContent = integer
// //     intCart.textContent = integer
// //     mainPop.classList.add("show-popup")
// //     empty.classList.remove("show-up")
// //     removeItemFromCart("discription", 125.00, 1)
// // });


// // function initialise() {
// //     loadCart();
// //     showPopupText();
// //     integer = countCart()
// //     int.textContent = integer

// // }
// // initialise();



// // function clearCart() {
// //     mainPop.classList.remove("show-popup")
// //     empty.classList.add("show-up")
// //     int.textContent = 0
// //     products = [];
// //     console.log(products)
// // }

// // function removeItemFromCartAll(discription) {//removing all item name
// //     for (var i in products) {
// //         if (products[i].discription === discription) {
// //             products.splice(i, 1);
// //             return false;

// //         }
// //     }
// // }

// // const trashBtn = document.querySelector(".shoping-cart__delete")

// // trashBtn.addEventListener('click', () => {
// //     empty.classList.add("show-up")

// //     mainPop.classList.remove("show-popup")

// //     removeItemFromCartAll("discription")
// //     savecart()

// //     integer = 0
// //     intCart.textContent = integer
// //     int.textContent = integer
// //     empty.classList.add("show-up")


// // });

// // cartBtn.addEventListener('click', () => {
// //     intCart.classList.toggle('show');
// //     popup.classList.toggle('show')
// //     mainPop.classList.add("show-popup");
// //     empty.classList.add("hide")
// //     empty.classList.remove("show-up")
// //     if (integer > 1) {
// //         mainPop.classList.add("show-popup");
// //         empty.classList.add("hide")
// //         empty.classList.remove("show-up")

// //     }
// //     else if (integer < 1) {
// //         mainPop.classList.remove("show-popup");
// //         empty.classList.add("show-up")
// //     }
// // });


// /***********save to local storage ****************/



// // var a = ["A", "B", "C"]
// // var b = a.slice();

// // b.push("D");
// // console.log(a);
// // console.log(b);

// // var a = { age: 22, name: "simret" }

// // var b = a;
// // b.name = "brendan";
// // console.log(a)
// // console.log(b)



// function countCart() {//-> return total count
//     var totalCount = 0;
//     for (var i in products) {
//         totalCount += products[i].count;
//     }
//     return totalCount;
// }

// function totalCart() {// -> return total cost
//     var totalCost = 0;
//     for (var i in products) {
//         totalCost += products[i].price

//     }
//     return totalCost;

// }


// function ListCart() {// array of items
//     let cartCopy = [];
//     for (let i in products) {
//         let itemx = products[i];

//         let itemxCopy = {};
//         for (let p in itemx) {
//             itemxCopy[p] = itemx[p];


//         }
//         cartCopy.push(itemxCopy);
//         console.log(cartCopy)
//         console.log(itemxCopy)

//     }
//     return cartCopy;

// }

// function savecart() {
//     console.log(products)

//     localStorage.setItem("shoppingCart", JSON.stringify(products));
//     totalCart()
//     loadCart()
// }

// function loadCart() {

//     products = JSON.parse(localStorage.getItem("shoppingCart"));
//     if (products === null) {
//         products = [];
//     }

// }

// let cartItem = document.querySelector('.cart');

// function displayCart() {

//     let arrays = ListCart()
//     let outputCount = "";
//     let outputPrice = "";
//     let outputTotal = "";
//     for (var i in arrays) {
//         outputCount = arrays[i].count
//         outputPrice = arrays[i].price
//         outputTotal = arrays[i].price * arrays[i].count
//         document.querySelector(".shoping-cart__number").textContent = outputCount;
//         document.querySelector(".shoping-cart__price").textContent = outputPrice;
//         document.querySelector(".shoping-cart__span").textContent = outputTotal
//         document.querySelector(".navbar__text").textContent = outputCount
//         document.querySelector('.counter__text').textContent = outputCount

//     }
//     console.log(arrays)

// }

// cartItem.addEventListener("click", () => {

//     displayCart()
//     savecart()
//     loadCart()
//     popupText.classList.add("show-popuptext")

//     console.log()


// })


// function showPopupText() {
//     popupText.classList.add("show-popuptext")
//     displayCart();
// }


// /***********changing image on hover ****************/

// const allHoverImages = document.querySelectorAll('.thumbnails li img');
// const imgContainer = document.querySelector('.slider');

// window.addEventListener('DOMContentLoaded', () => {
//     allHoverImages[0].parentElement.classList.add('active');
// });

// allHoverImages.forEach((image) => {
//     image.addEventListener('mouseover', () => {
//         imgContainer.querySelector('img').src = image.src;
//         resetActiveImg();
//         image.parentElement.classList.add('active');
//     });
// });


// function resetActiveImg() {
//     allHoverImages.forEach((img) => {
//         img.parentElement.classList.remove('active');
//     });
// }

// /***********image on overlay ****************/


// thumbnails.forEach(item => {
//     item.addEventListener('click', event => {

//         if (overlayPopup.classList.toggle('overlay-show')) {
//             mainOverlay.classList.toggle('glider-change')
//             // overlayPopup.classList.add("overlay-show")


//         }

//     });
// });