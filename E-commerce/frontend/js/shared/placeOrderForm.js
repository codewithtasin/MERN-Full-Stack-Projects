import { makeUrl, useParams } from "./commonFunc.js";
import loading from "./loading.js";

const order = document.getElementById("placeOrderForm");

order.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const phone = e.target.phone.value;
  const { productId } = useParams();
  const date = new Date();
  const today = date.toLocaleDateString();
  const data = {
    name,
    email,
    phone,
    productId,
    date: today,
  };
  order.innerHTML = loading;
  const url = makeUrl("/insert-new-order");
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
        alert("Order Placed Successfully");
        window.location.href = "http://127.0.0.1:5500/html/index.html";
      }
    });
});
