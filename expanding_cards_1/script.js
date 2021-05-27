const mehmet = document.querySelectorAll(".panel");

mehmet.forEach((panel) => {
  panel.addEventListener("click", () => {
    hasan();
    panel.classList.add("active");

    // console.log(123);
  });
  //   console.log(panels);
});
// hasanali gelio
function hasan() {
  mehmet.forEach((panel) => {
    panel.classList.remove("active");
  });
}

// const hasan = [1, 2, 3];
// hasan.forEach((hasan) => {
//   console.log(hasan);
// });
// var
// let const
