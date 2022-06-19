let displayValue = "";
var secondDisplayValue = "";
let numberArray = [0,1,2,3,4,5,6,7,8,9]
var inputDisplay = document.getElementById("inputDisplay");
var counter = 0;
var first;
var addedValue;
var plusCounter = 0;
var minusCounter = 0;
var divideCounter = 0;
var multiplyCounter = 0;
var equalsCounter = 0;
var secondValueCounter = 0;
var noEquals = 0;
/*
var increment = function(){
    return function(counter){
        counter +=1;
        return counter;
    }
};
*/

/*
check this out
https://stackoverflow.com/questions/10286386/how-to-convert-string-equation-to-number-in-javascript#:~:text=use%20parseInt()%20%2CThe%20parseInt,string%20and%20returns%20an%20integer.&text=Show%20activity%20on%20this%20post.,-One%20Liner%3A%20str&text=Show%20activity%20on%20this%20post.,-I%20have%20a
https://stackoverflow.com/questions/1133770/how-to-convert-a-string-to-an-integer-in-javascript



number selector function{}
addition function{
    on click add display value
}



*/
/*
need to do:
need to resolve issue where "8 - 3 - 2 - 5" ends up concatinating a string instead of creating new string value
*/



function equalsOrOperator(x){
    if (equalsCounter == 1 && plusCounter >= 1){
        produceDisplayValue(x);
    } else if(equalsCounter == 1 && minusCounter >= 1){
        produceDisplayValue(x);
    } else if(equalsCounter == 1 && multiplyCounter >= 1){
        produceDisplayValue(x);
    } else if(equalsCounter == 1 && divideCounter >= 1){
        produceDisplayValue(x);
    } else if (equalsCounter == 1){
        postEqualsFunction(x);
    } else if (secondValueCounter > 1) {
        console.log("do we even get this else if")
        produceDisplayValue(x);
    } else {
        doMath(x);
    }
}

function secondPostEqualsFunction(x){
    secondDisplayValue = secondDisplayValue + keyValue;
            
            inputDisplay.innerText = secondDisplayValue;   
}

// pseudo code
// need to crate function where if plus is pressed and there is a plus counter or minus/divide/multiply counter, then do math
function mathWithoutCounters(x){
    if( noEquals == 1){
        doMath(x)
        noEquals == 0;
    }
}

function numberActionDeterminer(x){
if (equalsCounter == 1 ){
    equalsOrOperator(x);
} else { 
    produceDisplayValue(x)
}
}

function produceDisplayValue(keyValue){
    if (secondValueCounter < 1){
        displayValue = displayValue + keyValue;
        console.log(displayValue);
        inputDisplay.innerText = displayValue;
        console.log(`This is the value of counter: ${counter}`);
        console.log(`this is the value of equalsCounter: ${equalsCounter}`);
        console.log(`this is the value of secondValueCounter: ${secondValueCounter}`);

        } else {
            console.log("below is the else for produceDisplayValue");
            console.log(`This is the value of counter: ${counter}`);
            console.log(`this is the value of equalsCounter: ${equalsCounter}`);
            console.log(`this is the value of secondValueCounter: ${secondValueCounter}`);
            secondDisplayValue = secondDisplayValue + keyValue;
            
            inputDisplay.innerText = secondDisplayValue;   
            console.log(`This is the value of ${counter}`)
          
        }
}


var equal = document.getElementById("equals");
equal.addEventListener("click", () => {
    doMath();
    console.log("is equals working");
    console.log(secondDisplayValue);
    equalsCounter = 0;
    ++equalsCounter;
    secondValueCounter = 0;
    console.log(`Test of equals function. Counter equals ${counter}`)
    
});


function postEqualsFunction(x){
    displayValue = "";
    secondDisplayValue = "";
    inputDisplay.innerText = "";
    produceDisplayValue(x);
    secondValueCounter = 0;
   --equalsCounter;
    console.log(`equalsCounter is ${equalsCounter}`);
}

/*
function counterDeincrement(counter){
    let i = 0;
    while (i < 0){
        --counter;
    }
}
*/

