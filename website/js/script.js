const imgsDiapo = document.querySelectorAll('.diapo img');
const nbSlide = imgsDiapo.length;
const suivant = document.querySelector('.left-arrow');
const precedent = document.querySelector('.right-arrow');

let count = 0;

function slideSuivante() {
    imgsDiapo[count].classList.remove('active');

    if (count < nbSlide - 1) {
        count++;
    } else count = 0;

    imgsDiapo[count].classList.add('active');
}

function slidePrecedente() {
    imgsDiapo[count].classList.remove('active');
    console.log(count);
    if (count > 0) {
        count--;
    } else count = nbSlide - 1;
    console.log(count);
    imgsDiapo[count].classList.add('active');
}

suivant.addEventListener('click', slideSuivante);
precedent.addEventListener('click', slidePrecedente);
setInterval(() => {
    slideSuivante();
}, 6000);