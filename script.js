window.onload = function () {
  const menu_btn = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");
  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    nav.classList.toggle("is-active");
  });
};

// WORKING ON SCROLL, HAVE TO ADD ANIMATION
// const element = window;
// const output = document.querySelector('p.output');

// element.addEventListener("scroll", (event) => {
//   output.innerHTML = "scroll event fired!";
//   setTimeout(() => {
//     output.innerHTML = "Waiting on scroll events...";
//   }, 1000);
// });
