"use strict";


function stoixeia (){
    let type = document.getElementById("type").value;
     console.log(type)
     let number1 = document.getElementById("first_number").value;
     console.log(number1)
     let number2 = document.getElementById("second_number").value;    
     console.log(number2)
     let number3 = document.getElementById("third_number").value;
     console.log(number3)
     
 
     if (type === "analoga"){
         let number4 = number2 * number3
         console.log(number4)
         let number5 = number4 / number1
         console.log(number5)
         document.getElementById("zhis_div").innerHTML = (number5);
     } 
 
     if (type === "antistrofos") {
        let number6 = number1 * number2
        console.log(number6)
        let number7 = number6 / number3
        console.log(number7)
        document.getElementById("zhis_div").innerHTML = (number7)
     }
 


 }
 