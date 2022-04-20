// importing css to main js file
import '../styles/index.css';

// importing all pictures to the main js file
import Logo from '../assets/shared/logo.svg';
import IconHamburger from '../assets/shared/icon-hamburger.svg';
import IconHamburgerClose from '../assets/shared/icon-close.svg';

// Home Background
import BackgroundHomeMobile from '../assets/home/background-home-mobile.jpg';
import BackgroundHomeTablet from '../assets/home/background-home-tablet.jpg';
import BackgroundHomeDesktop from '../assets/home/background-home-desktop.jpg';

//  Destination Background 
import BackgroundDestinationMobile from '../assets/destination/background-destination-mobile.jpg';
import BackgroundDestinationTablet from '../assets/destination/background-destination-tablet.jpg';
import BackgroundDestinationDesktop from '../assets/destination/background-destination-desktop.jpg';

// Crew Background
import BackgroundCrewMobile from '../assets/crew/background-crew-mobile.jpg';
import BackgroundCrewtablet from '../assets/crew/background-crew-tablet.jpg';
import BackgroundCrewDesktop from '../assets/crew/background-crew-desktop.jpg';

// Technology Background
import BackgroundTechnologyMobile from '../assets/technology/background-technology-mobile.jpg';
import BackgroundTechnologyTablet from '../assets/technology/background-technology-tablet.jpg';
import BackgroundTechnologyDesktop from '../assets/technology/background-technology-desktop.jpg';


// Logo Selector
const logo = document.querySelector('.logo');
logo.src = Logo;
// nav section
const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
navToggle.setAttribute("data-visible", false);

navToggle.addEventListener('click', (e) => {
    const visibility = nav.getAttribute("data-visible");
    
    if (visibility === "false") {
        nav.setAttribute("data-visible", true)
        navToggle.setAttribute("aria-expanded", true)
    } else {
        nav.setAttribute("data-visible", false)
        navToggle.setAttribute("aria-expanded", false)
    }
})

