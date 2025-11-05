import loadHome from "./home";
import loadMenu from "./Menu";
import loadContacts from "./contact";
import "./styles.css"

console.log("Restaurant Inauguration!!");

document.addEventListener("DOMContentLoaded", () => {
    loadHome();
    document.querySelector('#Home').addEventListener("click", loadHome);
    document.querySelector('#Menu').addEventListener("click", loadMenu);
    document.querySelector('#Contact').addEventListener("click", loadContacts);
})