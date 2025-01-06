function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(createMenuItem(
        "HOT GRILLED BURGER",
        "Ranch sauce, lettuce, jalapeno, hot sauce, mozzarella cheese",
        "burger-one.png"
    ))
    menu.appendChild(createMenuItem(
        "SMOKE BURGER",
        "Lettuce, tomatoes, mozzarella, smoke cheese and smoke sauce",
        "burger-two.jpg"
    ))
    menu.appendChild(createMenuItem(
        "CLASSIC CHICKEN BURGER",
        "Tomatoes, onions, lettuce, cheddar cheese and classic sauce",
        "burger-three.jpg"
    ))
    menu.appendChild(createMenuItem(
        "SWEET CHICKEN BURGER",
        "Honey masturd sauce, lettuce, honey sauce, coleslaw, cheese",
        "burger-four.jpg"
    ))
    menu.appendChild(createMenuItem(
        "SPICY CHICKEN BURGER",
        "Lettuce, tomatoes, jalapeno, cheddar cheese, spice powder and hot sauce",
        "burger-five.jpg"
    ))
    menu.appendChild(createMenuItem(
        "CHEESY BEEF BURGER",
        "Tomatoes, onions, lettuce, cheddar cheese, smoke cheese, pickles",
        "burger-six.jpg"
    ))
    menu.appendChild(createMenuItem(
        "CLASSIC BURGER",
        "Tomatoes, onions, lettuce, cheddar cheese and classic sauce",
        "burger-seven.jpg"
    ))
    menu.appendChild(createMenuItem(
        "CRAZY CHICKEN",
        "Chicken - crazy sauce - lettuce - coleslaw - cheese",
        "burger-eight.jpg"
    ))

    return menu;
}

function createMenuItem(name, description, imageSrc) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const itemImg = document.createElement("img");
    itemImg.src = `./images/Menu/${imageSrc}`
    itemImg.alt = imageSrc;

    const itemName = document.createElement("h2");
    itemName.textContent = name;

    const itemDescription = document.createElement("p");
    itemDescription.textContent = description;

    menuItem.appendChild(itemImg);
    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDescription);

    return menuItem;
}

function loadMenu(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;