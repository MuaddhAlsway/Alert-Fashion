  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cartContainer");
  const cardDetails = document.querySelector(".CardDetials");

  function updateCartDisplay() {
    cartContainer.innerHTML = "";

    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty.</p>";
      updateTotalInCardDetails(); // still show $0
      return;
    }

    // Show total item count
    const itemCount = document.createElement("p");
    itemCount.className = "item-count";
    itemCount.textContent = `Total Items: ${cart.length}`;
    cartContainer.appendChild(itemCount);

    // Show all items
    cart.forEach((item, index) => {
      const div = document.createElement("div");
      div.className = "CheckOutItem";
      div.innerHTML = `
        <img src="${item.img}" alt="${item.title}" width="100">
        <h3 class="TitleCheckOutItem">${item.title}</h3>
        <p id="ItemCheckOutItemDescription">${item.Description}</p>
        <p id="ItemCheckOutItemDescription">Price: $${item.price}</p>
        <button class="remove-btn" data-index="${index}">Remove</button>
      `;
      cartContainer.appendChild(div);
    });

    // Checkout button
  
    // Remove button listeners
    document.querySelectorAll(".remove-btn").forEach(button => {
      button.addEventListener("click", (e) => {
        const indexToRemove = e.target.getAttribute("data-index");
        cart.splice(indexToRemove, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartDisplay();
      });
    });

    // Update total price
    updateTotalInCardDetails();
  }

  function updateTotalInCardDetails() {
    // Remove old total if it exists
    const oldTotal = document.querySelector(".total-price-display");
    if (oldTotal) oldTotal.remove();

    // Calculate total price
    const totalPrice = cart.reduce((total, item) => total + Number(item.price), 0);

    // Create new total price element
    const totalPriceElement = document.createElement("div");
    totalPriceElement.className = "total-price-display";
    totalPriceElement.innerHTML = `<h4>Total: $${totalPrice.toFixed(2)}</h4>`;

    // Add to CardDetials
    cardDetails.appendChild(totalPriceElement);
  }

  updateCartDisplay();