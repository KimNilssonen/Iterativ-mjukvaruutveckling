"use strict";

var TestLogin = function(correctUsername, correctPassword, falseUsername, falsePassowrd){
    
    this.name = correctUsername;
    this.pass = correctPassword;
    this.falseName = falseUsername;
    this.falsePass = falsePassowrd;
    var that = this;
    
    
    //-------------Testerna---------------//
    var tryCorrectName = function(){
        try {
           if(that.name === "admin"){
                return true;
           }
        }
        catch (Error){
            return false;
        }
    };
    
    var tryCorrectPassword = function(){
        try {
            if(that.pass === "password"){
                return true;
            }
        }
        catch (Error){
            return false;
        }
    };
    
    var tryFalseName = function(){
        try {
            if(that.falseName === "admon"){
                return true;
            }
        }
        catch(Error){
            return false;
        }
    };
    
    var tryFalsePass = function(){
        try {
            if(that.falsePass === "pass123"){
                return true;
            }
        }
        catch (Error){
            return false;
        }
    };
    
//--------------Starta testerna----------------//
    var tester = function(){
        
        if(tryCorrectName()){
            console.log("tryCorrectName - Test OK!");
        }
        else{
            console.log("tryCorrectName - Test Fail!");
        }
            

        if(tryCorrectPassword()){
            console.log("tryCorrectPassword - Test OK!");
        }
        else{
            console.log("tryCorrectPassword - Test Fail!");
        }
        
        
        if(tryFalseName()){
            console.log("tryFalseName - Test OK!");
        }
        else{
            console.log("tryFalseName - Test Fail!");
        }
        
        
        if(tryFalsePass()){
            console.log("tryFalsePass - Test OK!");
        }
        else{
            console.log("tryFalsePass - Test Fail!");
        }
   };
   
tester();

   
};
 