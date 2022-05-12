function getAPI(){
    //Creatimg an XHR object
    // *****
    console.log("Inside getAPI");
    var xhr = new XMLHttpRequest();
    xhr.open("GET","https://jsonplaceholder.typicode.com/todos");
    xhr.send();
    //Event listener
    xhr.onreadystatechange = function(){
        //condition
        if (this.readyState==4){
            if (this.status==200){
            // document.getElementById("demo").innerHTML = this.responseText;
            // alert("successful read")
            // alert(xhr.responseText);
            var resultData = JSON.parse(xhr.responseText);
            var htmlContent = "";
            let table=document.getElementById("resultArea");
            for(let i=0;i<resultData.length;i++){
                var currentRecord=resultData[i];
                let rowcount = table.rows.length;
                var row = table.insertRow(rowcount);

                var cell1 =row.insertCell(0);
                cell1.innerHTML=currentRecord.id;

                var cell2 =row.insertCell(1);
                cell2.innerHTML=currentRecord.title;

                var cell3 =row.insertCell(2);
                var element=document.createElement("input")
                element.type="checkbox";

                if (currentRecord.completed==true){
                    element.setAttribute("checked","true");
                    element.setAttribute("disabled","true")
                }
                element.addEventListener('change',(Event)=>{
                    if (Event.currentTarget.checked){
                        count++;
                        checkCounter();
                    }
                    else{
                        count--;
                    }
                })
                cell3.appendChild(element);
            }
        }
        else{
            alert("some error occurred");
        }
    
    }
}
}

var count=0;
function checkCounter(){
    let promise = new Promise(function(resolve,reject){
        if (count==5){
            resolve("Congrats! Five tasks have been successfully completed");
        }
    })
    promise.then(function(s){
        alert(s);
    })
}

function logout(){
    window.location.href="index.html"; 
}