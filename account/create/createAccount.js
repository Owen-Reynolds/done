function createAccount(){
    let email = document.getElementById('emailInput').value;
    let password = document.getElementById('passwordInput').value;

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(emailPattern.test(email)){
        alert(email)
    }
    else{
        alert("This is not a valid email");
    }
}