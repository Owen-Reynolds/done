function emailList(){
    emailInput = document.getElementById("emailFooterInput").value;
    checkEmail(emailInput);
}

//If input has @ then shows valid html if not then 
function checkEmail(emailInput){
    if(emailInput.includes("@"))
        emailJoin('Valid');
    else
        emailJoin('Invalid');
}

//Checks if 
function emailJoin(check){
    if(check == 'Valid'){
        document.getElementById("validEmailBox").style.display = "flex";
    }
    else{
        document.getElementById("invalidEmailBox").style.display = "flex";
    }
}

function closeEmail(){
    document.getElementById("").style.display = "none";
}

function closePopUp(){
    document.getElementById("validEmailBox").style.display = "none";
    document.getElementById("invalidEmailBox").style.display = "none";
}