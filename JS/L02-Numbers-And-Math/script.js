2 + 2 + 2 
6

// Javascript prefer operators in following way
/*
1. () brackets
2. * / (multiplication and division) 
3. + - (addition and subtraction)

if * and / are in same line then executes left to right, it's same for + -

*/
example ->
1 + 1 * 3
its does 
1 * 3 (1st) 
1 + 3 (2nd)
= 4

//bracket 
(1 + 1) * 3
its does
1 + 1 (1st)
2 * 3 (2nd)
= 6

float ->
20.95 + 7.99 * 2
7.99 * 2 (1st)
20.95 + 15.98 (2nd)
= 36.93

// for %
// if we want 10% of the number then 

// what is 10%
10 / 100 = 0.1

number * 0.1 = 10% of the number

36.93 * 0.1 
= 3.693 (1st)




/*
Math.round(2.8) //case sencitive 
ans -> 3

Math.round(4.2)
ans -> 4

if we want to calculate for money in dollers in float then first convert it into "cent" => *100 then do all operations in int and then last (divide by 100) -> /100
it gives more accurate ans 


item price in doller -> 20.95 + 7.99
tax -> 10% 

total price = ?
*/

= ((2095 + 799) * 0.1) / 100
= Math.round(2894 * 0.1) / 100
= 2.89

