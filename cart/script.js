let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add item to cart
function addItem(name, price, size) {
    const item = { name, size, price, quantity: 1 };
    const existingItem = cart.find(i => i.name === name && i.size === size);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push(item);
    }
    updateLocalStorage();
}

// Function to remove item from cart
function removeItem(name, size) {
    cart = cart.filter(item => !(item.name === name && item.size === size));
    updateLocalStorage();
    renderCart();
}

// Function to clear the cart
function clearCart() {
    cart = [];
    updateLocalStorage();
    renderCart();
}

// Function to update local storage and render the cart
function updateLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Function to render the cart
function renderCart() {
    const tbody = document.getElementById('cart-body');
    tbody.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.name}</td>
            <td>${item.size}</td>
            <td><input type="number" value="${item.quantity}" min="1" onchange="updateQuantity('${item.name}', '${item.size}', this.value)"></td>
            <td>$${item.price.toFixed(2)}</td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
            <td><button onclick="removeItem('${item.name}', '${item.size}')">Remove</button></td>
        `;
        tbody.appendChild(tr);
        total += item.price * item.quantity;
    });

    document.getElementById('total-amount').innerText = total.toFixed(2);
}

// Function to update quantity in cart
function updateQuantity(name, size, quantity) {
    const item = cart.find(i => i.name === name && i.size === size);
    if (item) {
        item.quantity = parseInt(quantity);
        updateLocalStorage();
    }
}

// Render cart on cart page load
if (document.getElementById('cart-body')) {
    renderCart();
}