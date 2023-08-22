window.onload = function () {
  const menu_btn = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");
  const navItem = document.querySelectorAll(".nav__link");
  const navBtn = document.querySelector(".nav__btn");
  const number = document.querySelectorAll(".number");
  const advantages = document.querySelector(".advantages");

  toggleAndRemoveIsActive = () => {
    menu_btn.classList.toggle("is-active");
    nav.classList.remove("is-active");
  };

  for (let i = 0; i < navItem.length; i++) {
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

  const speed = 175;
  function counter() {
    number.forEach((element) => {
      incNumber(element);
    });
    function incNumber(elem) {
      let text = +elem.innerText;
      const value = +elem.getAttribute("data-count");
      const inc = Math.ceil(value / speed);
      if (text < value) {
        elem.innerText = inc + text;
        setTimeout(() => {
          incNumber(elem);
        }, 20);
      } else {
        elem.innerText = value;
      }
    }
  }

  function obCallback(payload) {
    if (payload[0].intersectionRatio > 0.5035) {
      counter();
    }
  }
  const ob = new IntersectionObserver(obCallback, {
    threshold: [0, 0.5, 1],
  });
  ob.observe(advantages);
};
