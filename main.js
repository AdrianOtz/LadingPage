//EASTER EGG: console.log('Ey what you see ehh???... !-_- '); 
// by AdrianOtz follow me on :
// Twitter: twitter.com/Adrian0tz
// GitHub : github.com/AdrianOtz

document.querySelector('.menu-btn').addEventListener('click', () => {
    //console.log('wait!...you again??...!-_-')//
    document.querySelector('.nav-menu').classList.toggle('show');
});

// Scroll Reveal library //
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', {delay:500 });
ScrollReveal().reveal('.cards-banner-one', {delay:500 });
ScrollReveal().reveal('.cards-banner-two', {delay:500 });
ScrollReveal().reveal('.social', {delay:500 });
ScrollReveal().reveal('.social-links', {delay:500 });
ScrollReveal().reveal('.footer-links', {delay:500 });
ScrollReveal().reveal('.footer-container', {delay:500 });
ScrollReveal().reveal('.footer', {delay:500 });