
// Function pass the string of the url
function selectImage(frontImageUrl, backImageUrl, itemText, itemPrice){
    // Set image holder to either the saved imageHolder or an empty array
    let productHolder = [];
    // Push the imageURL under the image label
    productHolder.push({frontImage: frontImageUrl, backImage: backImageUrl, text: itemText, price: itemPrice});
    // Set it inside of the imageHolder Key
    localStorage.setItem('productHolder', JSON.stringify(productHolder));
}

function emailList(){
    emailInput = document.getElementById("emailFooterInput").value;
    checkEmail(emailInput);
}

//If input has @ then shows valid html if not then 
function checkEmail(emailInput){

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(emailPattern.test(emailInput))
        document.getElementById("validEmailBox").style.display = "flex";
        
    else
        document.getElementById("invalidEmailBox").style.display = "flex";
}

function closePopUp(){
    document.getElementById("validEmailBox").style.display = "none";
    document.getElementById("invalidEmailBox").style.display = "none";

}