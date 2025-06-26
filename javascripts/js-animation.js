const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const valueSpan = document.getElementById("value");

let value = 0;

decreaseBtn.addEventListener("click", () => {
  if (value > 0) {
    value--;
    valueSpan.textContent = value;
  }
});

increaseBtn.addEventListener("click", () => {
  if (value < 5) {
    value++;
    valueSpan.textContent = value;
  }
});
const minusBtn = document.getElementById("minus-btn");
const plusBtn = document.getElementById("plus-btn");
const numberDisplay = document.getElementById("number-display");

let number = 0;

minusBtn.addEventListener("click", () => {
  if (number > 0) {
    number--;
    numberDisplay.textContent = number;
  }
});

plusBtn.addEventListener("click", () => {
  if (number < 5) {
    number++;
    numberDisplay.textContent = number;
  }
});

const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("myModal");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Закрытие при клике вне окна
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name && email) {
      alert(`Спасибо, ${name}! Мы свяжемся с вами по адресу ${email}.`);
      this.reset();
    } else {
      alert("Пожалуйста, заполните все поля.");
    }
  });
