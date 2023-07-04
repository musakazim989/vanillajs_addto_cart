import products from "./product.js"
const cards = document.querySelector(".cards")

const cartData = []
let count = 1

let myProduct = () => {
  products.map((item, key) => {
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

          <button onclick="addToCart(${item.id})" class="btn btn-primary btn-1">Add to Cart</button>
                 
        </div>
      </div>
      `
    cards.appendChild(cardsDiv)
  })
}
myProduct()

const addToCart = (i) => {
  const cartList = document.querySelector(".cart-list")
  products.map((item, key) => {
    if (item.id == i) {
      cartData.push(item)
    }
  })

  cartData.map((item, key) => {
    let pillAdd = document.querySelector(".pil-badge")
    let list = document.createElement("tr")
    list.innerHTML = `<th scope="row">${key + 1}</th>
                        <td>${item.title}</td>
                        <td>
                          <div
                            class="d-flex justify-content-center align-items-center"
                          >
                          <span>$${item.price}</span>
                            <a class="btn-count" onclick="increMent( )" style="margin-right: 10px">
                              <i class="fa-solid fa-plus btn-icon"></i>
                            </a>

                            <span style="margin-right: 10px">${count}</span>
                            <a class="btn-count" style="margin-right: 10px" onclick="decrement( )">
                              <i class="fa-solid fa-minus btn-icon"></i>
                            </a>
                          </div>
                        </td>
                        <td>
                          <i class="fa-sharp fa-solid fa-trash text-dark"></i>
                        </td>
                        `
    cartList.appendChild(list)

    pillAdd.innerHTML = cartData.length
  })
}
window.addToCart = addToCart

const increMent = () => {
  count + 1
  totalAmount()
}

window.increMent = increMent
const decrement = () => {
  count - 1
  totalAmount()
}

window.decrement = decrement

const totalAmount = () => {
  const mytotal = document.querySelector(".total")
  let total = 0
  cartData.map((item, key) => {
    total += item.price
    let subtotal = total * count
    mytotal.innerHTML = subtotal
  })
}

const clear = () => {
  const cartList = document.querySelector(".cart-list")
  cartData = ""
  cartList.innerHTML = ""
}
