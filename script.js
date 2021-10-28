const toggleButton = document.getElementsByClassName('nav-toggler')[0];
const navbarLinks = document.getElementsByClassName('nav-links')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});