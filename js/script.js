console.log("Script loaded");

// Toogle class active

const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
