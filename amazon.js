const hamburger = document.querySelector('.hamburger');
const burger = document.querySelector('.burger');
const menu_icon = document.querySelector('.menu_icon')
const all_section = document.querySelector('.all_section')
const all = document.querySelector('.all')
const product = document.querySelector('.product')


hamburger.addEventListener('click', () => {
    burger.classList.toggle('is-active')
});

burger.addEventListener('click', () => {
    burger.classList.toggle('is-active')
});

all.addEventListener('click', () => {
    all.classList.toggle('add')
    all_section.classList.toggle('apply')
})

product.addEventListener('click', () => {
    all.classList.toggle('add')
    all_section.classList.toggle('apply')
})



