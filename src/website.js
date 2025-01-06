import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";


function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const restName = document.createElement("h1");
    restName.classList.add("rest-name");
    restName.textContent = "Cheese & Meat";

    header.appendChild(restName);
    header.appendChild(createNav());

    return header;
}

function createNav() {
    const nav = document.createElement("nav");

    const homeButton = document.createElement("button");
    homeButton.classList.add("nav-button");
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        loadHome();
    });

    const menuButton = document.createElement("button");
    menuButton.classList.add("nav-button");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuButton);
        loadMenu();
    });

    const aboutButton = document.createElement("button");
    aboutButton.classList.add("nav-button");
    aboutButton.textContent = "About";
    aboutButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(aboutButton);
        loadAbout();
    });

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(aboutButton);

    return nav;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".nav-button");

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active");
        }
    });

    button.classList.add("active");
}

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const copywrite = document.createElement("p");
    copywrite.textContent = `Copyright © ${new Date().getFullYear()} Musab Odeh`;

    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/musab-od";

    const githubIcon = document.createElement("i");
    githubIcon.classList.add("fa-brands");
    githubIcon.classList.add("fa-github");

    const credit = document.createElement("p");
    credit.textContent = "Inspired by michalosman";

    githubLink.appendChild(githubIcon);
    footer.appendChild(copywrite);
    footer.appendChild(githubLink);
    footer.appendChild(credit);

    return footer;
}

function initializeWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setActiveButton(document.querySelector(".nav-button"));
    loadHome();
}

export default initializeWebsite;