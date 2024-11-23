// 1. დაწერეთ ფუნქცია, რომელიც იღებს ორ რიცხვს და აბრუნებს მათ ჯამს.

const sumOfTwo = (num1, num2) => {
    return (num1 + num2);
}

const num1 = 5, num2 = 10;
console.log(sumOfTwo(num1, num2));

// 2.შექმენით ფუნქცია, რომელიც აბრუნებს სტრინგის სიგრძეს.

function lengthOfstr(str){
    return str.length;
}

const str = "Hello World!";
console.log(lengthOfstr(str));

// 3. დაწერეთ ფუნქცია, რომელიც ამოწმებს, არის თუ არა რიცხვი ლუწი.

const isEven = function(number){
    if(number % 2 == 0) return (`${number} is EVEN number`);
    else return (`${number} is NOT EVEN number`);
}

const num3 = 10, num4 = 11;
console.log(isEven(num3));
console.log(isEven(num4));


// 4.შექმენით ფუნქცია, რომელიც იღებს მასივს და აბრუნებს მასივის პირველ ელემენტს.

const firstElementOfArray = function(array){
    return array[0];
}

const myArray = [1, 2, 3];
console.log(firstElementOfArray(myArray));

// 5. დაწერეთ ფუნქცია, რომელიც იღებს ობიექტს და აბრუნებს მისი ყველა ველის მნიშვნელობებს მასივის სახით.(გამოიყენეთ Object.values() ფუნქცია.

function valuesOfObj(obj) {
    return Object.values(obj);
}

const person = {
    firstName: "Nikoloz",
    age: 20,
    status: "student"
};

console.log(valuesOfObj(person));
