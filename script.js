let count = 0;

const countDisplay = document.getElementById("count");
const addBtn = document.querySelector(".add");
const resetBtn = document.querySelector(".reset");

addBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});
