// trys to retrieve cart from localStorage, if found then paresed back to a js array from json.
// if not found then creates an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

let name = localStorage.getItem('name');
let size = localStorage.getItem('size');
let price = localStorage.getItem('price');

function addItem(){
    const item = {name, size, price, quantity:1};
    const existingItem = cart.find(i => i.name === name && i.size === size);

    if(existingItem){
        existingItem.quantity++;
    }
    else{
        cart.push(item);
    }
    updateLocalStorage();
    console.log(name,size,price);
}

function removeItem(name, size){
    cart = cart.filter(item => !(item.name === name && item.size === size));
    updateLocalStorage();
    renderCart();
}

function clearCart(){
    cart = [];
    updateLocalStorage();
    renderCart();
}

function updateLocalStorage(){
    // stores the updated cart array into the localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function renderCart(){
    const tbody = document.getElementById('cart-body');
    tbody.innerHTML= '';
    let total = 0;

    cart.array.forEach(item=> {
        const tr = document.createElement('tr');
        tr.innerHTML =`
            <td>${item.name}</td>
            <td>${item.size}</td>
            <td><input type="number" value="${item.quantity}" min="1" onchange="updateQuantity('${item.name}', '${item.size}', this.value)"></td>
            <td>$${item.price.toFixed(2)}</td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
            <td><button onclick="removeItem('${item.name}', '${item.size}')">Remove</button></td>
        `
        tbody.appendChild(tr);
        total += item.price * item.quantity;
    });
    document.getElementById('total-amount').innerText = total.toFixed(2);
}

if (document.getElementById('cart-body')) {
    renderCart();
}