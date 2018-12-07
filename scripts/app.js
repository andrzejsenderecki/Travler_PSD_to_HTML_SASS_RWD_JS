require('../scss/modules/_variables.scss');
require('../scss/partials/_main.scss');
require('../scss/partials/_header.scss');
require('../scss/partials/_slider.scss');

document.addEventListener("DOMContentLoaded", function () {

    // Responsive menu

    let menuBtnResponsive = document.createElement('div');
    menuBtnResponsive.classList.add('responsive-menu-btn');
    menuBtnResponsive.addEventListener('click', () => {
        menuSection.classList.toggle('displayToggle');
    });

    let menuSection = document.querySelector('.navbar-menu');
    let logoSection = document.querySelector('.navbar-logo');

    let mobile = window.matchMedia("(min-width: 822px)");

    let checkMobile = () => {
        if (mobile.matches) {
            menuSection.classList.remove('displayToggle');
            let toRemove = document.querySelector('.responsive-menu-btn');
            if(toRemove !== null) {
                toRemove.parentElement.removeChild(toRemove);
            }
        } else  {
            menuSection.classList.add('displayToggle');
            logoSection.appendChild(menuBtnResponsive);
        }
    }

    checkMobile();

    mobile.addListener( function(mobile) {
        checkMobile();
    });

    //Slider

    let slider = document.querySelectorAll('.slider li');
    let btnNext = document.querySelector('.nextSlide');
    console.log(btnNext);
    let btnPrev = document.querySelector('.prevSlide');

    let slideCounter = 0;

    let slideTime = setInterval(() => {
        if(slideCounter<slider.length) {
            slideCounter += 1;
        } else {
            slideCounter = 0;
        }

        checkSlideCounter();
    }, 3000);

    let checkSlideCounter = () => {
        for(let i=1; i<slider.length; i++) {
            if(slideCounter === i) {
                slider[i].classList.add('sliderVisible');
                slider[i].classList.remove('sliderInvisible');
            } else {
                slider[i].classList.add('sliderInvisible');
                slider[i].classList.remove('sliderVisible');
            }
        }
    }
    console.log(slider.length);
    btnNext.addEventListener('click', () => {
        if(slideCounter < slider.length-1) {
            slideCounter += 1;
        }
        console.log(slideCounter);
        checkSlideCounter();
    });

    btnPrev.addEventListener('click', () => {
        if(slideCounter > 0) {
            slideCounter -= 1;
        }
        console.log(slideCounter);
        checkSlideCounter();
    });

});
