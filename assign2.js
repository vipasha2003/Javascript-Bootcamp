// Day 2 Bootcamp
// The loops, conditionals and Functions
// Assignment 2

//1: +,-,0

function number(n){
    if(n>0){
       console.log("POSITIVE")
    }
    else if(n<0){
       console.log("NEGATIVE")
    }
    else{
        console.log("ZERO")
    }
}

number(0)
number(10)
number(-10)

//2: Factorial

function factorial(a) 
{ 
    let ans = 1; 
    
    if(a === 0)
        return 1;
    for (let i = 2; i <= a; i++) 
        ans = ans * i; 
    return ans; 
}

console.log(factorial(4));
console.log(factorial(9));

//3: Larger number

function larger(a,b){
    if(a>b){
        console.log(a,"is greater than",b)
    }
    else{
        console.log(b,"is greater than",a)
    }
}

larger(3,4)

//4: Palindrome

function palindrome(str){
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}
let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";
 
console.log(palindrome(str1));
console.log(palindrome(str2));
console.log(palindrome(str3));

//5: Prime Number
 
const Number = parseInt(prompt('Enter number: '));

console.log(`All the prime numbers less than or equal to ${Number} are:`);

for (let i =0; i <= Number; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}

//6: Calculator

function calculator(a,b,c){
    if(c=='+'){
        console.log(a+b)
    }
    else if(c=='-'){
        console.log(a-b) 
    }
    else if(c=='*'){
        console.log(a*b)
    }
    else if(c=='/'){
        console.log(a/b)
    }
    else{
        console.log("error")
    }
}

calculator(7,7,'-')
calculator(6,2,'/')
calculator(3,3,'+')
calculator(4,5,"*")


//7: Vowels Count

function countVowel(str) { 

    const count = str.match(/[aeiou]/gi).length;

    return count;
}

const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);


//8: Perfect Number

function is_perfect(number) {
    var temp = 0;
  
    for (var i = 1; i <= number / 2; i++) {
      if (number % i === 0) {
        temp += i;
      }
    }
  
    if (temp === number && temp !== 0) {
      console.log("It is a perfect number.");
    } else {
      console.log("It is not a perfect number.");
    }
  }
  
  is_perfect(28); 
  is_perfect(15);
  
//9:  Fibonacci series

function fibonacci(number) {
    let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
    }
  
  fibonacci(6)


//10:  Multiplication Table

function table(number) {

console.log('Multiplication Table:');

for (let i = 1; i <= 10; i++) {
    console.log(number * i)
    }
}
    table(6)