console.log("Script loaded");

// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");
const toggleBtn = document.getElementById("toggleMenu");
const menuTambahan = document.getElementById("menuLainnya");

// Toggle ketika hamburger menu diklik
hamburger.onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar hamburger untuk menghilangkan nav
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Toggle Menu Lainnya
toggleBtn.addEventListener("click", function () {
  if (menuTambahan.style.display === "none") {
    menuTambahan.style.display = "grid";
    toggleBtn.textContent = "Sembunyikan";
  } else {
    menuTambahan.style.display = "none";
    toggleBtn.textContent = "Menu Lainnya";
  }
});
