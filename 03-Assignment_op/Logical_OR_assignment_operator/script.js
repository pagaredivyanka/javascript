/* 
x ||= y
or 
x = x || y
*/

let name = {
    first_name : "Ritesh",
    last_name : "",
};

console.log(name.first_name);

name.first_name ||= "Divyanka";

console.log(name.first_name);

console.log(name.last_name);

name.last_name ||= "Pagare";

console.log(name.last_name);