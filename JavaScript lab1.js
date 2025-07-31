// * ====== Lab 1 Solutions By Ahmed Elsayed Ashour ====== *
// Q1 Create a function that accepts a variable and returns its type
function getDataType(x){
    return typeof x
}
console.log("getDataType():", getDataType(75));
// ====================================================
//Q2 Create functions for addition, subtraction, multiplication, and
//division
let x = 7, y = 3
console.log("x=", x, "y=", y)

function addition(x, y){
    return x+y;
}
console.log("addition(x, y):", addition(x, y));

function subtraction(x, y){
    return x-y;
}
console.log("subtraction(x, y):", subtraction(x, y));

function multiplication(x, y){
    return x*y;
}
console.log("multiplication(x, y):", multiplication(x, y));

function division(x, y){
    return x/y;
}
console.log("division(x, y):", division(x, y));
// ====================================================
//Q3 Create a function that checks if a value is NaN.
function checkNaN(v){
    return isNaN (v)
}
let v = 7
console.log("v=", v)
console.log("checkNaN(v):", checkNaN(v))
// ====================================================
//Q4 Create a function that returns true if a number is even and false
//if odd
function isEven(n){
    return n%2==0;
}
let n = 7
console.log("n=", n)
console.log("isEven(n):", isEven(n))
// ====================================================
//Q5 Create a function to concatenate two strings with a space in
//between
function concatStr(s1, s2, del){
    return s1+del+s2;
}
let s1= "Ahmed", s2 ="Elsayed", del = ` `
console.log("s1=",s1,"s2=",s2, "delimeter:", del)
console.log("concatStr(s1, s2)", concatStr(s1, s2, del))
// ====================================================
//Q6 Create a function that takes a string and returns its uppercase
//version
function UpperCase(s){
    return s.toUpperCase()
}
let s ="hello"
console.log("s=", s)
console.log("s.toUpperCase", s.toUpperCase())
// ====================================================
//Q7 Create a function that takes a string and an index then returns
//the character at a given index in the string
function getCharByIndex(st, i){
    return st[i];
}
let st ="hello world", i = 6
console.log("st=", st, "Index:", i)
console.log("getCharByIndex(st, i)", getCharByIndex(st, i))
// ====================================================
//Q8 Create a functions greet() that takes a name of a person and then
//returns “ Hello , name”
function greet(person){
    return "Hello, "+person;
}
let person ="Ahmed"
console.log("p=", person)
console.log("greet(person)", greet(person))
// ====================================================
//Q9 Create a function that checks if a value is null or undefined
function isNullorUndefined(u){
    return u=== null? true: (u === undefined? true:false);
}
let u = null
console.log("u=", u)
console.log("typeof u", typeof u)
console.log("isNullorUndefined(u)", isNullorUndefined(u))
u = undefined
console.log("u=", u)
console.log("typeof u", typeof u)
console.log("isNullorUndefined(u)", isNullorUndefined(u))
u = 777
console.log("u=", u)
console.log("typeof u", typeof u)
console.log("isNullorUndefined(u)", isNullorUndefined(u))
// ====================================================
//Q10 Create a function that generates a random number between two
//values.
function randomNum(a, b){
    return Math.floor(a +(b-a)*Math.random());
}
let a = 7, b = 60
console.log("a=", a, "b=", b)
console.log("randomNum(a, b)", randomNum(a, b))
// ====================================================
//Q11 Create a function that takes a number , checks its value and
//return “ Positive” or “ Negative” or “ Zero”
function getNumberClass(r){
    return r === 0? 'Zero':
           r > 0  ? 'Positive':
           r < 0  ? 'Negative':'';
}
let r= null
console.log("r=", r)
console.log("typeof r", typeof r)
console.log("getNumberClass(r)", getNumberClass(r))
r= 777
console.log("r=", r)
console.log("typeof r", typeof r)
console.log("getNumberClass(r)", getNumberClass(r))
// ====================================================
//Q12  Create a function that safely evaluates a mathematical expression
//and handles errors gracefully.
function evalMath(z){
  //return isNaN(z)? 'Not a Number':eval(z*2);
    return typeof z === `string` || 
           typeof z === undefined ? 'Not a Number':z*2;
}
let z= ``
console.log("z=", z)
console.log("isNaN(z)=", isNaN(z))
console.log("isNaN()=", isNaN(``))
console.log("isNaN()=", isNaN(`33`))
console.log("isNaN()=", isNaN(null))
console.log("isNaN()=", isNaN(undefined))
console.log("typeof z", typeof z)
console.log("evalMath(z)", evalMath(z))
z= 33
console.log("evalMath(z)", evalMath(z))


