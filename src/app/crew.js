import data from './data.json';
// Images
import CrewDouglas from '../assets/crew/image-douglas-hurley.webp';
import CrewMark from '../assets/crew/image-mark-shuttleworth.webp';
import CrewVictor from '../assets/crew/image-victor-glover.webp';
import CrewAnousheh from '../assets/crew/image-anousheh-ansari.webp';

const dataTransformed = JSON.parse(data)
const dataArray = [...dataTransformed.crew];


const imgCrew = document.querySelector('.crew-img');

imgCrew.src = CrewDouglas;

const tabEl = document.querySelector('.dot-indicators');
const roleEl = document.querySelector('.role');
const nameEl = document.querySelector('.name');
const bioEl = document.querySelector('.bio')

function makeTabs(e) {
    const buttonArray = dataArray.map(element => {
        return `<button class="button" aria-selected="false" data-id="${element.name}" role="tab"><span class="sr-only">${element.name}</span></button>`
    })

    console.log(buttonArray);
    tabEl.innerHTML = buttonArray.join('');

    const buttonsDom = [...document.querySelectorAll('.button')]
    buttonsDom[0].setAttribute('aria-selected', true)

    buttonsDom.forEach(button => {
        button.addEventListener('click', (e) => {
            if (e.currentTarget.matches(".button")) {
                buttonsDom.forEach(buttons => buttons.setAttribute("aria-selected", false));

                const {id} = e.currentTarget.dataset;
                e.currentTarget.setAttribute('aria-selected', true);

                const filterElements = dataArray.find(item => item.name === id);

                imgCrew.src = filterElements.images.webp;
                imgCrew.setAttribute("alt", `"${filterElements.name}"`)
                nameEl.innerHTML = filterElements.name
                roleEl.innerHTML = filterElements.role;
                bioEl.innerHTML = filterElements.bio;
                
            }
        })
    })
}


window.addEventListener('DOMContentLoaded', makeTabs);