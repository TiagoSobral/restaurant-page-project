import "../css/style.css";
import "../css/homepage.css"
import "../css/menu.css";
import "../css/about.css"

import { elementCreation } from "./elements.js";
import { homePage } from "./homepage.js";
import { menu } from "./menu.js";
import { aboutMe } from "./about.js";

elementCreation();
homePage();

const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const aboutBtn = document.querySelector(".about");

homeBtn.addEventListener("click", () => {
    wipeElements();
    homePage();
});

menuBtn.addEventListener("click", () => {
    wipeElements();
    menu();
});

aboutBtn.addEventListener("click", () => {
    wipeElements();
    aboutMe();
});


function wipeElements() {
    const body = document.querySelector("body");
    const content = document.querySelector("#content");
    content.remove();

    const newContent = document.createElement("div");
        newContent.setAttribute("id", "content");

    body.appendChild(newContent);

}
