export default function loadHome() {
    const HomeContent = document.querySelector("#content");
    HomeContent.innerHTML = "";
    HomeContent.classList.remove('fade-in');

    const h2 = document.createElement("h2");
    h2.id = 'frontHeading';
    h2.textContent = "Welcome to Restaurant Del Mare";

    const h3 = document.createElement("h3");
    h3.id = 'text';
    h3.innerHTML = "Restaurant Del Mare invites you to dine by the essence of the sea -<br> where every dish tells a story of sea, salt, and serenity.";


    HomeContent.appendChild(h2);
    HomeContent.appendChild(h3);


    // Reflow trick — forces browser to re-read the layout before adding the class again
    void HomeContent.offsetWidth;

    HomeContent.classList.add('fade-in');
}