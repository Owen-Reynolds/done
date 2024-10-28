
// Function pass the string of the url
function selectImage(frontImageUrl, backImageUrl, itemText){
    // Set image holder to either the saved imageHolder or an empty array
    let productHolder = JSON.parse(localStorage.getItem('productHolder')) || [];
    // Push the imageURL under the image label
    productHolder.push({frontImage: frontImageUrl, backImage: backImageUrl, text: itemText});
    // Set it inside of the imageHolder Key
    localStorage.setItem('productHolder', JSON.stringify(productHolder));
}

