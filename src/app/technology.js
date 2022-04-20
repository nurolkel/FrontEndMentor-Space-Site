import data from './data.json';

// Images
import LandscapeLaunchVehicle from '../assets/technology/image-launch-vehicle-landscape.jpg';
import PortraitLaunchVehicle from '../assets/technology/image-launch-vehicle-portrait.jpg';
import LandscapeCapsule from '../assets/technology/image-space-capsule-landscape.jpg';
import PortraitCapsule from '../assets/technology/image-space-capsule-portrait.jpg';
import LandscapePort from '../assets/technology/image-spaceport-landscape.jpg';
import PortraitPort from '../assets/technology/image-spaceport-portrait.jpg';

const dataTransformed = JSON.parse(data)
const dataArray = [...dataTransformed.technology];


const technologyImg = document.querySelector('.technology-img');

window.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth < 1200) {
        technologyImg.src = LandscapeLaunchVehicle;
    } else if (window.innerWidth >= 1200) {
        technologyImg.src = PortraitLaunchVehicle;
    }
}, {
    once:true
});

const tabsEl = document.querySelector('.number-indicators');
const titleEl = document.querySelector('.technology-title');
const detailsEl = document.querySelector('.technology-details');



function makeTabs(e) {
    
    const buttonArray = dataArray.map((element,i) => {
        return `<button class="button" aria-selected="false" data-id="${element.name}"><span class="sr-only">${element.name}</span>${i + 1}</button>`
    });

    tabsEl.innerHTML = buttonArray.join('');

    const buttonsDom = [...document.querySelectorAll('.button')]
    buttonsDom[0].setAttribute('aria-selected', true);

    buttonsDom.forEach(button => {
        button.addEventListener('click', (e) => {

            if (e.currentTarget.matches(".button")) {

                buttonsDom.forEach(buttons => buttons.setAttribute("aria-selected", false))
    
                const {id} = e.currentTarget.dataset;
                e.currentTarget.setAttribute('aria-selected', true)
          

                const filterElements = dataArray.find(item => item.name === id);
                
                titleEl.textContent = filterElements.name;
                detailsEl.textContent = filterElements.description;
                technologyImg.setAttribute("alt", `${filterElements.name}`)
                

                if (window.innerWidth < 1200) {
                    technologyImg.src = filterElements.images.landscape;
                    
                } else if (window.innerWidth >= 1200) {
                    technologyImg.src = filterElements.images.portrait
                }

                

            }
        })
    })
    
}

window.addEventListener('DOMContentLoaded', makeTabs);