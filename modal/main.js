const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hideen");
};

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hideen");
}

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", openModal);
  console.log(btnOpenModal[i]);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
