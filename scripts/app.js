require('../scss/modules/_variables.scss');
require('../scss/partials/_main.scss');
require('../scss/partials/_header.scss');
require('../scss/partials/_slider.scss');
require('../scss/partials/_map_section.scss');
require('../scss/partials/_laptop_section.scss');
require('../scss/partials/_team_slider.scss');
require('../scss/partials/_articles.scss');
require('../scss/partials/_footer.scss');

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

    // Team slider

    let circlesBtn = document.querySelectorAll('.circle-btn');
    let teamSlides = document.querySelector('.team-slider').children;

    let teamSliderCounter = 0;

    for(let i=0; i<circlesBtn.length; i++) {
        circlesBtn[i].addEventListener('click', () => {

            teamSliderCounter = i;

            for(let i=0; i<teamSlides.length; i++) {
                if(i === teamSliderCounter) {
                    teamSlides[i].classList.add('team-slider-visible');
                    teamSlides[i].classList.remove('team-slider-invisible');
                } else {
                    teamSlides[i].classList.remove('team-slider-visible');
                    teamSlides[i].classList.add('team-slider-invisible');
                }
            }
        })
    }

    // jQuery - animacje

    $(window).on('scroll', () => {
        let $scrollWindow = $(window).scrollTop();
        let $windowHeight = $(window).height();

        // Laptop Section
        let $laptopImage = $('.page-laptop img');
        let $scrollLaptop = $('.page-laptop img').offset().top;

        if($scrollWindow > $scrollLaptop-$windowHeight*0.5) {
            $laptopImage.removeClass('scroll-animate-laptop');
        } else {
            $laptopImage.addClass('scroll-animate-laptop');
        }

        // Team Section
        let $pageTeamSlide = $('.team-slider');
        let $scrollTeamSlider = $('.page-team').offset().top;

        if($scrollWindow > $scrollTeamSlider-$windowHeight*0.5) {
            $pageTeamSlide.removeClass('scroll-animate-team');
        } else {
            $pageTeamSlide.addClass('scroll-animate-team');
        }

        // Articles Section
        let $articleBoxLeft = $('.article-box').eq(0);
        let $articleBoxRight = $('.article-box').eq(1);
        let $pageArticles = $('.page-articles');
        let $scrollArticles = $('.page-articles').offset().top;

        if($scrollWindow > $scrollArticles-$windowHeight*0.5) {
            $articleBoxLeft.removeClass('scroll-animate-left');
            $articleBoxRight.removeClass('scroll-animate-right');
        } else {
            $articleBoxLeft.addClass('scroll-animate-left');
            $articleBoxRight.addClass('scroll-animate-right');
        }
    })
;});

window.onload = () => {
    // Slider

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

    slideContainer.classList.remove('slider-invisible');
}