function doMath(){
    if (plusCounter >= 1){
        addedValue = sum(displayValue,secondDisplayValue);
        displayValue = addedValue;
        secondDisplayValue = "";
        inputDisplay.innerText = displayValue;
        plusCounter = 0;
       // minusCounter = 0;
       // divideCounter = 0;
       // multiplyCounter = 0;
        --counter;
        secondValueCounter = 0;
        
        console.log(`This is the value of counter: ${counter}`);
        console.log(`this is the value of equalsCounter: ${equalsCounter}`);
        console.log(`this is the value of secondValueCounter: ${secondValueCounter}`);
         } else if (minusCounter >= 1){
             subtractedValue = subtract(displayValue,secondDisplayValue);
             displayValue = subtractedValue
             secondDisplayValue = "";
             inputDisplay.innerText = subtractedValue;
             minusCounter = 0;
             --equalsCounter;
             --counter;
         //    divideCounter = 0;
         //    multiplyCounter = 0;
        //     plusCounter = 0;
            secondValueCounter = 0;
         } else if (multiplyCounter >= 1){
              multipliedValue = multiply(displayValue,secondDisplayValue);
              displayValue = multipliedValue
             secondDisplayValue = "";
             inputDisplay.innerText = multipliedValue;
             multiplyCounter = 0;
             --equalsCounter;
             secondValueCounter = 0;
         } else if (divideCounter >= 1){
             if (secondDisplayValue == 0){
                 alert("why did you try to divide by zero?")
                 divideByZero();
             } else {
             dividedValue = divide(displayValue,secondDisplayValue);
             displayValue = dividedValue
             secondDisplayValue = "";
            inputDisplay.innerText = dividedValue;
            divideCounter = 0;
            --equalsCounter;
            secondValueCounter = 0;
             }
        };
};

var plus = document.getElementById("plus");
plus.addEventListener("click", () =>{
    secondValueCounter = 0;
    if (minusCounter == 1 || multiplyCounter == 1 || divideCounter == 1 || plusCounter == 1){
        console.log(`displayValue is ${displayValue}. secondDisplayValue is ${secondDisplayValue}`)
        doMath();
      }
    ++counter;
    ++plusCounter;
    ++secondValueCounter;
    if (plusCounter == 2){
        console.log(`displayValue is ${displayValue}. secondDisplayValue is ${secondDisplayValue}`)
        doMath();
    }
    console.log(`This is the value of ${counter}`);
});


var minus = document.getElementById("minus");
minus.addEventListener("click", () =>{
    secondValueCounter = 0;
    if (plusCounter == 1 || multiplyCounter == 1 || divideCounter == 1 || minusCounter == 1){
        doMath();
      }
    ++counter;
    ++minusCounter;
    ++secondValueCounter;
    if (minusCounter == 2){
        doMath();
    }
    console.log(`This is the value of ${counter}`);
});


var multiplyButton = document.getElementById("multiply");
multiplyButton.addEventListener("click", () =>{
    secondValueCounter = 0;
    if (plusCounter == 1 || multiplyCounter == 1 || divideCounter == 1 || minusCounter == 1){
        doMath();
      }
    ++counter;
    ++multiplyCounter;
    ++secondValueCounter
    if (multiplyCounter == 2){
        doMath();
    }
    console.log(`This is the value of ${counter}`);
});

var divideButton = document.getElementById("divide");
divideButton.addEventListener("click", () =>{
    secondValueCounter = 0;
    if (plusCounter == 1 || multiplyCounter == 1 || divideCounter == 1 || minusCounter){
        doMath();
      }
    ++counter;
    ++divideCounter;
    ++secondValueCounter;
    if(divideCounter == 2){
        doMath();
    }
    console.log(`This is the value of ${counter}`);
});

function divideByZero(){
    displayValue = "";
    secondDisplayValue = "";
    inputDisplay.innerText = "";
    counter = 0;
    divideCounter = 0;
    secondValueCounter = 0
}



var one = document.getElementById("1");
one.addEventListener("click", ()=>{
    let firstKeyValue = one.id.toString();
    
    
    numberActionDeterminer(firstKeyValue);
    if (equalsCounter >= 1){
        --equalsCounter;
    }
 } );

var two = document.getElementById("2");
two.addEventListener("click", ()=>{
    
    let secondKeyValue = two.id.toString();
    numberActionDeterminer(secondKeyValue);
    if (equalsCounter >= 1){
        --equalsCounter;
    }
});

var three = document.getElementById("3");
three.addEventListener("click", ()=>{
    
    let thirdKeyValue = three.id.toString();
    numberActionDeterminer(thirdKeyValue);
    if (equalsCounter >= 1){
        --equalsCounter;
    }
}); 

var four = document.getElementById("4");
four.addEventListener("click", () =>{
    
    let fourthKeyValue = four.id.toString();
    numberActionDeterminer(fourthKeyValue);
    if (equalsCounter >= 1){
        --equalsCounter;
    }
});

