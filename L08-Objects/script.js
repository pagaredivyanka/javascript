// objects make code more organized
// keep multiple values together
    const product = {
        name: 'socks',
        price: 1090
    };
    console.log(typeof product);
    console.log(product.name);
    console.log(product.price);

    product.name = 'cotton socks';
    console.log(product);

    product.newProduct = true;
    console.log(product);

    delete product.newProduct;
    console.log();

    const product2 = {
        name: 'shirt',
        ['delivery-time']: '1 day',
        rating: {
            starts: 4.5,
            count: 97
        },
        fun: function func1() {
            console.log('function in sidethe object');
        }
            

    };
    console.log(product2);
    console.log(product2.name); //print shirt //dot notation
    console.log(product2['name']); // [] bracket notation
    console.log(product2['delivery-time']); //undefined
    console.log(product2);

    console.log(product2.rating.count); //object withing object
    product2.rating.count += 1; //increment rating count
    product2.fun(); //calling function 

    console.log(typeof console.log); //log is a function which is in the console object

    console.log(JSON.stringify(product2));

    const jsonString = JSON.stringify(product2);
    console.log(jsonString);  // converted into JSON string 

    console.log(JSON.parse(jsonString));  //converted into JS object

// JSON and JavaScript

/*

    JSON is a simpler version of Javascript with limited funcitionalities

    convert Javascript to JSON -> JSON.stringify()
    convert JSON to Javascript -> JSON.parse()
*/

    console.log('hello'.length); //5
    console.log('hello'.toUpperCase); //HELLO

    const obj1 = {
        msg: 'hello'
    };
    const obj2 = obj1;

    obj1.msg = 'Ritesh';
    console.log(obj1);
    console.log(obj2);

    const obj3 = {
        msg: 'Good job!'
    };

    console.log(obj3 === obj1); // false (creates another object)
    console.log(obj2 === obj1); // true (points to same refrence variable)

    const obj4 = {
        msg: 'Good job!'
    };

    // const msg = obj4.msg;
    const { msg, price } = obj4; // destructuring
    console.log(msg); // Good job!

    const obj5 = {
        // msg: msg
        msg,
        //method: function func1() {
        //    console.log('method');
        //}

        // shorthand method
        method() {
            console.log('method'); 
        }
    };