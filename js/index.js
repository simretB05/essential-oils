// const dropDown= document.querySelector(".sb1")
// const bars= document.querySelector(".fa-bars")
// bars.addEventListener("click",function(){
//     dropDown.classList.toggle("change")
// console.log(bars);
// })

const toggleBtn = document.querySelector('.header__toggle')
let toggleOpen = false;
toggleBtn.addEventListener('click', () => {
    if (!toggleOpen) {
        toggleBtn.classList.add('open');
        toggleOpen = true;
    } else {
        toggleBtn.classList.remove('open');
        toggleOpen = false;
    }
});