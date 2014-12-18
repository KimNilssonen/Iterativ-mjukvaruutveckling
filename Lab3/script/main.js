"use strict";

var main = {
    
    // Hämtar ut element ur html koden.
    name : document.getElementById("uNameInput"),
    pass : document.getElementById("uPassInput"),

    // Dessa variabler kan man tänka sig kan komma från en databas där någon tidigare registrerat detta namn och lösenord.
    username : "admin",
    password : "password",

    // init function som körs när fönstret laddas.
    init: function(){
        console.log("Loaded!");
        
        var submit = document.getElementById("submit");
        var reg = document.getElementById("reg");
        
        // Klivk funktioner. En för att logga in...
        submit.onclick = function(e){
            console.log("Clicked worked!");
            e.preventDefault();
            main.test(main.username, main.password);
        };
        // ...och en för att komma till en registreringssida.
        reg.onclick = function(e){
            console.log("Clicked worked!");
            e.preventDefault();
            window.location = "register.html";
        };
    },


    // I denna klassen jämförs det inskriva användarnamnet och lösenordet med det sparade användarnamnet och lösenordet.
    // På så sätt kan man testa om inmatningen är riktig.
    test: function(name, pass){
        var username = name;
        var password = pass;
        
        // Är inmatningen rätt så skickas man till en annan sida.
        if(main.name.value === username && main.pass.value === password){
            window.location = "loggedIn.html";
            
        }
        
        // Är inmatningen fel visas ett meddelande.
        else{
            alert("Fel användarnamn eller lösenord!");
        }
    },

};
window.onload = main.init;
