    true 
    false
    console.log(3 > 5 - 5);
    console.log(2 === '2');
    
    if (false) {
      console.log('Hello');
    } else {
      console.log('else block');
    }
    
    
    const age = 15;
    
    if (age >= 16) {
      console.log('You can drive');
    } else if (age >= 14) {
      console.log('You are almost there!');
    } else {
      console.log('You can not drive');
    }


        
    console.log(true && true); //op -> true
    console.log(true && false); //op -> false

    console.log(true || false);
    console.log(!true);
        



// truthy values -> true 1 !0
        if (5) {
            console.log('truthy');  // true
        }

// falsy values -> false 0 '' NaN undefined null 
      
      
      if (0) {
          console.log('falsy'); //false
      }


      // const cartQuantity = 5;
      let cartQuantity = 5;
      if (cartQuantity) {
          console.log('Cart has products');  //Cart has products
      }

//    console.log(!0);  // true

const result = true ? 'tuthy' : 'falsy';
console.log(result);

false && console.log('hello');  // first value is false then stopes from checking next condition  

const msg = 5 && 'hello';
console.log(msg);  // hello


const currency = 'EUR' || 'USD';
console.log(currency);  // EUR
const currency1 = undefined || 'USD';
console.log(currency1);  // USD