var five = document.getElementById("5");
five.addEventListener("click", () => {
    
    let fifthKeyValue = five.id.toString();
    numberActionDeterminer(fifthKeyValue);
    if (equalsCounter >= 1){
        --equalsCounter;
    }
})


var six = document.getElementById("6");
six.addEventListener("click", () => {
    
    let sixthKeyValue = six.id.toString();
    numberActionDeterminer(sixthKeyValue);
    if (equalsCounter >= 1){
        --equalsCounter;
    }
});

var seven = document.getElementById("7");
seven.addEventListener("click", () => {
    
    let seventhKeyValue = seven.id.toString();
    numberActionDeterminer(seventhKeyValue);
    if (equalsCounter >= 1){
        --equalsCounter;
    }
});

var eight = document.getElementById("8");
eight.addEventListener("click", () => {
    
    let eighthKeyValue = eight.id.toString();
    numberActionDeterminer(eighthKeyValue);
    if (equalsCounter >= 1){
        --equalsCounter;
    }
});

var nine = document.getElementById("9");
nine.addEventListener("click", () => {
    
    let ninthKeyValue = nine.id.toString();
    numberActionDeterminer(ninthKeyValue);
    if (equalsCounter >= 1){
        --equalsCounter;
    }
});

var zero = document.getElementById("0");
zero.addEventListener("click", () => {
    
    let zerothKeyValue = zero.id.toString();
    numberActionDeterminer(zerothKeyValue);
    if (equalsCounter >= 1){
        --equalsCounter;
    }
});

var period = document.getElementById("period");
period.addEventListener("click", () => {
    
    let periodKeyValue = ".";
    numberActionDeterminer(periodKeyValue);
    if (equalsCounter >= 1){
        --equalsCounter;
    }
});


var negativeButton = document.getElementById("negativeButton");
negativeButton.addEventListener("click", () => {
    let negativeValue = "-"
   if (secondValueCounter < 1){     
    if (displayValue.startsWith("-")){
       displayValue = displayValue.substring(1);
       inputDisplay.innerText = displayValue;
       console.log("this number is negative");
    } else {
        displayValue = negativeValue.concat(displayValue);
       inputDisplay.innerText = displayValue;
    }
} else {
    if (secondDisplayValue.startsWith("-")){
        secondDisplayValue = secondDisplayValue.substring(1);
        inputDisplay.innerText = secondDisplayValue;
        console.log("this number is negative");
     } else {
         if (secondDisplayValue == ""){
            secondDisplayValue = "-";
            inputDisplay.innerText = secondDisplayValue;
         } else {
         secondDisplayValue = negativeValue.concat(secondDisplayValue);
        inputDisplay.innerText = secondDisplayValue;
         }
     }
}
    // need to add logic for secondValue
})


var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
    
    displayValue = "";
    secondDisplayValue = "";
    inputDisplay.innerText = "";
    console.log(displayValue)
    console.log(secondDisplayValue);
});

var percentButton = document.getElementById("percentButton");
percentButton.addEventListener("click", () => {
    let percentValue = "0.";
    if (secondValueCounter < 1){     
        if (displayValue.startsWith("0.")){
           displayValue = displayValue.substring(1);
           inputDisplay.innerText = displayValue;
           console.log("this number is negative");
        } else {
            displayValue = percentValue.concat(displayValue);
           inputDisplay.innerText = displayValue;
        }
    } else {
        if (secondDisplayValue.startsWith("0.")){
            secondDisplayValue = secondDisplayValue.substring(1);
            inputDisplay.innerText = secondDisplayValue;
            console.log("this number is negative");
         } else {
             if (secondDisplayValue == ""){
                secondDisplayValue = "0.";
                inputDisplay.innerText = secondDisplayValue;
             } else {
             secondDisplayValue = percentValue.concat(secondDisplayValue);
            inputDisplay.innerText = secondDisplayValue;
             }
         }
    }
}
)


function sum(x,y){
    let z;
    
     z = parseFloat(x) + parseFloat(y);
     return z.toString();
}

function subtract(x,y){
    let z;
    z = parseFloat(x)-parseFloat(y);
    return z.toString();
}

function multiply(x,y){
    let z;
    z = parseFloat(x)*parseFloat(y);
    return z.toString();
}

function divide(x,y){
    let z;
    z = parseFloat(x)/parseFloat(y);
    return z.toString();
}


