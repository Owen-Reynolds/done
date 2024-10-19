let image = document.getElementById("elementImage");

image.addEventListener('mouseover', () => {
    image.src = "/owen/images/doneStarsOrangeBack.jpeg";
});

image.addEventListener('mouseout', () =>{
    image.src = "/owen/images/doneStarsOrange.jpeg";
});
