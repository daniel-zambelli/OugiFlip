const toggleBtn = document.querySelector(".toggle__btn");
const toggleBtnIcon = document.querySelector(".toggle__btn i");
const dropDownMenu = document.querySelector(".dropdown__menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "bx bx-x" : "bx bx-menu";
};
