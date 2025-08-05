// * ====== Lab 2 Solutions By Ahmed Elsayed Ashour ====== *
//Q1 Create a function called ‘ capitalizeWords’ that takes a string
//and returns the string with the first letter of each word capitalized.
console.log("Q 1");
function capitalizeWords(s){
    let st = []
    if (s.length >= 1){ 
    st[0]=s[0].toUpperCase()
    for(i=1; i<s.length; i++){    
        if(s[i-1]==" "){
           st[i]=s[i].toUpperCase();
        }
        else{
           st[i]=s[i]
        }   
    }
    }

    let ss="";
    for(i=0; i<st.length; i++){
        ss= ss+st[i];
    }
    return ss;
}   

let s ="  ab  c  def gth   xyz 12r ff 3  9   "
console.log(capitalizeWords(s))
s =""
console.log(capitalizeWords(s))
// =================================================================
//Q2- Create a function called ‘ mergeSortedArrays’ that takes two
//sorted arrays and returns a single sorted array by merging them.
//([1, 3, 5], [2, 4, 6]) ==> [1, 2, 3, 4, 5, 6]
console.log("Q 2");
function mergeSortedArrays (a, b){
    if(a.length <= b.length){
        arr1 = a;
        arr2 = b;
    }
    else {
        arr1 = b;
        arr2 = a;
    }

    let k = 0;
    let x = 0;
    let arr = [];
    for(i=0;i<arr1.length;i++)
        for(j=k;j<arr2.length;j++){
            if(arr1[i]<arr2[j]){
                arr[x]=arr1[i];
                x=x+1;
                break;
            }
            else{
                arr[x]=arr2[j];
                x=x+1;
                k = j+1;
             } 
        }
        for(i=k;i<arr2.length;i++){
        arr[x]=arr2[k];
        x=x+1;
        k=k+1;
        }
        return arr;
}

console.log(mergeSortedArrays([1,3, 4, 4,5,7,9,11,13,15],[1,4,6, 7,8,10]))
// ======================================================================
// Q 3- Write a function called ‘ sumOfSquares’ that takes an array of
//numbers and returns the sum of their squares.
// Hint : use reduce()
console.log("Q 3");
// المحاضرة القادمة 

// =======================================================================
//Q 4- Create a function called ‘ filterArray’ that takes an array and a
//callback function. The filterArray function should return a new array
//that contains only the elements for which the callback function
//returns true.
console.log("Q 4");

function isEven(n){
    return n%2==0;
}
function filterArray(arr, cbFn){
    let fltarr = [];
    let x=0;
    for(i=0;i<arr.length;i++){
        if (cbFn(arr[i])){
          fltarr[x]=arr[i]; 
          x=x+1; 
        }     
    }
    return fltarr;
}
let arr = [1,2,3,9,80,48,4,5,6,7,8,9]
console.log("filterArray(arr, cbFn):", filterArray(arr, isEven))
// ====================================================================
//Q 5- Create a function called ‘ mapArray’ that takes an array and a
//callback function. The mapArray function should return a new array
//where each element is the result of the callback function applied to
//the corresponding element of the input array.
console.log("Q 5");

function multiplyByTwo(n){
    return n*2;
}
function mapArray(arr, cbFn){
    let maparr = [];
    let x=0;
    for(i=0;i<arr.length;i++){
          maparr[x]=cbFn(arr[i]); 
          x=x+1;   
    }
    return maparr;
}
let a = [1,2,3,9,80,48,4,5,6,7,8,9]
console.log("mapArray(arr, cbFn):", mapArray(a, multiplyByTwo))
// ================================================================
// Q 6- Create a function called ‘ reduceArray’ that takes an array, a
//callback function, and an initial value. The reduceArray function
//should return a single value that is the result of applying the
// function to each element of the array, using the initial
//value as the starting point.
console.log("Q 6");
function accumSumSquare (acc, current) {return acc + current*current;}
function reduceArray(array, callback, initialValue) {
    let accumulator = initialValue;

    for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i]);
    }

    return accumulator;
}
// Example usage
const numbers = [1, 2, 3, 4];

const resultSumSquare = reduceArray(numbers, accumSumSquare, 0);
console.log("reduceArray(array, callback, initialValue):", resultSumSquare); //
// ====================================================================
//Q 7- Create a function called forEachArray that takes an array and a
//callback function. The forEachArray function should apply the
//callback function to each element of the array.

// Same soultion for Q5 OR Q6
//======================================================================
//Q 8- Write a function called findMax that takes an array of numbers and
//returns the maximum number in the array.
console.log("Q 8");

