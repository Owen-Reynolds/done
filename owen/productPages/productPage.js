let productHolder = JSON.parse(localStorage.getItem('productHolder')) || [];

let frontImage = productHolder[0].frontImage;
let backImage = productHolder[0].backImage;
let productText = productHolder[0].text;
let productPrice = productHolder[0].price;
//Clothing Image Change on Hover    

// Variable for the Image
let image = document.getElementById("elementImage");
let text = document.getElementById("productName");
let pricing = document.getElementById("productPrice");

image.src = frontImage;
text.innerHTML = productText;
pricing.innerHTML = productPrice;

// Event Listener that changes image source when hovered over by mouse
image.addEventListener('mouseover', function(){
    image.src = backImage;
});
// Event Listeneter that change the image back after the mouse leaves
image.addEventListener('mouseout', function(){
    image.src = frontImage;
});




//Display which size is selected

//Calls selectSize Function and selects a button on load
window.onload = function(){
    selectSize('small');
}

//Function that is passed the size id of the button
function selectSize(size){
    // Buttons is assigned to all of the buttons under .sizebuttons class
    let buttons = document.querySelectorAll('.sizeButtons button');
    // Loop through each button and remove any of them from being selected
    buttons.forEach(function(button){
        button.classList.remove('selected');
    })
    // Since no buttons are selected anymore, selects the button that was clicked
    document.getElementById(size).classList.add('selected');

    window.chosenSize = size;
}



function showAlert(){
    document.getElementById('alert').style.display = "flex";
}

function closeAlert(){
    document.getElementById('alert').style.display = "none";
}

//Create functions that adds the item to the cart array that holds objects and add that cart to the localStorage

function addtoCart(){
    let name = document.getElementById('productName').textContent;
    let price = document.getElementById('productPrice').textContent;

    if(!window.chosenSize){
        alert("Please select a size");
        return;
    }

    let cart = JSON.parse(localStorage.getItem('cart'))|| [];
    let exisitingItem = cart.find(item => item.name === name && item.size === window.chosenSize);

    if(exisitingItem){
        exisitingItem.quantity++;
    }
    else{
        cart.push({name, price, size: window.chosenSize, quantity:1});
    }   

    localStorage.setItem('cart', JSON.stringify(cart));
    showAlert();
}


