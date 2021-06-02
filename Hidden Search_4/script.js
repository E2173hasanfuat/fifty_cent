const mehmet = document.querySelector(".search");
const ali = document.querySelector(".btn");
const yusuf = document.querySelector(".input");

ali.addEventListener("click", () => {
  mehmet.classList.toggle("active");
  //   add or remove
  yusuf.focus();
});
