const create = document.getElementById("create-btn");
const menu = document.getElementById("menu");
const submit = document.getElementById("submit");
const createMenu = document.getElementById("create-menu");
const outputCreate = document.getElementById("output_create");
const outputRead = document.getElementById("output_read");
const input = document.getElementById("input");
const content = document.getElementById("content");
const readMenu = document.getElementById("read-menu");
const read = document.getElementById("read");
const readBtn = document.getElementById("read-btn");
const link = document.getElementById("link");

create.addEventListener("click", () => {
  menu.classList.add("hidden");
  createMenu.classList.remove("hidden");
});
if (submit) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    outputCreate.classList.remove("hidden");
    if (input.value.trim().length > 0) {
      outputCreate.innerHTML = `<img src="http://api.qrserver.com/v1/create-qr-code/?data=${input.value}&size=100x100"></img>
      <button class="download"><i class="fa fa-download"></i> Download</button>`;
      input.value = "";
    } else {
      const content = `<p id="error">Please enter a valid link.</p>`;
      outputCreate.insertAdjacentHTML("beforeend", content);
      setTimeout(function () {
        document.getElementById("error").remove();
      }, 500);
    }
  });
}

if (read) {
  readBtn.addEventListener("click", function () {
    menu.classList.add("hidden");
    readMenu.classList.remove("hidden");
    read.addEventListener("click", function (e) {
      e.preventDefault();
      outputRead.classList.remove("hidden");
      fetch(`https://api.qrserver.com/v1/read-qr-code/?fileurl=${link.value}`)
        .then((response) => response.json())
        .then((data) => {
          outputRead.innerHTML = `<a href="${data[0]["symbol"][0]["data"]}">Link</a>`;
        });
    });
  });
}
