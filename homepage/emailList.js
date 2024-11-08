function emailList(){
    emailInput = document.getElementById("emailFooterInput").value;
    checkEmail(emailInput);
}

//If input has @ then shows valid html if not then 
function checkEmail(emailInput){
    if(emailInput.includes("@"))
        document.getElementById("validEmailBox").style.display = "flex";
        
    else
        document.getElementById("invalidEmailBox").style.display = "flex";
}

function closePopUp(){
    document.getElementById("validEmailBox").style.display = "none";
    document.getElementById("invalidEmailBox").style.display = "none";
}

