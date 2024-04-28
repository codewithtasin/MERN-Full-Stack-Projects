import { sliceTitle } from "./commonFunc.js";
function productCard(product) {
  const { img, title, price, _id } = product;
  const htmlCode = `
    <div class="products-card">
          <img src="${img}" alt="">
          <h4>${sliceTitle(title)}</h4>
          <h4>৳${price}</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit....
          </p>
          <a href="http://127.0.0.1:5500/html/product-details.html?id=${_id}"><button>View Details</button></a>
    </div>
    `;

  return htmlCode;
}

export default productCard;
