import { makeUrl } from "./commonFunc.js";
import productCard from "./productCard.js";
import loading from "./loading.js";

const div = document.getElementById("our-products-container");

function loadProduct() {
  div.innerHTML = loading;
  const url = makeUrl("/all-products");

  fetch(url)
    .then((res) => res.json())
    .then((res) => printData(res));
}

function printData(products) {
  let htmlCode = "";

  products.forEach((product) => {
    const code = productCard(product);
    htmlCode += code;

    div.innerHTML = htmlCode;
  });
}
loadProduct();
