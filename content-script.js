const createBtn = document.getElementById("create-btn");
const menu = document.getElementById("menu");
const create = document.getElementById("submit");
const createMenu = document.getElementById("create-menu");
const outputCreate = document.getElementById("output_create");
const outputRead = document.getElementById("output_read");
const input = document.getElementById("input");
const content = document.getElementById("content");
const readMenu = document.getElementById("read-menu");
const read = document.getElementById("read");
const readBtn = document.getElementById("read-btn");
const link = document.getElementById("link");
const loader = document.getElementById("loader-el");
const reload = document.getElementById("main-page");

createBtn.addEventListener("click", () => {
  menu.classList.add("hidden");
  reload.classList.remove("hidden");
  createMenu.classList.remove("hidden");
});

readBtn.addEventListener("click", () => {
  menu.classList.add("hidden");
  reload.classList.remove("hidden");
  readMenu.classList.remove("hidden");
});

create.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value.trim().length > 0) {
    outputCreate.innerHTML = `<img src="http://api.qrserver.com/v1/create-qr-code/?data=${input.value}&size=100x100"></img>
      <a href="http://api.qrserver.com/v1/create-qr-code/?data=${input.value}&size=100x100" download><button class="download">Download</button></a>`;
    input.value = "";
  } else {
    const content = `<p id="error">Please enter a valid link.</p>`;
    outputCreate.insertAdjacentHTML("beforeend", content);
    setTimeout(function () {
      document.getElementById("error").remove();
    }, 500);
  }
});

read.addEventListener("click", (e) => {
  e.preventDefault();
  if (link.value.trim().length > 0) {
    outputRead.classList.remove("hidden");
    fetch(`https://api.qrserver.com/v1/read-qr-code/?fileurl=${link.value}`)
      .then((response) => response.json())
      .then((data) => {
        outputRead.innerHTML = `<a href="${data[0]["symbol"][0]["data"]}" target="_blank"><button class="custom-btn btn-style"><span>Link</span></button></a>`;
      })
      .catch(() => {
        outputRead.innerHTML = "Invalid request";
      });
  }
});
if (reload) {
  reload.addEventListener("click", () => {
    location.reload();
  });
}
