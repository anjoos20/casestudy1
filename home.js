function mainPage(){
    window.location.href="todoPage.html";  
 }
 function validate(callback){
     if (document.getElementById("username").value == "admin" && 
         document.getElementById("pwd").value == "12345"){  
         console.log("Valid login");
         callback();
         }
     else{
         document.getElementById("invlogin").innerHTML="Invalid login: To do list couldn't be accessed";
     }
 }