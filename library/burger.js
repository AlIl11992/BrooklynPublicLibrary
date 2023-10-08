const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__navigation');
const navItems = nav.querySelectorAll('a');
const body = document.body;
const bodyWrapper = document?.querySelector('.body-wrapper');
const profIco = document.querySelector('.header__profile');
const profMenu = document.querySelector('.profile_no_auth');
const profItems = profMenu.querySelectorAll('.profile_item');
const regWrapp = document.querySelector('.register__wrapper');
const btnReg = profMenu.querySelector('.btn_register')

burger.addEventListener('click', () => {
    body.classList.toggle('stop-scroll');
    burger.classList.toggle('burger--active');
    nav.classList.toggle('nav--visible');
    profMenu.classList.remove('nav--visible');
});

navItems.forEach(el => {
    el.addEventListener('click', () => {
        body.classList.remove('stop-scroll');
        burger.classList.remove('burger--active');
        nav.classList.remove('nav--visible');
        profMenu.classList.remove('nav--visible');
    })
});

profIco.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
    profMenu.classList.toggle('nav--visible');
    nav.classList.remove('nav--visible');
    burger.classList.remove('burger--active');
});

profItems.forEach(el => {
    el.addEventListener('click', () => {
        profMenu.classList.remove('nav--visible');
    });
});

btnReg.addEventListener('click', () => {
    regWrapp.classList.toggle('nav--visible');
});


burger.addEventListener('click', event => {
    event._isClickWithInMenu = true;
    regWrapp.classList.remove('nav--visible');  
});

nav.addEventListener('click', event => {
    event._isClickWithInMenu = true;
    regWrapp.classList.remove('nav--visible');
  
});

profIco .addEventListener('click', event => {
    event._isClickWithInMenu = true;
    regWrapp.classList.remove('nav--visible');
  
});

profMenu.addEventListener('click', event => {
    event._isClickWithInMenu = true;   
});

bodyWrapper.addEventListener('click', event => {
    if (event._isClickWithInMenu) return;
    body.classList.remove('stop-scroll');
    burger.classList.remove('burger--active');
    nav.classList.remove('nav--visible');
    profMenu.classList.remove('nav--visible');
    regWrapp.classList.remove('nav--visible');

});
