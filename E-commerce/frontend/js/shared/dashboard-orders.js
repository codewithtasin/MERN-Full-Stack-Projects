import { makeUrl } from "./commonFunc.js";
function loadOrders() {
  const url = makeUrl("/dashboard-orders");

  fetch(url)
    .then((res) => res.json())
    .then((res) => printOrders(res));
}

function printOrders(orders) {
  orders.forEach((order, index) => {
    const {productId, name, email, phone, date } = order;

    const code = `
            <tr>
                <td>${index+1}</td>
                <td>${productId}</td>
                <td>${date}</td>
                <td>${name}</td>
                <td>${phone}</td>
                <td>${email}</td>
            </tr>`;

    const root = document.getElementById("root");
    root.innerHTML += code;
  });
}
loadOrders();
