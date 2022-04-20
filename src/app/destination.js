import data from './data.json';
// Images
import DestinationEuropa from '../assets/destination/image-europa.webp';
import DestinationMoon from '../assets/destination/image-moon.webp';
import DestinationMars from '../assets/destination/image-mars.webp';
import DestinationTitan from '../assets/destination/image-titan.webp';


const dataTransformed = JSON.parse(data)
const dataArray = [...dataTransformed.destinations];


const startTab = document.querySelector('.tab-dest-here');
//const articleEl = document.querySelector('.article---dest') //div holding images

const destinationImg = document.querySelector('.destination-img');
const titleEl = document.querySelector('.destination-h2');
const destinationTravel = document.querySelector('.destination-travel');
const destinationDescription = document.querySelector('.destination-description');
const destionationDistance = document.querySelector('.destination-distance');

destinationImg.src = DestinationMoon;



function makeTabs(e) {

  // make tabscontroller to set a controller for the tab system
    // const tabsController = document.createElement('div');
    // tabsController.setAttribute("role", "tabslist");
    // tabsController.setAttribute("aria-label", "destinations");
    // tabsController.classList.add("tab-list" ,"underline-indicators",  "flex")
    const buttonArray = dataArray.map(element => {
        return `<button role="tab" class="uppercase ff-sans-cond text-accent letter-spacing-2 bg-dark button" aria-selected="false" data-id="${element.name}">${element.name}</button>`
    })
    
    startTab.innerHTML = buttonArray.join('');
    
    //startTab.insertBefore(tabsController, articleEl)

    const buttonsDom = [...document.querySelectorAll('.button')]
    buttonsDom[0].setAttribute('aria-selected', true)

    buttonsDom.forEach(buttons => {
        
        buttons.addEventListener('click', (e) => {
            if (e.currentTarget.matches(".button")) {
              buttonsDom.forEach(buttons => buttons.setAttribute("aria-selected", false))
    
              const {id} = e.currentTarget.dataset;
              e.currentTarget.setAttribute('aria-selected', true)
          

              const filterElements = dataArray.find(item => item.name === id);
              
              
              destinationImg.src = filterElements.images.webp;
              destinationImg.setAttribute("alt", `"${filterElements.name}"`)
              titleEl.innerHTML = filterElements.name
              destinationTravel.innerHTML = filterElements.travel;
              destinationDescription.innerHTML = filterElements.description;
              destionationDistance.innerHTML = filterElements.distance;   
            }
        })
    })
}
window.addEventListener('DOMContentLoaded', makeTabs);


