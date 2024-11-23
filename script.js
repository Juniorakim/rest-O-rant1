document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navContainer = document.querySelector('.nav-container');

  // Toggle navigation menu on click
  hamburgerMenu.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent the click from bubbling up
    navContainer.classList.toggle('show');
  });

  // Close menu if clicked outside
  document.addEventListener('click', function (event) {
    if (!navContainer.contains(event.target)) {
      navContainer.classList.remove('show');
    }
  });
});
