const menuButton = document.getElementById("menuButton") as HTMLButtonElement;
const menu = document.querySelector(".nav-menu") as HTMLElement;

menuButton.addEventListener("click", () => {
  menu.classList.toggle("active");
  menu.classList.toggle("hidden");
});
