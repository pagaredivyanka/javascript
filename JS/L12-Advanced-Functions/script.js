    document.querySelector('.js-button');

    const addEventListener = () => {
        console.log('clicked 1');
    }
    buttonElement.addEventListener('click', addEventListener);

    buttonElement.removeEventListener('click', addEventListener);
    
    buttonElement.addEventListener('click', () => {
        console.log('clicked 2');
    });

    greeting();
    function greeting() {
        console.log('hello');
    }
    greeting();
    // types of value -> number, string, boolean

    const num = 2;
    const func1 = function greeting() {
        console.log('hello1');
    };

    console.log(func1); // print the complete function -> function greeting() {console.log('hello1'); }
    console.log(typeof func1);  // op -> function
    func1();    // hello1

    const obj1 = {
        num: 2,
        fun: function greeting() {
            console.log('hello2'); 
        }
    };

    obj1.fun(); // hello2


    function display(param) {
        console.log(param);
    }
    display(2);
    
    function run(param) {
        param();
    }

    run(function() {
        console.log('hello3');
    });


// setTimeout(); this function take 2 parameters  (1. function, 2. time)
// Asynchronous code 
// It's not waiting for the function to complete before moving on to the next line
// It's a non-blocking function

    setTimeout(function() {
        // inside the function -> this is synchronous code
        // it executes line by line 
        console.log('timeout'); // 1st
        console.log('timeout1'); // 2nd
    }, 3000); // working -> wait for 3000 ms and then run the function

    console.log('next line');


    setInterval(function() {
        console.log('interval');
    }, 3000);

    console.log('next line 1');



// forEach 
    [
        'DSA Practice',
        'Development Project',
        'Aptitude'
    ].forEach((value, index) => {
        if (value === 'DSA Practice') {
            return;
        }
        console.log(index);
        console.log(value);  // print one by one
    });

// different types of writing functions 
/*
    1. regular function
    2. arrow function 
        a. const funName = () => { return };
        b. const oneParam = param => { };
        c. const oneLine = () => 2 + 3;
        
*/ 
    const regularFunction = function(param, param) {
        console.log('hello3');
        return 5;
    }

    // arrow function 1
    const arrowFunction = () => {
        console.log('hello4');
        return 5;
    };
    arrowFunction();

    // arrow function 2
    const oneParam = param => {
        console.log(param + 1);
    };

    // arrow function 3
    const oneLine = () => 2 + 3;


    // object
    const obj2 = {
        method: () => {
            
        },
        method() {

        }
    };
//------------------------------------------------------------------------------

console.log([1, -3, 5].filter((value, index) => {
    /*
    if (value >= 0) {
        return true;
    } else {
        return false;
    }
    */
  // same as below
    return vlaue >= 0;
}));


console.log([1, 1, 3].map((value) => {
    return value * 2;  // it multiply each value with 2 from [1, 1, 3]
}));

// same as above
console.log([1, 1, 3].map(value => value * 2 ));
