const createBtn = document.getElementById("create-btn"),
  menu = document.getElementById("menu"),
  create = document.getElementById("submit"),
  createMenu = document.getElementById("create-menu"),
  outputCreate = document.getElementById("output_create"),
  outputRead = document.getElementById("output_read"),
  input = document.getElementById("input"),
  content = document.getElementById("content"),
  readMenu = document.getElementById("read-menu"),
  read = document.getElementById("read"),
  readBtn = document.getElementById("read-btn"),
  link = document.getElementById("link"),
  loader = document.getElementById("loader-el"),
  reload = document.getElementById("main-page");
let error = '<p id="error">Please enter a valid link.</p>',
  invalid = "<p id='invalid'>Invalid request</p>";
createBtn.addEventListener("click", () => {
  menu.classList.add("hidden"),
    reload.classList.remove("hidden"),
    createMenu.classList.remove("hidden");
}),
  readBtn.addEventListener("click", () => {
    menu.classList.add("hidden"),
      reload.classList.remove("hidden"),
      readMenu.classList.remove("hidden");
  }),
  create.addEventListener("click", (e) => {
    e.preventDefault(),
      input.value.trim().length > 0
        ? ((outputCreate.innerHTML = `<img src="http://api.qrserver.com/v1/create-qr-code/?data=${input.value}&size=100x100"></img>\n      <a href="http://api.qrserver.com/v1/create-qr-code/?data=${input.value}&size=100x100" download><button class="download">Download</button></a>`),
          (input.value = ""))
        : (document.getElementById("error") ||
            document
              .getElementById("error-container")
              .insertAdjacentHTML("afterend", error),
          setTimeout(function () {
            document.getElementById("error").remove();
          }, 500));
  }),
  read.addEventListener("click", (e) => {
    e.preventDefault(),
      link.value.trim().length > 0
        ? (outputRead.classList.remove("hidden"),
          fetch(
            `https://api.qrserver.com/v1/read-qr-code/?fileurl=${link.value}`
          )
            .then((e) => e.json())
            .then((e) => {
              outputRead.innerHTML = `<a href="${e[0].symbol[0].data}" target="_blank"><button class="custom-btn btn-style"><span>Link</span></button></a>`;
            })
            .catch(() => {
              loader.classList.add("hidden"),
                document
                  .getElementById("error-container")
                  .insertAdjacentHTML("afterend", invalid),
                setTimeout(function () {
                  document.getElementById("invalid").remove();
                }, 500);
            }))
        : (document.getElementById("error") ||
            document
              .getElementById("error-container")
              .insertAdjacentHTML("afterend", error),
          setTimeout(function () {
            document.getElementById("error").remove();
          }, 500));
  }),
  reload &&
    reload.addEventListener("click", () => {
      location.reload();
    });
