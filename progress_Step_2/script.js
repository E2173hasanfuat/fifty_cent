const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
//  birden fazla oldugu icinn query all kullanioruz

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  //   console.log(currentActive);
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  // tasmasin diye
  //   console.log(currentActive);
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, indx) => {
    if (indx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  //   hepsine tiklayinca tum circle larin class
  //   lari activ oldu ve oyle ce Kaldigindan:
  const actives = document.querySelectorAll(".active");

  //   console.log(circles.length);

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  // console.log(actives.length - 1);
  // console.log(circles.length - 1);
  // console.log((actives.length - 1) / (circles.length - 1));

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
