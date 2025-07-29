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


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  
  // Add more temple objects here...
  {
    templeName: "Frankfurt Germany Temple",
    location: "Frankfurt, Germany",
    dedicated: "1987, August, 28",
    area: 32895,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/frankfurt-germany-temple/frankfurt-germany-temple-38924-main.jpg"
  },
  {
    templeName: "London England Temple",
    location: "London, England",
    dedicated: "1958, September, 7",
    area: 42652,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-4243-main.jpg"
  },
  {
    templeName: "Nairobi Kenya Temple",
    location: "Nairobi, Kenya",
    dedicated: "2025, May, 18",
    area: 19870,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/nairobi-kenya-temple/nairobi-kenya-temple-60488-main.jpg"
  },
  {
    templeName: "Boston Massachusetts Temple",
    location: "Massachusetts, United States",
    dedicated: "2000, October, 1",
    area: 69600,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/boston-massachusetts-temple/boston-massachusetts-temple-9913-main.jpg"
  },
  {
    templeName: "Oslo Norway Temple",
    location: "Oslo, Norway",
    dedicated: "2021, April, 4",
    area: 10800,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/oslo-norway-temple/oslo-norway-temple-36303-main.jpg"
  }
];

renderHTML();
function renderHTML() {
  let resultHTML = "";

  for (let i = 0; i < temples.length; i++){
    const templeObject = temples[i];

    const { templeName, location, dedicated, area, imageUrl } = templeObject;

    const html =
      `
      <div class="temple-info">
        <h2> ${templeName}</h2>
        <p>Location: ${location}</p>
        <p>Dedicated: ${dedicated}</p>
        <p>Size: ${area.toLocaleString()}</p>
        <img src="${imageUrl}" alt="temple_image" loading="lazy">
      </div>
      `;
    
    resultHTML += html;
  }

  document.querySelector('.js-album').innerHTML = resultHTML;
}

function largeTemple() {
  let resultHTML = "";

  for (let i = 0; i < temples.length; i++){
    const templeObject = temples[i];

    const { templeName, location, dedicated, area, imageUrl } = templeObject;
    
    if (area > 90000) {
      const html =
        `
      <div class="temple-info">
        <h2> ${templeName}</h2>
        <p>Location: ${location}</p>
        <p>Dedicated: ${dedicated}</p>
        <p>Size: ${area.toLocaleString()}</p>
        <img src="${imageUrl}" alt="temple_image" loading="lazy">
      </div>
      `;

      resultHTML += html;
    }
  }
  document.querySelector('.js-album').innerHTML = resultHTML;
}

function smallTemple() {
  let resultHTML = "";

  for (let i = 0; i < temples.length; i++) {
    const templeObject = temples[i];

    const { templeName, location, dedicated, area, imageUrl } = templeObject;

    if (area < 90000) {
      const html =
        `
      <div class="temple-info">
        <h2> ${templeName}</h2>
        <p>Location: ${location}</p>
        <p>Dedicated: ${dedicated}</p>
        <p>Size: ${area.toLocaleString()}</p>
        <img src="${imageUrl}" alt="temple_image" loading="lazy">
      </div>
      `;

      resultHTML += html;
    }
  }
  document.querySelector('.js-album').innerHTML = resultHTML;
}

function newTemple(){
  let resultHTML = "";

  for (let i = 0; i < temples.length; i++) {
    const templeObject = temples[i];

    const { templeName, location, dedicated, area, imageUrl } = templeObject;

    if (dedicated.includes('20')) {
      const html =
        `
      <div class="temple-info">
        <h2> ${templeName}</h2>
        <p>Location: ${location}</p>
        <p>Dedicated: ${dedicated}</p>
        <p>Size: ${area.toLocaleString()}</p>
        <img src="${imageUrl}" alt="temple_image" loading="lazy">
      </div>
      `;

      resultHTML += html;
    }
  }
  document.querySelector('.js-album').innerHTML = resultHTML;
}

function oldTemple(){
  let resultHTML = "";

  for (let i = 0; i < temples.length; i++) {
    const templeObject = temples[i];

    const { templeName, location, dedicated, area, imageUrl } = templeObject;

    if (dedicated.includes('188')) {
      const html =
        `
      <div class="temple-info">
        <h2> ${templeName}</h2>
        <p>Location: ${location}</p>
        <p>Dedicated: ${dedicated}</p>
        <p>Size: ${area.toLocaleString()}</p>
        <img src="${imageUrl}" alt="temple_image" loading="lazy">
      </div>
      `;

      resultHTML += html;
    }
  }
  document.querySelector('.js-album').innerHTML = resultHTML;
}


