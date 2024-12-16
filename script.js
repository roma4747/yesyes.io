// Элементи
const hamburger = document.getElementById("header-hamburger-container");
const menu = document.getElementById("header-menu-wrapper");
const closeBtn = document.getElementById("header-close-btn");

// Відкрити меню
hamburger.addEventListener("click", () => {
  menu.classList.add("open");
  hamburger.classList.add("hidden"); // Скрити гамбургер
  closeBtn.classList.add("visible"); // Показати крестик
});

// Закрити меню
closeBtn.addEventListener("click", () => {
  menu.classList.remove("open");
  hamburger.classList.remove("hidden"); // Показати гамбургер
  closeBtn.classList.remove("visible"); // Скрити крестик
});
