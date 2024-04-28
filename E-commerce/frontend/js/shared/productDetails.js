import { makeUrl, useParams } from "./commonFunc.js";
import loading from "./loading.js";

const root = document.getElementById("root");

function loadData() {
  root.innerHTML = loading;
  const { id } = useParams();
  const url = makeUrl(`/get-one-product/${id}`);
  fetch(url)
    .then((res) => res.json())
    .then((res) => printData(res));
}

function printData(product) {
  const { img, productId, title, price, des } = product;
  const htmlCode = `
        <div class="product">
            <img src="${img}" alt="">
            <h4>Product Id: ${productId}</h4>
            <h2>Price: ৳${price}</h2>
            <h4>${title}</h4>
            <p>${des}</p>

            <a href="placeOrderForm.html?productId=${productId}">
                <button class="btn">Buy Now</button>
            </a>
         </div>
    `;
  root.innerHTML = htmlCode;
}
loadData();
