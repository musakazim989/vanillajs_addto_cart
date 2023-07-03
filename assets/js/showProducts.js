import products from "./product.js"
const cards = document.querySelector(".cards")

let myProduct = () => {
  products.map((item, key) => {
    console.log(item)
    let cardsDiv = document.createElement("div")
    cardsDiv.innerHTML = `
    <div class="card me-4" style="width: 18rem">
    <img src='../../assets/images/${item.image}' class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">
            ${item.description}
          </p>
          <h5 class="card-title">
            Price: <span>$${item.price}</span>
          </h5>

          <button class="btn btn-primary">Add to Cart</button>
          <button class="btn btn-primary" disabled>
            Added
          </button>
        </div>
      </div>
      `
    cards.appendChild(cardsDiv)
  })
}
myProduct()
