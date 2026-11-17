//Part 1

// //1. Convert the string "123" to a number and add 7. 
// let str = "123";
// let num = Number(str);
// console.log(num + 7);


// //2. Check if the given variable is falsy and return "Invalid" if it is. 
// function checkFalsy(value){
//     if(Boolean(value)===0){
//         return "Invalid";
//     }
//     else
//         return "Valid";
// }
// console.log(checkFalsy(5));


// //3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue
// for (let i=1; i<=10; i ++){
//     if(i % 2 == 0 ){
//         continue;
//     }
//     console.log(i);
// }


// //4. Create an array of numbers and return only the even numbers using filter method.
// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.filter((nums , index)=>{
//     return nums %2  === 0;
// })
// console.log(result);


// //5. Use the spread operator to merge two arrays, then return the merged array.
// const arr1=[1,2,3];
// const arr2=[4,5,6];
// result=[...arr1,...arr2];
// console.log(result);


// //6. Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday).
// function getDay(days){
//     switch (days) {
//     case 1:
//         return "Sunday";
        
//     case 2:
//         return "Monday";  
        
//     case 3:
//         return "Tuesday";
         
//     case 4:
//         return "Wednesday"; 
        
//     case 5:
//         return "Thursday"; 
        
//     case 6:
//         return "Friday"; 
        
//     case 7:
//         return "saturday";

//     default:
//         return "Invalid";       
          
// }
// }
// console.log(getDay(1));


// //7. Create an array of strings and return their lengths using map method
// const arr=["a", "ab", "abc"];
// const result = arr.map((element , index ) => {
//     return element.length;
// });
// console.log(result);


// //8. Write a function that checks if a number is divisible by 3 and 5.
// function checkDivisibility(num){
//     if (num % 3 === 0 && num % 5 === 0){
//         return "Divisible by both";
//     }
//     else
//         return "Not Divisible";
      
// }
// console.log(checkDivisibility(15));


// //9. Write a function using arrow syntax to return the square of a number
// const squaredNumber = num => num * num;
// console.log(squaredNumber(5));


// //10. Write a function that destructures an object to extract values and returns a formatted string.
// function getPerson({name , age}){
//     return `${name} is ${age} years old`;
// }
// const person ={
//     name:'John',
//     age: 25
// };
// console.log(getPerson(person));


// //11. Write a function that accepts multiple parameters (two or more) and returns their sum. 
// function sum(...nums){
//     let result = 0;
//     for(let num of nums){
//         result += num;
//     }
//     return result;
// }
// console.log(sum(1, 2, 3, 4, 5));


// //12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. 
// function getSuccessMessage() {
//     return new Promise((resolve , reject) => {
//     setTimeout(()=>{
//         resolve("Success");
//     },3000)
//     });
// }
// getSuccessMessage().then((message)=>{
//     console.log(message);
// });


// //13. Write a function to find the largest number in an array. 
// function getLargestNumber(arr){
//     return Math.max(...arr);
// }
// console.log(getLargestNumber([1,3,7,2,4]));


// //14. Write a function that takes an object and returns an array containing only its keys.
// function getObjectKeys(obj){
//     return Object.keys(obj);
// }
// const person = {
//     name: "John",
//     age: 30
// };
// console.log(getObjectKeys(person));


// //15. Write a function that splits a string into an array of words based on spaces.
// function splitStringToArray(str){
//     return str.split(" ");
// }
// const str1 = "The quick brown fox";
// console.log(splitStringToArray(str1));


//Part 2


//1. What is the difference between forEach and for...of? When would you use each?
//forEach an array method , execute a function for each array element . We use it when we execute a function on every of an array, won't need to stop the loop

//for of is a loop that works with any iterable , We use it when we need to stop the loop , when we need to skip an element


// //2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples.
// //Hoisting:means you can use variables and functions before they are declared in the code.
// console.log(x);
// var x=20;

// sayHello();
// function sayHello(){
//     console.log("Hello");
// }


// //TDZ:TDZ is the period between the start of a scope and the point where a let or const variable is declared.
// console.log(x);
// let x = 20;
// console.log(x)




//3. What are the main differences between == and ===? 
//==  it checks value
//=== it checks both value and datatype


//4. Explain how try-catch works and why it is important in async operations.
// The code might throw an error is palced inside try , if an error occurs execution jumps  to the catch block . if no error occurs the catch block is ignored'
//Async operations can fail after the code has already running and without try-catch , these errors become unhandled 


// //5. What’s the difference between type conversion and coercion? Provide examples of each
// //type conversion: when the developer convert a value from one type to another using built-in functions or methods.

// let str = "123";
// let num = Number(str);


// let num = 123;
// let str = String(num);


// //type coercion:when JavaScript automatically converts types for you

// console.log(5 + "5");
// console.log(true + 4);