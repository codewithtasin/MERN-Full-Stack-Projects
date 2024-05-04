import { makeUrl, useParams } from "./commonFunc.js";

const addNewSlider = document.getElementById("add-new-slider");
addNewSlider.addEventListener("submit", function (e) {
  e.preventDefault();
  const { productId } = useParams();
  const img = e.target.img.value;

  const data = {
    productId,
    img,
  };

  function loadNewSlider() {
    const url = makeUrl("/dashboard-add-new-slider");

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.acknowledged) {
          alert("Slider Added Successfully!");
          window.location.href =
            "http://127.0.0.1:5500/html/dashboard-sliders.html";
        }
      });
  }
  loadNewSlider();
});
