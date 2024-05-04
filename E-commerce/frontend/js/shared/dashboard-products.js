import { makeUrl } from "./commonFunc.js";

function loadProducts() {
  const url = makeUrl("/dashboard-products");
  fetch(url)
    .then((res) => res.json())
    .then((res) => printProducts(res));
}

function printProducts(products) {
  const root = document.getElementById("root");
  products.forEach((product, index) => {
    const { productId, price, title, img } = product;

    const htmlCode = `
        <tr>
            <td>${index + 1}</td>
            <td>${productId}</td>
            <td>${title}</td>
            <td>৳${price}</td>
            <td><img style="width: 80px" src="${img}" alt=""></td>
        </tr>`;
    console.log(htmlCode);
    root.innerHTML += htmlCode;
  });
}
loadProducts();
