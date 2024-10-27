// Gets the passed cart and updates

function renderCart(){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let tbody = document.getElementById('cart-body');
    tbody.innerHTML = ``;
    let totalAmount = 0;

    cart.forEach(item =>{
        let row = document.createElement('tr');
        row.innerHTML =`
        <td>${item.name}</td>
        <td>${item.size}</td>

        <td>$${item.price.toFixed(2)}</td>
        <td>$${(item.price * item.quantity).toFixed(2)}</td>
        `
        tbody.appendChild(row);
        totalAmount += item.price * item.quantity;
    });
    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
}

document.addEventListener('DOMContentLoaded', renderCart);