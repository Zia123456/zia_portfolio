const openSideNav = document.querySelector('.humberger-icon-container');
const closeSideNav = document.querySelector('.close-btn');
const clickedOnPortfolio = document.querySelector('.portfolio-text-side-nav');
const clickedOnAbout = document.querySelector('.about-text-side-nav');
const clickedOnContact = document.querySelector('.contact-text-side-nav');
const clicked = document.querySelector('.side-nav-container');
const clickedCloseBtn = document.querySelector('.side-nav-container');

function displaySideNav() {
  clicked.classList.add('side-nav-container-clicked');
}

openSideNav.addEventListener('click', displaySideNav);
function hideSideNav() {
  clickedCloseBtn.classList.remove('side-nav-container-clicked');
  clickedOnPortfolio.classList.remove('side-nav-container-clicked');
  clickedOnAbout.classList.remove('side-nav-container-clicked');
  clickedOnContact.classList.remove('side-nav-container-clicked');
}

closeSideNav.addEventListener('click', hideSideNav);
clickedOnPortfolio.addEventListener('click', hideSideNav);
clickedOnAbout.addEventListener('click', hideSideNav);
clickedOnContact.addEventListener('click', hideSideNav);
