// HEADER

export function elementCreation() {
const nav = document.querySelector("nav");

const homeButton = document.createElement("button");
    homeButton.setAttribute("class", "home");
const menuButton = document.createElement("button");
    menuButton.setAttribute("class", "menu");
const aboutButton = document.createElement("button");
    aboutButton.setAttribute("class", "about");



nav.append(homeButton,menuButton,aboutButton);

homeButton.textContent = "Home";
menuButton.textContent = "Menu";
aboutButton.textContent = "About";

};