const buttons = document.querySelectorAll('.btn-language');
const accordions = document.querySelectorAll(".accordion");
const burger = document.querySelector(".burger");

//language btn active
buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active__language'));
    button.classList.add('active__language');
  });
});

//accordions
accordions.forEach((item) => {
  item.addEventListener("click", function () {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
      } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
      }
  });
});

//burger add class for open
burger.addEventListener('click', function() {
  document.body.classList.toggle("open")
  burger.classList.toggle("menu-opened");
})