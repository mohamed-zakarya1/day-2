var lists = document.querySelectorAll("nav ul li a");
var sliderItem = document.querySelector(".sliderItem");
lists.forEach((items, index) => {
  items.onclick = function () {
    sliderItem.style.transform = `translate(${-100 * index}vw)`
  }
})