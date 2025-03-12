/*
    1. starts with "function" keyword
    2. reusable code 
    3. call the function as many as you want 
*/


    function func() {
        console.log("Hello");
        console.log(2 * 2);
    }
    
    func();
    
    
    
    function calculateTax(cost, taxPercent = 0.1) {  //0.1 is default parameter 
      
        // if we dont give the default parameter then it gives NaN
        console.log(cost * taxPercent);  //10% tax
    }
    
    calculateTax(200, 0.2); //200 -> argument
    calculateTax(350);  //deafuat it take tax percent as 0.1

