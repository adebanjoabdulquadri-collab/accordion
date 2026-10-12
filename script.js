// variables
const accordion = document.getElementsByClassName("content-container");

for (let i = 0; i < accordion.length; i++) {
  function revealAccordion() {
    this.classList.toggle("active");
  }
  accordion[i].addEventListener("click", revealAccordion);
}
