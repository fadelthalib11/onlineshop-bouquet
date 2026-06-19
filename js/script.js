// Toggle Class Active untuk Hamburger Menu
const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

hamburgerMenu.onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Klik di luar elemen untuk menyembunyikan Navbar Nav
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
