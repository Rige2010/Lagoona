const hamburgerBtn = document.querySelector('.header__nav-hamburger');
const block1 = document.querySelector('.bar1');
const block2 = document.querySelector('.bar2');
const block3 = document.querySelector('.bar3');
const navList = document.querySelector('.header__nav-list');
const closeBtn = document.querySelector('.header__nav-close');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('header__ham');
    block1.classList.toggle('header__anim-1');
    block2.classList.toggle('header__anim-2');
    block3.classList.toggle('header__anim-3');
    navList.classList.toggle('header__navlist-anim');
});

closeBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('header__ham');
    block1.classList.toggle('header__anim-1');
    block2.classList.toggle('header__anim-2');
    block3.classList.toggle('header__anim-3');
    navList.classList.toggle('header__navlist-anim');
});