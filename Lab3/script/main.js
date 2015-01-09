"use strict";

var Main = function(username, password) {
    
    // Hämtar ut element ur html koden.
    var nameInput = document.getElementById("uNameInput");
    var passInput = document.getElementById("uPassInput");

    // Dessa variabler kan man tänka sig kan komma från en databas där någon tidigare registrerat detta namn och lösenord.
    var correctUsername = "admin";
    var correctPassword = "password";
    var falseUsername = "admon";
    var falsePassowrd = "pass123";
    
    
    
        var submit = document.getElementById("submit");
        var reg = document.getElementById("reg");
        
        // Klick funktioner. En för att logga in...
        submit.onclick = function(e){
            console.log("Clicked worked!");
            e.preventDefault();
            test(nameInput.value, passInput.value);
        };
        
        // ...och en för att komma till en registreringssida.
        reg.onclick = function(e){
            console.log("Clicked worked!");
            e.preventDefault();
            window.location = "register.html";
        };

    new TestLogin(correctUsername, correctPassword, falseUsername, falsePassowrd);
    

    
    // I denna klassen jämförs det inskriva användarnamnet och lösenordet med det sparade användarnamnet och lösenordet.
    // På så sätt kan man testa om inmatningen är riktig.
    var test = function(name, pass){
        
        var username = name;
        var password = pass;
        
        // Är inmatningen rätt så skickas man till en annan sida.
        if(username === correctUsername && password === correctPassword){
            window.location = "loggedIn.html";
        }
        
        // Är inmatningen fel visas ett meddelande.
        else{
            alert("Fel användarnamn eller lösenord!");
        }
    };

};

window.onload = function(){
    Main();
};