console.log("findMax(arr):", Math.max(...[1,2,3])) // سؤال ل م.كريم
function findMax(arr){
    return Math.max(...arr);
}
let c = [1,2,3]
console.log("findMax(arr):", findMax(c))
// =====================================================================
// Q 9- Write a function called mergeObjects that takes two objects and
//returns a new object that combines the properties of both. If a
//property exists in both objects, the value from the second object
//should be used.
console.log("Q 9");

function mergeObjects(obj1, obj2){
    let obj = obj2;
    let arrKeys1 = Object.keys(obj1)
    let arrKeys2 = Object.keys(obj2)

    let exist ;
    for(i=0; i<arrKeys1.length;i++){   
        exist = true;
        for(j=0; j<arrKeys2.length;j++){
            if(arrKeys1[i]==arrKeys2[j]){
                exist = true;
                break;
            }
            else exist = false;
        }
            if (!exist) obj[arrKeys1[i]]= obj1[arrKeys1[i]]
        }
        return obj;
}

let obj1 ={
    name: "Ahmed",
    id: 1,
    age: 37   
}
console.log(obj1)

let obj2 ={
    name: "Ali",
    city: "Alex",
    gender: "male"   
}
console.log(obj2)

console.log("mergeObjects(obj1, obj2):", mergeObjects(obj1, obj2))
// =================================================================
//Q 10- Write a function called invertObject that takes an object and
//returns a new object where the keys and values are swapped.
//{ a: 1, b: 2, c: 3 } ==> { 1: 'a', 2: 'b', 3: 'c' }
console.log("Q 10");
function invertObject (obj){
    arr = Object.keys(obj);
    let invObj = {};
    for(i=0;i<arr.length;i++){
        invObj[obj[arr[i]]] = arr[i];
    }
    return invObj
}
let obj ={
    name: "Ahmed",
    id: 1,
    age: 37   
}
obj["nationality"]="Egyptian"
console.log("invertObject (obj):", invertObject (obj))
// ===================================================================
//Q 11- Write a function called omitKeys that takes an object and an
//array of keys, and returns a new object that omits the specified keys.
//{ a: 1, b: 2, c: 3, d: 4 } ==> omit (b , d) ====> { a: 1, c: 3 }  
console.log("Q 11");
function omitKeys(obj, omit){
     let omitObj = {}
     let objKeys = Object.keys(obj)
     let exist = false;
     for(i=0;i<objKeys.length;i++){      
        for(j=0;j<omit.length;j++){
            if(objKeys[i]===omit[j]){
                exist = true;
                break;
            }
        }
        if(!exist) {
            omitObj[objKeys[i]]= obj[objKeys[i]];
        }  
        exist = false;       
    }
     return omitObj;
}

let objx ={
    name: "Ahmed",
    id: 1,
    age: 37 ,
    nationality: "Egyptian"  
}
let omit = ["id", "age"]
console.log("omitKeys(obj, omit):", omitKeys (objx, omit))
// ===================================================================
//Q 12- Write a function called pickKeys that takes an object and an
//array of keys, and returns a new object that includes only the
//specified keys.
//{ a: 1, b: 2, c: 3, d: 4 } ==> omit (b , d) ====> { b: 2, d: 4 }
console.log("Q 12");

function pickKeys(obj, pick){
     let pickObj = {}
     let objKeys = Object.keys(obj)
     for(i=0;i<objKeys.length;i++){      
        for(j=0;j<pick.length;j++){
            if(objKeys[i]===pick[j]){
                pickObj[objKeys[i]]= obj[objKeys[i]];
                break;
            }   
    }
}
     return pickObj;
}

let objy ={
    name: "Ahmed",
    id: 1,
    age: 37 ,
    nationality: "Egyptian"  
}
let pick = ["id", "age"]
console.log("pickKeys(obj, pick):", pickKeys(objy, pick))
// ====================================================================
// Q 13- Write a function called reverseArray that takes an array and
//returns a new array with the elements in reverse order.
console.log("Q 13");
function reverseArray (arr){
    let rvarr = []
    for(i=arr.length-1; i>=0; i--){
        rvarr[arr.length-1-i] = arr[i]
    }
    return rvarr;
}
let arrz = ["id", "age", "name", 775]
console.log("reverseArray (arr):", reverseArray (arrz))
// =====================================================================
//Q 14- Write a function called countOccurrences that takes an array and
//a value, and returns the number of times the value appears in the
//array.
console.log("Q 14");
function countOccurrences(arr, v){
    let count = 0;
    for(i=0;i<arr.length;i++){
        if(arr[i]===v){
            count = count+1;         
        }
    }
    return count;
}
let arry = ["id", "age", "name", 775, 99, 775];
let v = 775
console.log("arry:", arry)
console.log("v:", v)
console.log("countOccurrences(arr, v):", countOccurrences(arry, v))



