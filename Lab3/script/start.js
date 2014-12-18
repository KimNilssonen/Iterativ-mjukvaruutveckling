"use strict";

var Program = {
    
    // Hämtar det korrekta användarnamnet och lösenordet.
    admin : main.username,
    password : main.password,
    
    // Skapar två nya variabler som innehåller rätt lösenord och användarnamn. Detta för att jämföra med det korrekta och få positivt utfall i testningen.
    inputName : "admin",
    inputPass : "password",
    
    // Skapar två nya variabler som innehåller fel lösenord och användarnamn. Detta för att jämföra med det korrekta och få negativt utfall i testningen.
    wrongInputName : "10292",
    wrongInputPass : "qscwdvefv",
    

    
    test: function(){
        
        // Hämtar en div tagg, samt skapar en p tagg.
        var content = document.getElementById("content");
        var p = document.createElement("p");
    
        // Sätter p taggen inuti div taggen.
        content.appendChild(p); 
        
        // Hämtar knappen för att gå vidare, samt sätter ett klick på knappen för att ta oss vidare.
        var go = document.getElementById("go");
        go.onclick = function(e){
            
            window.location = "main.html";
        };
            
        // Testar och presenterar testerna.
        // setTimeout funktionerna har jag bara för presentationssyfte.
        
        // Positivt utfall.
        if (Program.admin === Program.inputName){
            
            p.innerHTML += "Stämmer det inmatade användarnamnet överens med det sparade? - ";
            setTimeout(function() {
                p.innerHTML += "JA! <br><br>";
            }, 1000);
        }
        
        // Positivt utfall.
         if (Program.password === Program.inputPass){
            setTimeout(function() {
                 p.innerHTML += "Stämmer det inmatade lösenordet överens med det sparade? - ";
            }, 2000);
           setTimeout(function() {
                p.innerHTML += "JA! <br><br>";
            }, 3000);
        }
        
        // Negativt utfall.
        if (Program.admin !== Program.wrongInputName)
        {
            setTimeout(function() {
                p.innerHTML += "Stämmer " + Program.wrongInputName + " överens med det sparade användarnamnet? - ";
            }, 4000);
            setTimeout(function() {
                p.innerHTML += "NEJ! <br><br>";
            }, 6000);
             
        }
        
       
       // Negativt utfall. 
        if (Program.password !== Program.wrongInputPass){
            setTimeout(function() {
                p.innerHTML += "Stämmer " + Program.wrongInputPass + " överens med det sparade lösendordet? - ";
            }, 6000);
            setTimeout(function() {
                p.innerHTML += "NEJ! <br><br>";
            }, 7000);
        }
    

      
    }
};


window.onload = Program.test();
  