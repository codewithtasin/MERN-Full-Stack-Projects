import productCard from "./shared/productCard.js";
import { makeUrl } from "./shared/commonFunc.js";

function loadProduct() {
  const url = makeUrl("/latest-products");

  fetch(url)
    .then((res) => res.json())
    .then((res) => printData(res));
}

loadProduct();

function printData(products) {
  const productContainer = document.getElementById("products-container");

  let htmlCode = "";
  products.forEach((product) => {
    htmlCode += productCard(product);
  });
  productContainer.innerHTML = htmlCode;
}
