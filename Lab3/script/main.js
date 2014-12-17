"use strict";

var main = {
    
    // Hämtar ut element ur html koden.
    name : document.getElementById("uNameInput"),
    pass : document.getElementById("uPassInput"),
    submit : document.getElementById("submit"),
    

    // init function som körs när fönstret laddas.
    init: function(){
        console.log("Loaded!");
        main.submit.onclick = function(e){
            console.log("Clicked worked!");
            e.preventDefault();
            main.person();
        };
    },
    
    // När man klickar på logga in skickas man till denna klassen där 2 variabler skapas. En som innehåller användarnamn och en som innehåller lösenord.
    // Dessa variabler kan man tänka sig kan komma från en databas där någon tidigare registrerat detta namn och lösenord.
    person: function(){
        var username = "admin";
        var password = "password";
        main.test(username, password);
    },
    
    // I denna klassen utförs själva testet. Genom att jämföra det inskriva användarnamnet och lösenordet med det sparade användarnamnet och lösenordet
    // ... kan man testa om inloggningen är riktig.
    test: function(name, pass){
        var username = name;
        var password = pass;
        
        // Är inloggningen rätt så skickas man till en annan sida.
        if(main.name.value === username && main.pass.value === password){
            window.location = "loggedIn.html";
            
        }
        
        // Är inloggningen fel visas ett meddelande.
        else{
            alert("Fel användarnamn eller lösenord!");
        }
    },
    
   
};
window.onload = main.init;
