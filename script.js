const dialog = document.getElementById("reader");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");

document.querySelectorAll(".read-more").forEach(button => {
  button.addEventListener("click", () => {
    modalTitle.textContent = button.dataset.title;
    modalText.textContent = button.dataset.text;
    dialog.showModal();
  });
});

document.querySelector(".close").addEventListener("click", () => dialog.close());

dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});
