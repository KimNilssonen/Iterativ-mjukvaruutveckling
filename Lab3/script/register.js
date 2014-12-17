"use strict";

window.onload = function(){

    var username = document.getElementById("username");
    var mail = document.getElementById("mail");
    var password = document.getElementById("password");
    var passwordConfirm = document.getElementById("passwordConfirm");
    var submit = document.getElementById("submit");
        
    submit.onclick = function(e){
        e.preventDefault();
        confirm();
    };
    
    var confirm = function(){
        if(username !== "" && mail.value !== ""){
            
            if(password.value !== "" && passwordConfirm.value !== ""){
                if (password.value === passwordConfirm.value){
                    alert("Ett mail har skickas till: " + mail.value);
                    
                }
            }
            else
            {
                alert("Du har inte skrivit ett lösenord, eller så matchar det inte.");
            }
        }
        else{
            alert("Skriv något!");
        }
    
    };
};
