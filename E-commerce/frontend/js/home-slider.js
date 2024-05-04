import { makeUrl } from "./shared/commonFunc.js";
import loading from "./shared/loading.js";

const sliderContainer = document.getElementById("slider-container");

function loadSliders() {
  sliderContainer.innerHTML = loading;
  const url = makeUrl("/sliders");

  fetch(url)
    .then((res) => res.json())
    .then((images) => {
      let index = 0;

      function changeImages() {
        const container = document.getElementById("slider-container");
        const htmlCode = `<img src="${images[index].img}"/>`;
        container.innerHTML = htmlCode;

        if (index < images.length - 1) {
          index++;
        } else {
          index = 0;
        }
      }

      setInterval(changeImages, 4000);
    });
}

loadSliders();

