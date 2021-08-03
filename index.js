const navBar = document.querySelector(".navbar");
const btn = document.querySelector(".fa-backward");

btn.onclick = () => {
    navBar.classList.toggle("active")
}