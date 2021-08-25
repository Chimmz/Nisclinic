'use strict';
const breadcrumb = document.querySelector('.navbar .breadcrumb');
const mobileNav = document.querySelector('.mobile-nav')

// Breadcrumb and mobile nav
breadcrumb.addEventListener('click', ev => {
   ev.currentTarget.classList.toggle('breadcrumb--clicked-to-open-mobile-nav');
   mobileNav.classList.toggle('mobile-nav--open')
});