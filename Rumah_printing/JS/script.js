//Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

  const menuLinks = document.querySelectorAll('.navbar .navbar-nav a');

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuLinks.forEach(el => el.classList.remove('active'));
      link.classList.add('active');
    });
  });
  
  // remove navbar
  const hamburger = document.querySelector('#hamburger-menu');
  document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove('active');
    }
  });
  
//   Tombol Dark & light mode
 const toggleBtn = document.getElementById("toggleMode");
 const modeIcon = document.getElementById("modeIcon");

function updateIcon() {
  const isDark = document.body.classList.contains("dark-mode");
  const newIcon = document.createElement("i");

  newIcon.setAttribute("id", "modeIcon");
  newIcon.setAttribute("data-feather", isDark ? "sun" : "moon");

  const oldIcon = document.getElementById("modeIcon");
  oldIcon.replaceWith(newIcon);

  feather.replace(); // Render ulang ikon baru
}
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem("mode", document.body.classList.contains("dark-mode") ? "dark" : "light");
      updateIcon();
    });

    // Saat halaman dimuat
    window.addEventListener("load", () => {
      if (localStorage.getItem("mode") === "dark") {
        document.body.classList.add("dark-mode");
      }
      updateIcon(); // Tampilkan ikon sesuai mode
    });
