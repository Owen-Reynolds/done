// Gets the passed cart and updates

localStorage.clear();

function renderCart(){
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const tbody = document.getElementById('cart-body');
    tbody.innerHTML = ``;
    const totalAmount = 0;

    cart.forEach(item =>{
        const row = document.createElement('tr');
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