
export function aboutMe() {
    const content = document.querySelector("#content");

    const aboutTitle = document.createElement("section");
        aboutTitle.setAttribute("class", "about-title");
        aboutTitle.textContent = "About us"
    
    const aboutContent = document.createElement("section");
        aboutContent.setAttribute("class", "about-content");
        const paragraphOne = document.createElement("p");
        const paragraphTwo = document.createElement("p");

    content.appendChild(aboutTitle);
    content.appendChild(aboutContent);
    aboutContent.appendChild(paragraphOne);
    aboutContent.appendChild(paragraphTwo)
    
    paragraphOne.textContent = `Welcome to Nook of Nostalgia, where the heart of Portugal meets refined elegance. Nestled in the city's vibrant culinary scene, our restaurant is dedicated to celebrating the rich traditions and timeless flavors of Portuguese cuisine, re-imagined for the modern palate.`

    paragraphTwo.textContent = `At Nook of Nostalgia, we believe that every meal is a story woven from heritage, passion, and the finest ingredients. Our menu pays homage to Portugal's diverse regions, from the sun-kissed coasts of the Algarve to the rolling vineyards of the Douro Valley. Each dish is crafted with care, using authentic recipes passed down through generations, and elevated by contemporary techniques.`


}