function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const homeBurger = document.createElement("img");
    homeBurger.src = "./images/home-burger.jpg";
    homeBurger.alt = "home-burger";

    home.appendChild(createParagraph("Experience the Best Burgers in the Country!"));
    home.appendChild(createParagraph("Crafted with Heart Since 1998."));
    home.appendChild(homeBurger);
    home.appendChild(createParagraph("Order Online or Visit Us Today!"));

    return home;
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;