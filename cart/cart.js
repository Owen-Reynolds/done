function renderCart() {
    //Creates the cart and assigns to the local storage cart array or and empty array
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    //Assigns place where cart would be displayed
    const tbody = document.getElementById('cart-body');
    tbody.innerHTML = '';
    let totalAmount = 0;

    //If cart has no items then say cart is empty
    if (cart.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="5">Your cart is empty</td>`;
        tbody.appendChild(row);
    } else {
        //If not empty, use forEach to loop through the cart array by each item
        cart.forEach(item => {
            //Change price to a float and get rid of $ to be able to find total
            const itemPrice = parseFloat(item.price.replace('$', ''));
            // Create a new row to place the item details
            const row = document.createElement('tr');
            // HTML the row will contain
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.size}</td>
                <td>${item.quantity}</td>
                <td>$${itemPrice.toFixed(2)}</td> 
                <td>$${(itemPrice * item.quantity).toFixed(2)}</td> 
            `;
            // Add this row to the body of the table
            tbody.appendChild(row);
            // Calculate the total amount
            totalAmount += itemPrice * item.quantity * 1.07;
        });
    }

    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
}

document.addEventListener('DOMContentLoaded', renderCart);


function clearCart(){
    localStorage.clear();
    cart = [];
    window.renderCart();
}