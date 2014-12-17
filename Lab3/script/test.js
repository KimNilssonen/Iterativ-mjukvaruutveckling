"use strict";

function Test(){
    console.log("U are in Test()");
}


Test.prototype.run = function(){
    
    console.log("U are in Test.prototype.run()");
    var name = document.getElementById("uNameInput");
    var pass = document.getElementById("uPassInput");
    var submit = document.getElementById("submit");
    
    var person = new Person();

        submit.onclick = function(e){
          e.preventDefault();
          console.log("Click worked");
         console.log(Person.username);
            if (person.username === name.value){
                console.log("Name is correct!");
                
                if (person.password === pass.value){
                    console.log("Password is correct!");     
                }   
            }
            else{
                console.log("Name didnt work")
            }
    
        };
};
   
