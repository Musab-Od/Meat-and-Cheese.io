function createAbout() {
    const about = document.createElement('div');
    about.classList.add('about');

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '📞 123 456 789';

    const address = document.createElement('p');
    address.textContent = '🏠 Red Square 48, Moscow, Russia';

    const location = document.createElement('img');
    location.src = './images/map.png';
    location.alt = 'map';

    about.appendChild(phoneNumber);
    about.appendChild(address);
    about.appendChild(location);

    return about;
}

function loadAbout() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createAbout());
}

export default loadAbout;