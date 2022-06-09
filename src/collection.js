
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
let add = document.getElementsByClassName("counter__btn-plus");
let remove = document.getElementsByClassName("counter__btn-minus");
let counterInteger = document.querySelector(".counter__text")
let intCart = document.querySelector('.navbar__cart-text')
let cartBtn = document.querySelector('.navbar__cart-img')
let mainPop = document.querySelector('.shoping-cart__main-cont')
let empty = document.querySelector('.shoping-cart__empty')


let integer = 0;


let products = [];

let item = function (itemNo, product, retail, count) {
  this.itemNo = itemNo
  this.product = product
  this.retail = retail
  this.count = count
};
/***********add to  cart ****************/
function addItemToCart(itemNo, product, retail, count) {
  for (let i in products) {
    if (products[i].itemNo === itemNo) {
      products[i].count++;
      console.log(products)
      // empty.classList.remove("show-up")
      return;
    }
  }
  let newItem = new item(itemNo, retail, product, count);

  products.push(newItem);
}

//adding to cart
for (let i = 0; i < add.length; i++) {
  let button = add[i];
  button.addEventListener('click', (e) => {
    let buttonClicked = e.target;
    let addInput = buttonClicked.parentElement.children[1];
    let inputValue = addInput.value;
    let newValue = parseInt(inputValue) + 1;
    addInput.value = newValue;

  })
  addItemToCart('5ml', '$25.99', 1)
}
// /***********remove from cart  ****************/
for (let i = 0; i < remove.length; i++) {
  let button = remove[i];
  button.addEventListener('click', (e) => {
    let buttonClicked = e.target;
    console.log(buttonClicked);
    let addInput = buttonClicked.parentElement.children[1];
    let inputValue = addInput.value;
    let newValue = parseInt(inputValue) - 1;
    newValue >= 0 ? addInput.value = newValue : newValue == 0;
    console.log(newValue)

  })
}

cartBtn.addEventListener('click', () => {
  intCart.classList.toggle('show');
  popup.classList.toggle('show')
  mainPop.classList.add("show-popup");
  empty.classList.add("hide")
  empty.classList.remove("show-up")
  if (integer > 1) {
    mainPop.classList.add("show-popup");
    empty.classList.add("hide")
    empty.classList.remove("show-up")

  }
  else if (integer < 1) {
    mainPop.classList.remove("show-popup");
    empty.classList.add("show-up")
  }
});

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