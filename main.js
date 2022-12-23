'use strict'
const slider          = document.querySelector('#slider');
let sliderSection     = document.querySelectorAll('.slider__section');
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft         = document.querySelector('#btn--left');
const btnRight        = document.querySelector('#btn--right');


//hier wird das letzte foto an position 1 gesetzt
slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next(){
    //hier wird gemacht das immer das näcchste bild herkommt
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";

    setTimeout(function(){
        slider.style.transition = "none";
        //so wird das carusell gemacht
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";

    }, 500);

};
 function Prev(){
        //hier wird gemacht das immer das näcchste bild herkommt
        let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
        let sliderSectionLast = sliderSection[sliderSection.length -1];
        slider.style.marginLeft = "0";
        slider.style.transition = "all 0.5s";
    
        setTimeout(function(){
            slider.style.transition = "none";
            //so wird das carusell gemacht
            slider.insertAdjacentElement('afterbegin', sliderSectionLast);
            slider.style.marginLeft = "-100%";
    
        }, 500);
    };
btnRight.addEventListener('click', function(){
    Next();
});

btnLeft.addEventListener('click', function(){
    Prev();
});

//alle 2s wird der slider selbst ausgelösst - für die andre richtung Prev()
setInterval(function(){
    Next();
}, 5000);