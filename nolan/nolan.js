
// Function pass the string of the url
function selectImage(frontImageUrl, backImageUrl, itemText, itemPrice){
    // Set image holder to either the saved imageHolder or an empty array
    let productHolder = [];
    // Push the imageURL under the image label
    productHolder.push({frontImage: frontImageUrl, backImage: backImageUrl, text: itemText, price: itemPrice});
    // Set it inside of the imageHolder Key
    localStorage.setItem('productHolder', JSON.stringify(productHolder));
}

