let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.getElementById("cartContainer");

function updateCartDisplay() {
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  // Show item count
  const itemCount = document.createElement("p");
  itemCount.className = "item-count";
  itemCount.textContent = `Total Items: ${cart.length}`;
  cartContainer.appendChild(itemCount);

  // Show each item
  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img  src="${item.img}" alt="${item.title}" width="100" >
      <h3 class="TitleShoppingCart" >${item.title}</h3>
      <p id="ItemShoppingCartDescription">${item.Description}</p>
      <p id="ItemShoppingCartDescription">Price: $${item.price}</p>
      <button class="remove-btn" data-index="${index}">Remove</button>
    `;
    cartContainer.appendChild(div);
  });

  // Add checkout button
 
  // Remove item event
  document.querySelectorAll(".remove-btn").forEach(button => {
    button.addEventListener("click", (e) => {
      const indexToRemove = e.target.getAttribute("data-index");
      cart.splice(indexToRemove, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartDisplay();
    });
  });
}

updateCartDisplay();
