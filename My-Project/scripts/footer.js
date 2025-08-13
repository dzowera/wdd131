const currentYear = new Date().getFullYear();
document.querySelector(".js-year").textContent = currentYear;

const lastDateModifed = new Date(document.lastModified);
document.querySelector(".js-date-modified").textContent = lastDateModifed;
