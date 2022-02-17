const create = document.getElementById("create-btn");
const menu = document.getElementById("menu");
const form = document.getElementById("input-group");
const createMenu = document.getElementById("create-menu");
const output = document.getElementById("output");
const input = document.getElementById("input");

create.addEventListener("click", () => {
  menu.classList.add("hidden");
  createMenu.classList.remove("hidden");
});
form.addEventListener("submit", () => {});
