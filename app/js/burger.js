// Логика открытия-закрытия бургера
let toggle = document.querySelector(".header__toggle");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("header__toggle--opened");
  toggle.classList.toggle("header__toggle--closed");
});
