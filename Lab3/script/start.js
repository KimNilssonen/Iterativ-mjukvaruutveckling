"use strict";

var Program = {
    
    admin : main.username,
    password : main.password,
    
    inputName : "admin",
    inputPass : "password",
    
    wrongInputName : "10292",
    wrongInputPass : "qscwdvefv",
    

    
    test: function(){
        
        var content = document.getElementById("content");
        var p = document.createElement("p");
    
        content.appendChild(p); 
        
        var go = document.getElementById("go");
        go.onclick = function(e){
            
            window.location = "main.html";
        };
            
        // Testar och presenterar testerna.
        if (Program.admin === Program.inputName){
            
            p.innerHTML += "Stämmer det inmatade användarnamnet överens med det sparade? - ";
            setTimeout(function() {
                p.innerHTML += "JA! <br><br>";
            }, 1000);
        }
        
        if (Program.admin !== Program.wrongInputName)
        {
            setTimeout(function() {
                p.innerHTML += "Stämmer " + Program.wrongInputName + " överens med det sparade användarnamnet? - ";
            }, 2000);
            setTimeout(function() {
                p.innerHTML += "NEJ! <br><br>";
            }, 3000);
             
        }
        
        if (Program.password === Program.inputPass){
            setTimeout(function() {
                 p.innerHTML += "Stämmer det inmatade lösenordet överens med det sparade? - ";
            }, 4000);
           setTimeout(function() {
                p.innerHTML += "JA! <br><br>";
            }, 5000);
        }
        
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
  