import { makeUrl, useParams } from "./commonFunc.js";

const addNewProduct = document.getElementById("add-new-product");
addNewProduct.addEventListener("submit", function (e) {
  e.preventDefault();
  const { productId } = useParams();
  const title = e.target.title.value;
  const price = e.target.price.value;
  const img = e.target.img.value;
  const des = e.target.des.value;

  const data = {
    productId,
    title,
    price,
    img,
    des,
  };

  function loadNewProduct() {
    const url = makeUrl("/dashboard-add-new-product");

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
          alert("Product Added Successfully!");
          window.location.href =
            "http://127.0.0.1:5500/html/dashboard-add-new-product.html";
        }
      });
  }
  loadNewProduct();
});
