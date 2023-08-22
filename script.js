window.onload = function () {
  const menu_btn = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");
  const navItem = document.querySelectorAll(".nav__link");
  const navBtn = document.querySelector(".nav__btn");

  toggleAndRemoveIsActive = () => {
    menu_btn.classList.toggle("is-active");
    nav.classList.remove("is-active");
  }


  for(let i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener("click", function () {
     toggleAndRemoveIsActive();
    });
  }

  navBtn.addEventListener("click", function () {
    toggleAndRemoveIsActive();
  });

  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    nav.classList.toggle("is-active");
  });

  const number = document.querySelectorAll(".advantages__item__number");
  const speed = 5000;
  function counter() {
    number.forEach(element => {
      incNumber(element);
    });
    function incNumber(elem) {
      let text = +elem.innerText;
      const value = +elem.getAttribute("data-target");
      const inc = Math.ceil(value / speed / 2);
      if(text < value) {
        elem.innerText = inc + text;
        setTimeout(() => {
          incNumber(elem);
        }, 20);
      } else {
        elem.style.marginLeft = "0.5em";
        elem.innerText = value + "+";
      }
    }
}

// counter();


  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}


const box = document.querySelector('.advantages');
const message = document.querySelector('#message');

document.addEventListener('scroll', function () {
    if(isInViewport(box)) {
      counter();
    }

}, {
    passive: true
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
