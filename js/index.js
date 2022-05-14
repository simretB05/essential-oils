// targets the humburger menue and the button which contains it

const toggleBtn = document.querySelector('.header__toggle')
const navBtn = document.querySelector('.navbar')
const header = document.querySelector('.header')
let toggleOpen = false;
toggleBtn.addEventListener('click', () => {
    if (!toggleOpen) {
        toggleBtn.classList.remove('open');
        navBtn.classList.remove('move-in')
        header.classList.remove('overlay');

        toggleOpen = true;
    } else {

        navBtn.classList.add('move-in')
        navBtn.classList.remove('move-out')
        toggleBtn.classList.add('open');
        header.classList.toggle('overlay');
        toggleOpen = false;
    }
});
