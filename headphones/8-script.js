const header = document.querySelector("#header");

const links = document.querySelector("#links");

hamMenu.addEventListener("click", () => {
  header.classList.toggle("active");
  list.classList.toggle("active");
});