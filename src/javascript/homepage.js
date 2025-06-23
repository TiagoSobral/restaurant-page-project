// MAIN

export function homePage() {
const content = document.querySelector("#content");

const title = document.createElement("section");
    title.setAttribute("class", "homepage-title");
const mainText = document.createElement("section");
    mainText.setAttribute("class", "homepage-content");

title.textContent = "Nook of Nostalgia";
mainText.textContent = `Welcome to our restaurant, 
where the essence of Portugal comes alive in every dish. 
We invite you to experience the rich tapestry of traditional Portuguese cuisine, 
re-imagined with elegance and sophistication. Our menu celebrates time-honored recipes, 
from the famed codfish to hearty regional stews, crafted with the freshest local ingredients and a deep respect for culinary heritage`


content.appendChild(title);
content.appendChild(mainText);

}