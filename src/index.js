

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
const prevNav = document.querySelector(".hero__prev-btn");
const nextNav = document.querySelector(".hero__next-btn");
const testimonials = document.querySelector(".main-testimonials").children;
const angleRight = document.querySelector(".testimonials-nav__angle-right")
const angleLeft = document.querySelector(".testimonials-nav__angle-left")
const totalComments = testimonials.length

/************adding next and previous ******/
const totalImages = sliderImages.length;
let index = 0;
prevNav.addEventListener('click', (e) => {
    // console.log(e)
    nextImage('next');
});
nextNav.addEventListener('click', (e) => {
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
var currentWidth;
var staggerAnim;

gsap.registerPlugin(ScrollTrigger)
/**
 * Setting up stagger animation for download item
 */
const setStaggerAnimation = () => {
    ScrollTrigger.refresh()

    //  start animation values
    const fromValues = {
        opacity: 0,
        y: -50
    }

    //  end animation values
    const toValues = {
        opacity: 1,
        y: (index) => {
            //  If laptop size
            //  Display in declining pattern
            if (currentWidth >= 1020)
                return index * 5

            // Else, keeps all cards in same row
            return 0
        },
        stagger: {
            each: 0.1,
            amount: 2,
        }
    }

    //services card animation
    const fromValuesTwo = {
        opacity: 0,
        y: -10,
        scale: 0,
    }

    //  end animation values
    const toValuesTwo = {
        opacity: 1,
        scale: 1,
        y: (index) => {
            //  If laptop size
            //  Display in declining pattern
            if (currentWidth >= 1020)
                return index * 90

            // Else, keeps all cards in same row
            return 0
        },
        stagger: {
            ease: "power1",
            each: 1,
            amount: .5,
            scrub: 1,

        }
    }
    gsap.set('.card', fromValues)
    ScrollTrigger.batch('.card', {
        trigger: '.card-container',
        onEnter: (elements) => {
            gsap.to(elements, toValues)
        },
        onEnterBack: (elements) => {
            gsap.to('.card', toValues)
        },
        onLeave: (elements) => {
            gsap.set(elements, fromValues)
        },
        onLeaveBack: (elements) => {
            gsap.set('.card', fromValues)
        }
    })

    gsap.set('.service-card', fromValuesTwo)
    ScrollTrigger.batch('.service-card', {
        trigger: 'service__container',
        onEnter: (elements) => {
            gsap.to(elements, toValuesTwo)
        },
        onEnterBack: (elements) => {
            gsap.to('.service-card', toValuesTwo)
        },
        onLeave: (elements) => {
            gsap.set(elements, fromValuesTwo)
        },
        onLeaveBack: (elements) => {
            gsap.set('.service-card', fromValuesTwo)
        }
    })
}



var resizeTimeout = null

// /**
//  * Set listener for resize event
//  * Update currentWidth variable
//  */
const setResizeListener = () => {
    currentWidth = window.innerWidth
    window.addEventListener('resize', event => {
        currentWidth = window.innerWidth

        //  Clear resizeTimeout if not null
        resizeTimeout && clearResizeTimeout()

        /**
         * Only allow animation to run when resize ends for 2 seconds
         */
        resizeTimeout = setTimeout(() => {
            // clearResizeTimeout()
            setStaggerAnimation()   // Play animation // Re-position cards
        }, 2000)
    })
}
/*
 * Clear resizeTimeout 
 * Set resizeTimeout = null
*/
const clearResizeTimeout = () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = null
}

setStaggerAnimation()
setResizeListener()

