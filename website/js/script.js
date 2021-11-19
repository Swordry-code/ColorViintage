const imgsDiapo = document.querySelectorAll('.diapo img');
const nbSlide = imgsDiapo.length;
const suivant = document.querySelector('.left-arrow');
const precedent = document.querySelector('.right-arrow');

let count = 0;

function slideSuivante()
{
    imgsDiapo[count].classList.remove('active');

    if(count < nbSlide - 1)
    {
        count++;
        console.log(count);
    }
    else count = 0;

    imgsDiapo[count].classList.add('active');
    console.log(count);
}

suivant.addEventListener('click', slideSuivante);