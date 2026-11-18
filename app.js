// const textEl = document.querySelector("#light");
// console.log(textEl);
const textEl = document.querySelector(".oy");
const bntEl = document.querySelector(".quyosh");

function getColor() {
  document.body.classList.add("darkmode");
  document.body.style.backgroundColor = `#251819`;
  bntEl.classList.remove("hidden");
  textEl.classList.add("hidden");
}
function addColor() {
  document.body.classList.remove("darkmode");
  document.body.style.backgroundColor = `#ffffff`;
  bntEl.classList.add("hidden");
  textEl.classList.remove("hidden");
}
