const images = document.querySelectorAll(".image img");
let count = 0;

function showNextImage() {
  images[count].classList.remove("active");
  count = (count + 1) % images.length;
  images[count].classList.add("active");
}

setInterval(showNextImage, 3000);