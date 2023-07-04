import products from "./product.js"
const cards = document.querySelector(".cards")

const addToCart = (id) => {
  console.log(id)
}

let myProduct = () => {
  products.map((item, key) => {
    let cardsDiv = document.createElement("div")
    cardsDiv.innerHTML = `
    <div class="card me-4" style="width: 18rem">
    <img src='../../assets/images/${
      item.image
    }' class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">
            ${item.description}
          </p>
          <h5 class="card-title">
            Price: <span>$${item.price}</span>
          </h5>

          <button onclick="addToCart(${
            (item.id, item.key)
          })" class="btn btn-primary">Add to Cart</button>
         
        </div>
      </div>
      `
    cards.appendChild(cardsDiv)
  })
}
myProduct()
