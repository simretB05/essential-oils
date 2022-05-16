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
const toggle = () => {
    const toggleBtn = document.querySelector('.header__toggle-burger');
    const toggleBurger = document.querySelector('.header__toggle')
    const navBtn = document.querySelector('.navbar');
    const header = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.navbar__list li');
    let toggleOpen = false;


    //toggle navbars
    toggleBtn.addEventListener('click', () => {
        navBtn.classList.toggle('navToggle-active')


        if (!toggleOpen) {
            toggleBurger.classList.add('open');
            header.classList.toggle('overlay');
            toggleOpen = true;

        } else {

            toggleBurger.classList.remove('open');
            header.classList.remove('overlay');
            toggleOpen = false;
        }
        // toggleBtn.classList.remove('open');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade .5s ease-in forwards ${index / 10 + 1}s`
            }

        })

    });

}


toggle();