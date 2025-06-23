
export function menu() {
    const content = document.querySelector("#content");

    const menuTitle = document.createElement("section");
    const menuContent = document.createElement("section");
    const menuFish = document.createElement("ul");
    const menuMeat = document.createElement("ul");
    const menuDessert = document.createElement("ul");

    menuTitle.setAttribute("class", "menu-title");
        menuTitle.textContent = "Menu";

    menuContent.setAttribute("class", "menu-content");


    menuFish.setAttribute("class", "fish");
    menuMeat.setAttribute("class", "meat");
    menuDessert.setAttribute("class", "dessert");

    content.appendChild(menuTitle);
    content.appendChild(menuContent);
    menuContent.appendChild(menuFish);
    menuContent.appendChild(menuMeat);
    menuContent.appendChild(menuDessert);
    

    function fishItems(){
        for (let i = 0; i < 4 ; i++) {
        const fishItem = document.createElement("li");

        fishItem.setAttribute("class", `fish-item`);

        menuFish.appendChild(fishItem);
        }
    }


    function meatItems(){
        for (let i = 0; i < 4 ; i++) {
        const meatItem = document.createElement("li");

        meatItem.setAttribute("class", `meat-item`);

        menuMeat.appendChild(meatItem);
        }
    }

    function dessertItems(){
        for (let i = 0; i < 2 ; i++) {
        const dessertItem = document.createElement("li");

        dessertItem.setAttribute("class", `dessert-item`);

        menuDessert.appendChild(dessertItem);
        }   
    }

    function nameItems() {
    const fishNames = ["Bacalhau à Brás","Polvo à Lagareiro","Sardinhas Assadas","Peixe Grelhado"];
    const meatNames = ["Cozido à Portuguesa","Carne de Porco à Alentejana","Bifana","Francesinha"];
    const dessertNames = ["Pastel de Nata", "Pudim Abade de Priscos"];

    const fishList = document.querySelectorAll(".fish-item");
    const meatList = document.querySelectorAll(".meat-item");
    const dessertList = document.querySelectorAll(".dessert-item");


    loopDom(fishList, fishNames);
    loopDom(meatList, meatNames);
    loopDom(dessertList, dessertNames);
    }

    function loopDom(list, array) {
        for (let i = 0; i < list.length; i++) {
            let names = array;
            list[i].textContent = names[i];
        }


    }  
    

    fishItems();
    meatItems();
    dessertItems();
    nameItems();
    

}


