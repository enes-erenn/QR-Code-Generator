const create = document.getElementById("create-btn");
const menu = document.getElementById("menu");
const submit = document.getElementById("submit");
const createMenu = document.getElementById("create-menu");
const output = document.getElementById("output");
const input = document.getElementById("input");
const content = document.getElementById("content");

create.addEventListener("click", () => {
  menu.classList.add("hidden");
  createMenu.classList.remove("hidden");
});
if (submit) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    output.classList.remove("hidden");
    if (input.value.trim().length > 0) {
      output.innerHTML = `<img src="http://api.qrserver.com/v1/create-qr-code/?data=${input.value}&size=100x100"></img>
      <button class="download"><i class="fa fa-download"></i> Download</button>`;
      input.value = "";
    } else {
      const content = `<p id="error">Please enter a valid link.</p>`;
      output.insertAdjacentHTML("beforeend", content);
      setTimeout(function () {
        document.getElementById("error").remove();
      }, 500);
    }
  });
}
