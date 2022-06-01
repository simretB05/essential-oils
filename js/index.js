// gsap.rregisterPlugin(scrollTrigger)

// function init() {
//     gsap.from{
//         '#bannerSection', {

//         }
//     }
// }
// gsap.registerPlugin(ScrollTrigger)

// gsap.from(".card", {
//     scrollTrigger: {
//         trigger: ".type__card-body",
//         start: "top top",
//         end: "+=100",
//         markers: false,
//         scrub: 1,
//     },
//     stagger: { amount: 0.5 },
//     // scaleY: 0, duration: 9,
//     y: 700,  // to drop the ball i.e transform: translateY(200px)
//     // duration: 1.5, // duration of the animation
//     // repeat: -1, // to repeat infinite times
//     // ease: "bounce.out",// to give the bounce effect,
//     opacity: 1

// });
// targets the humburger menue and the button which contains it

// const toggleBtn = document.querySelector('.header__toggle')
// const navBtn = document.querySelector('.navbar')
// const header = document.querySelector('.header')
// let toggleOpen = false;
// toggleBtn.addEventListener('click', () => {
//     if (!toggleOpen) {
//   toggleBtn.classList.remove('open');
//     navBtn.classList.remove('move-in')
//     header.classList.remove('overlay');

//     toggleOpen = true;
//     } else {
//

// navBtn.classList.add('move-in')
// navBtn.classList.remove('move-out')
// toggleBtn.classList.add('open');
// header.classList.toggle('overlay');
// toggleOpen = false;
//     }
// });
// another cool way

// login and register toggling
const loginRegister = document.querySelector('.login-form__toggleRegister-btn')
const login = document.querySelector('.login-form__toggleLogin-btn')
const loginForm = document.getElementById('login-btn')
const registerForm = document.getElementById('regiter-btn')
const loginBtn = document.querySelector('.login-form__boxBtn')

loginRegister?.addEventListener('click', () => {
    registerForm.classList.add('move-in')
    loginForm.classList.add('move-out')
    loginBtn.classList.add('slide')

});
login?.addEventListener('click', () => {
    registerForm.classList.remove('move-in')
    loginForm.classList.remove('move-out')
    loginBtn.classList.remove('slide')
});

const toggle = () => {
    const toggleBtn = document.querySelector('.header-nav__toggle-burger');
    const toggleBurger = document.querySelector('.header-nav__toggle')
    const navBtn = document.querySelector('.navbar__list');
    const headerBar = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.navbar__list li');
    let toggleOpen = false;


    //toggle navbars
    toggleBtn.addEventListener('click', () => {
        toggleScroll();

        if (!toggleOpen) {
            toggleBurger.classList.add('open');
            headerBar.classList.add('overlay');
            navBtn.classList.add('navToggle-active')
            navBtn.classList.remove('navToggle-nonActive')
            headerBar.classList.toggle('overlay-remove');



            toggleOpen = true;

        } else {

            toggleBurger.classList.remove('open');
            headerBar.classList.toggle('overlay');
            navBtn.classList.remove('navToggle-active')
            headerBar.classList.add('overlay-remove');

            navBtn.classList.add('navToggle-nonActive')

            toggleOpen = false;
        }
        // toggleBtn.classList.remove('open');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade .1s ease-in forwards ${index / 10 + 1}s`
            }

        })

    });

}

toggle();
const toggleScroll = () => {
    document.body.classList.toggle('hide-scroll')

}
const sliderImages = document.querySelector(".slider").children;
const prev = document.querySelector(".hero__prev-btn");
const next = document.querySelector(".hero__next-btn");
const testimonials = document.querySelector(".main-testimonials").children;
const angleRight = document.querySelector(".testimonials-nav__angle-right")
const angleLeft = document.querySelector(".testimonials-nav__angle-left")
const totalComments = testimonials.length
/************adding next and previous ******/
const totalImages = sliderImages.length;
let index = 0;
prev.addEventListener('click', (e) => {
    // console.log(e)
    nextImage('next');

});
next.addEventListener('click', (e) => {
    e.preventDefault();
    nextImage('next');
});


function nextImage(direction) {
    console.log(direction);
    if (direction == 'next') {
        index++;
        if (index == totalImages) {
            index = 0;
        }
    } else {
        if (index == 0) {
            index = totalImages - 1;

        } else {
            index--;
        }
    }
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].classList.remove('show');

    }
    sliderImages[index].classList.add('show');
}

//toggling comments
angleLeft.addEventListener('click', (e) => {
    nextComment('next');

});
angleRight.addEventListener('click', (e) => {
    nextComment('next');
});


function nextComment(direction) {
    console.log(direction);
    if (direction == 'next') {
        index++;
        if (index == totalComments) {
            index = 0;
        }
    } else {
        if (index == 0) {
            index = totalComments - 1;

        } else {
            index--;
        }
    }
    for (let j = 0; j < testimonials.length; j++) {
        testimonials[j].classList.remove('showComments');

    }
    testimonials[index].classList.add('showComments');
}