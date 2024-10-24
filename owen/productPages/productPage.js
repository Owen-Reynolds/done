//Clothing Image Change on Hover

// Variable for the Image
let image = document.getElementById("elementImage");

// Event Listener that changes image source when hovered over by mouse
image.addEventListener('mouseover', function(){
    image.src = "/owen/images/doneStarsOrangeBack.jpeg";
});
// Event Listeneter that change the image back after the mouse leaves
image.addEventListener('mouseout', function(){
    image.src = "/owen/images/doneStarsOrange.jpeg";
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
    choosenSize = document.getElementById(size).classList.add('selected');
}


//Function to adds item 
function addItem(){
    //Set the product Name
    let name = document.getElementById('productName').innerText;
    // Set the product Size
    let size = document.querySelector('.sizeButtons button.selected').innerText;
    // Set the product Price
    let price = document.querySelector('.price h1').innerText;

    localStorage.setItem('name', name);
    localStorage.setItem('price', price);
    localStorage.setItem('size', size);
}




