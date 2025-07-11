// temples.js

const toggleButton = document.getElementById('menu-toggle');
const closeButton = document.getElementById('close-menu');
const navLinks = document.getElementById('nav-links');

// Open menu
toggleButton.addEventListener('click', () => {
  navLinks.classList.add('active');
});

// Close menu
closeButton.addEventListener('click', () => {
  navLinks.classList.remove('active');
});

// the footer

// Get current year from system
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Get and show last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;
