import { makeUrl } from "./commonFunc.js";

const root = document.getElementById("root");
function loadSliders() {
  const url = makeUrl("/dashboard-sliders");

  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      const sliders = res;
      sliders.forEach((slider, index) => {
        const { img } = slider;
        const htmlCode = `
    <tr>
        <td>${index + 1}</td>
        <td><img style="width: 100px" src="${img}" alt=""></td>
        <td><button class="btn">Delete</button></td>
    </tr>
    `;
        root.innerHTML += htmlCode;
      });
    });
}
loadSliders();
