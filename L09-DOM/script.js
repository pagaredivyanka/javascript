console.log(document.querySelector('button').innerHTML);

document.querySelector('button')
.innerHTML = 'Hello';

const buttonElement = document.querySelector('.js-button');
console.log(buttonElement);

console.log(document.title);
document.tile = 'changed';

console.log(document.body); //print everything console which is present on web page
console.log(typeof document.body);

console.log(document.body.innerHTML);
//  document.body.innerHTML = 'changed'; // change all the html with this text 'changed'

document.body.innerHTML = '<button>Good Job!</button>';

document.body.innerHTML = 'Ritesh';  // gives output on web page
document.title = 'Good Job!';  // it chages title of the web page
    

