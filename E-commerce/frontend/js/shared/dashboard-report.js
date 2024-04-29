import { makeUrl } from "./commonFunc.js";
import loading from "./loading.js";

function loadReport() {
  const url = makeUrl("/dashboard-report");

  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      const { todaysOrder, totalProducts, totalOrders, totalSliders } = res;
      document.getElementById("todaysOrder").innerHTML = todaysOrder;
      document.getElementById("totalProducts").innerHTML = totalProducts;
      document.getElementById("totalOrders").innerHTML = totalOrders;
      document.getElementById("totalSliders").innerHTML = totalSliders;
    });
}
loadReport();
