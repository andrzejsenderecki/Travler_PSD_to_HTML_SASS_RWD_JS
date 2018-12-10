require('../scss/modules/_variables.scss');
require('../scss/partials/_main.scss');
require('../scss/partials/_header.scss');
require('../scss/partials/_slider.scss');
require('../scss/partials/_map_section.scss');
require('../scss/partials/_laptop_section.scss');

document.addEventListener('DOMContentLoaded', () => {
    // Responsive menu

    let menuBtnResponsive = document.createElement('div');
    menuBtnResponsive.classList.add('responsive-menu-btn');
    menuBtnResponsive.addEventListener('click', () => {
        menuSection.classList.toggle('display-toggle');
    });

    let menuSection = document.querySelector('.navbar-menu');
    let logoSection = document.querySelector('.navbar-logo');

    let mobile = window.matchMedia("(min-width: 847px)");

    let checkMobile = () => {
        if (mobile.matches) {
            menuSection.classList.remove('display-toggle');
            let toRemove = document.querySelector('.responsive-menu-btn');
            if(toRemove !== null) {
                toRemove.parentElement.removeChild(toRemove);
            }
        } else  {
            menuSection.classList.add('display-toggle');
            logoSection.appendChild(menuBtnResponsive);
        }
    }

    checkMobile();

    mobile.addListener( function(mobile) {
        checkMobile();
    });
});

window.onload = () => {
    //Slider

    let slider = document.querySelectorAll('.slider li');
    let btnNext = document.querySelector('.next-slide');
    let btnPrev = document.querySelector('.prev-slide');
    let prevSlideBtn = document.querySelector('.prev-slide');
    let nextSlideBtn = document.querySelector('.next-slide');
    let sliderIcon = document.querySelector('.slider-icon');
    let slideContainer = document.querySelector('.page-slide');
    let slide = document.querySelector('.slider img');

    let size = slide.offsetHeight;
    prevSlideBtn.style.height = `${size}px`;
    nextSlideBtn.style.height = `${size}px`;
    sliderIcon.style.height = `${size}px`;
    slideContainer.style.height = `${size}px`;

    window.addEventListener("resize", () => {
        let newSize = slide.offsetHeight;
        prevSlideBtn.style.height = `${newSize}px`;
        nextSlideBtn.style.height = `${newSize}px`;
        sliderIcon.style.height = `${newSize}px`;
        slideContainer.style.height = `${newSize}px`;
    });

    let slideCounter = 0;

    let slideTime = setInterval(() => {
        if(slideCounter<slider.length) {
            slideCounter += 1;
        } else {
            slideCounter = 0;
        }
        checkSlideCounter();
    }, 5000);

    let checkSlideCounter = () => {
        for(let i=1; i<slider.length; i++) {
            if(slideCounter === i) {
                slider[i].classList.add('slider-visible');
                slider[i].classList.remove('slider-invisible');
            } else {
                slider[i].classList.add('slider-invisible');
                slider[i].classList.remove('slider-visible');
            }
        }
    }

    btnNext.addEventListener('click', () => {
        if(slideCounter < slider.length) {
            slideCounter += 1;
        } else {
            slideCounter = 1;
        }
        checkSlideCounter();
    });

    btnPrev.addEventListener('click', () => {
        if(slideCounter > 0) {
            slideCounter -= 1;
        } else {
            slideCounter = slider.length-1;
        }
        checkSlideCounter();
    });

    prevSlideBtn.classList.remove('slider-nav-invisible');
    nextSlideBtn.classList.remove('slider-nav-invisible');
    sliderIcon.classList.remove('slider-nav-invisible');
}
