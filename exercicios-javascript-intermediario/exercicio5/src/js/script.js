const btnBack = document.getElementById('btn-back');
const btnAdvance = document.getElementById('btn-advance');
const sliders = document.querySelectorAll('.slider-container');
let counter = 0;

btnBack.addEventListener('click', () => {
    if (counter === 0) return;

    removeSlider();
    counter--;
    addSlider()

    addRemoveOpacity();
})

btnAdvance.addEventListener('click', () => {
    if (counter === sliders.length - 1) return;

    removeSlider();
    counter++;
    addSlider()

    addRemoveOpacity();
})

function removeSlider() {
    sliders[counter].classList.remove('active');
}

function addSlider() {
    sliders[counter].classList.add('active');
}

function addRemoveOpacity() {
    if (counter !== 0) {
        btnBack.classList.remove('opacity');
    } else {
        btnBack.classList.add('opacity');
    }
    if (counter === sliders.length - 1) {
        btnAdvance.classList.add('opacity');
    } else {
        btnAdvance.classList.remove('opacity');
    }
}