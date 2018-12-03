require('../scss/modules/_variables.scss');
require('../scss/partials/_main.scss');
require('../scss/partials/_header.scss');

document.addEventListener("DOMContentLoaded", function () {

    let menuBtnResponsive = document.createElement('div');
    menuBtnResponsive.classList.add('responsive-menu-btn');
    menuBtnResponsive.addEventListener('click', () => {
        menuSection.classList.toggle('displayToggle');
    });

    let menuSection = document.querySelector('.navbar-menu');
    let logoSection = document.querySelector('.navbar-logo');

    let mobile = window.matchMedia("(min-width: 822px)")

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
});
