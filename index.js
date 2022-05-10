// console.log("I like apple");
// console.log("It is really nice!");
// window.alert("Thank you for signing up");
// let student = true;
// let age;
// age = 21;
// let firstName = "Timothy";
// console.log(age);
// console.log("Hello", firstName);
// document.getElementById("p1").innerHTML = "Hello" + firstName;
// document.getElementById("p2").innerHTML = "You are" + age + "old";
// document.getElementById("p2").innerHTML = "Enrolled: " + student;
// This is some lesson one and two above and it has to do with the basis of laravel


// the lesson below is about accepting user input through two ways.
/*let username = window.prompt("What is your Name?");
let usersname;
console.log(username);

document.getElementById("submit").onclick = function() {
    usersname = document.getElementById("name").value;
    console.log(usersname);
    document.getElementById("mylabel").innerHTML = "Hello " + usersname;

}*/
// type conversion= change of datatype of a value to another ( string, numbers, booleans)
// let age = window.prompt("Please enter your age:");
// age = Number(age);
// age = age + 1;
// console.log("Happy Birthday! You are ", age, "years old"); 

// let x;
// let y;
// let z;
// x = Number("3.14");
// console.log(x, typeof x);

// y = String(3.14);
// console.log(y, typeof y);

// z = Boolean("rice");
// console.log(z, typeof z);


// Constant is a variable which value can not change
// const PI = 3.14159;
// let radius;
// let circumference;
// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius);
// circumference = 2 * PI * radius;
// console.log("The circumference is:", circumference);

// javascript Math
// let x = 3.14;
// x = Math.round(x);
// x = Math.ceil(x);
// x = Math.pow(x, 2);
// x = Math.sqrt(x);
// x = Math.abs(x);

// console.log(x);
// let y = 5;
// let z = 9;
// let maximum;
// let minimum;
// maximum = Math.max(x, y, z);
// console.log("The maximum number is:", maximum);
// minimum = Math.min(x, y, z);
// console.log("The minimum number is:", minimum);
// this example I am going to find hypothenus;
// let a;
// let b;
// let c;
// a = window.prompt("Enter value of a:");
// b = window.prompt("Enter the value of b:");
// a = Number(a);

// b = Number(a);
// c = Math.pow(a, 2) + Math.pow(b, 2);
// c = Math.sqrt(c);
// console.log("Side C is:", c);
// The above code is the less advance one below will be the advance
// document.getElementById("caculate").onclick = function() {
//     a = document.getElementById("aTextBox").value;
//     a = Number(a);
//     b = document.getElementById("bTextBox").value;
//     b = Number(b);
//     c = Math.pow(a, 2) + Math.pow(b, 2);
//     c = Math.sqrt(c);
//     c = Math.round(c);
//     document.getElementById("cLabel").innerHTML = "The value of C is:" + c;
// }

// this series we are going to prepare a simple counter program
// let count = 0;
// document.getElementById("decreaseBtn").onclick = function() {
//     count -= 1;
//     document.getElementById("counter").innerHTML = count;
// }
// document.getElementById("resetBtn").onclick = function() {
//     count = 0;
//     document.getElementById("counter").innerHTML = count;
// }
// document.getElementById("increaseBtn").onclick = function() {
//     count += 1;
//     document.getElementById("counter").innerHTML = count;
// }


// This series is about game;



// let x;
// let y;
// let z;


// document.getElementById("rollButton").onclick = function() {
//     x = Math.floor(Math.random() * 6) + 1;


//     y = Math.floor(Math.random() * 6) + 1;



//     z = Math.floor(Math.random() * 6) + 1;

//     document.getElementById("xlabel").innerHTML = x;

//     document.getElementById("ylabel").innerHTML = y;

//     document.getElementById("zlabel").innerHTML = z;
// }


//useful string properties and methods

// let userName = "Tim Xperience";
// let phoneNumber = "231-231-453-234";
// console.log(userName.length);
// console.log(userName.charAt(0));
// console.log(userName.indexOf("i"));
// console.log(userName.lastIndexOf("i"));
// console.log(userName.trim())
// userName = userName.toUpperCase();
// userName = userName.toLowerCase();
// console.log(userName);
// phoneNumber = phoneNumber.replaceAll("-", "/");
// console.log(phoneNumber);


//slice() extracts a section of a string 
// and returnit as new string, 
// ;without modifying the original string

// let fullName = "Timoty Belekollie";
// let firstName;
// let lastName;
// lastName = fullName.slice(7);
// firstName = fullName.slice(0, 6);
// firstName = fullName.slice(0, fullName.indexOf(" "))
// lastName = fullName.slice(fullName.indexOf(" ") + 1);
// console.log(firstName);
// console.log(lastName);


//method chaining = calling one method after another in one continuous line of code
// let userName = "timothy";
// let letter = userName.charAt(0).toUpperCase();

// console.log(letter);


//If statement = a basic form of decision making 
//if a condition is true, then do something
//if not, then don't do it!
/*let age = 21;
if (age >= 18) {

    console.log("You are an adult!");
} else if (age < 0) {
    console.log("you haven't been born yet!");
} else if (age >= 65) {
    console.log("You are a senior citizen!");
} else {
    console.log("You are a child!");
}*/
// let online = true;
// if (online) {
//     console.log("you are online");
// } else { console.log("You are offline!"); }

//Check Properties in javascript

/*document.getElementById("myButton").onclick = function() {
const myCheckBo = document.getElementById("myCheckBox");
const visabtn = document.getElementById("visabtn");
const masterCardbtn = document.getElementById("masterCardbtn");
const paypalbtn = document.getElementById("paypalbtn");
if (myCheckBo.checked == true) {
    console.log("You are subscribed");

} else {
    console.log("You are NOT subscribed");

}
if (visabtn.checked) {
    console.log("You are paying with Visa Card!");
} else if (masterCardbtn.checked) {
    console.log("You are Paying with  Master Card!");
} else if (paypalbtn.checked) {
    console.log("You are paying with Paypal!");
} else {
    console.log("You have not selected any payment option, Please choose one to proceed!");
}

}*/

//Switch= statement that examines a value for a match against many toLowerCase /
// clause more efficient than many else if clause
/*let grade = "A";
switch (grade) {
    case "A":
        console.log("You did extremely excellent");
        break;
    case "B":
        console.log("You did very good");
        break;
    case "C":
        console.log("You did well");
    case "D":
        console.log("You did Passed");
        break;
    case "F":
        console.log("We are sorry, You fail");
    default:
        console.log("Your grade is not a letter grade");
}*/

//Give us the ability to check more than 1 condition currently
//&& AND(BOth coditions must be true)
//|| OR (Either condition can be ture)
// let temp = 15;
// let sunny = true;
// if (temp > 0 && temp < 30 && sunny) {
//     console.log("The weather is good !");
// } else {
//     console.log("The weather is not good at all");
// }


// not operators
/*if (!(x >= 12)) {
    console.log("You did well in the exam");
} else {
    console.log("You did not do any good");
}*/

//while Loop= repeat some code while some condition is true
//while loop could potentially become infinite loop;

/*let username = "";
while (username == "" || username == null) {
    username = window.prompt("Enter your username");
}
console.log("hello ", username);*/

/*For loops*/
/*let x;
for (x = 1; x <= 10; x++) {
    console.log(x);
}*/
/*break = breaks out of a loop entirely;
continue = skip an iteration of a loop*/
/*for (let x = 1; x <= 20; x++) {
    if (x == 13) {
        continue;
    }
    console.log(x);

}*/
/*let symbol = window.prompt("Enter a symbol to use ");
let rows = window.prompt("Please enter the number of rows");
let columns = window.prompt("Please enter the number prompt");
for (let i = 1; i <= rows; i++) {
    for (j = 1; j <= columns; j++) {
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
}*/

/*function = define code once, and use it manytimes
to perform some codes you simply call the function name*/

/*function happyBirthday() {
    console.log("happy birthday Jaire");
}

happyBirthday();
happyBirthday();*/

/*Return =
    return a value back to the place where you invoked a
function*/
/*let area;
let width;
let height;
width = window.prompt("Ente width");
height = window.prompt("Enter height:");

area = getArea(width, height);
console.log("The area is", area);

function getArea(width, height) {
    let result = width * height;
    return result;
}*/

/*ternary operator = shortcut for an'if else statement taking three operands

take 3 operands
1. a condition with
2 expression if true
3.expression if false
condition? exprifTrue :exprIfFalse*/

//let adult = checkAge(21);
//console.log(adult);

//function checkAge(age) {
// if (age >= 18) {
//     return true;
// } else {
//     return false;
// }
//return age >= 18 ? true : false;
//}

// checkWinner(false);

// function checkWinner(win) {
//     win ? console.log('You win') : console.log("You Loss");
// }
//Template literals = delimited with(')
//instead of double or single quotes allows embedded variables and expression
// let username = "Timothy";
// let items = 3;
// let total = 75;
// console.log("Hello", username);
// console.log("you have ", items, "items on your card");
// console.log("Your total is $ ", total);
// console.log();
// console.log("you have ", items, "items on your card");
// console.log("Your total is $ ", total);
//toLocalString()= returns a string a language sensitive representation of this
// number.toLocaleString(locale, {options});
//'locale= specify that language(undefined= default)
// 'options'= object with formatting options
// let myNum = 100;

//myNum = myNum.toLocaleString("en-Us"); //US English
// myNum= myNum.toLocaleString("hi-IN");//Hindi
// myNum=myNum.toLocaleString("de-DE") // Standard German

//myNum = myNum.toLocaleString("en-Us", { style: "currency", currency: "USD" });
//myNum = myNum.toLocaleString("hi-IN", { style: "currency", currency: "INR" });
//myNum = myNum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });

//myNum = myNum.toLocaleString(undefined, { style: "percent" });
//myNum = myNum.toLocaleString(undefined, { style: "unit", unit:"celsius" });
// myNum = myNum.toLocaleString(undefined, {
//     style: "unit",
//     unit: "celsius"
// });
// console.log(myNum);

// const answer = Math.floor(Math.random() * 10 + 1);
// let guesses = 0;
// document.getElementById("submitButton").onclick = function() {
//     let guess = document.getElementById("guessField").value;
//     guesses += 1;
//     if (guess == answer) {
//         alert(`${answer} is the # It took you ${guesses} guesses`);
//     } else if (guess < answer) {
//         alert("Too small!!");
//     } else {
//         alert("Too large");
//     }
// }

// temperature converter
// document.getElementById("submitButton").onclick = function() {
//     let temp;
//     if (document.getElementById("cButton").checked) {
//         temp = document.getElementById("textBox").value;
//         temp = Number(temp);
//         temp = tocelsius(temp);
//         document.getElementById("tempLabel").innerHTML = temp + "°C";
//     } else if (document.getElementById("fButton").checked) {
//         temp = document.getElementById("textBox").value;
//         temp = Number(temp);
//         temp = toFahrenheit(temp);
//         document.getElementById("tempLabel").innerHTML = temp + "°F";

//     } else {
//         document.getElementById("tempLabel").innerHTML = "Select a Unit";
//     }
// }



// function tocelsius(temp) {
//     return (temp - 32) * (5 / 9);
// }

// function toFahrenheit(temp) {
//     return temp * 9 / 5 + 32;
// }

//Array = think of it as a variable that store multiple values
// let fruits = ["apple", "banana", "orange"];
// fruits.push("coconut"); //add element
// fruits.pop(); //remove last element
// fruits.unshift("mango"); // this is going to add element to the beginning
// fruits.shift(); // this is going to remove element from the beginning.
// console.log(fruits);
//console.log(fruits[3]);
//let length = fruits.length;

// let index = fruits.indexOf("apple");
// console.log(index);
// console.log("The length of the array is", length);
//let prices = [12, 34, 60, 67, 89];
// for (let i = 0; i <= prices.length; i++) {
//     console.log(prices[i]);
// }
// for (price of prices) {
//     console.log(price);
// }
//let fruits = ["apple ", "banana", "pinapple", "mango", "coconut"];
// fruits = fruits.sort();
// fruits = fruits.sort().reverse();
// for (let fruit of fruits) {
//     console.log(fruit);
// }


//Two dimensional arrays is an array made of arrays
// let fruits = ["apple", "oranges", "banana"];
// let vegetables = ["carrots", "tomantoes", "onions", ];
// let meats = ["chickens", "eggs", "fish"];


// let groceryList = [fruits, vegetables, meats];
// groceryList[0][0] = "mangoes";
// for (let list of groceryList) {
//     for (let food of list) {
//         console.log(food);
//     }
// }


// spread operator = allows an iteratable such as an array or string to
// to be expanded in places where zero or more arguements are expected
// unpacks the elements
// let numbers = [1, 3, 5, 4, 6, 9];
// let maximumNumber = Math.max(...numbers);
// console.log(maximumNumber);

// let class1 = ["Timothy", "john", "julius"];
// let class2 = ["Sandi", "Paul", "flomo"];
// class1.push(...class2);
// console.log(...class1);

// Rest parameters= represents an indefinite number of 
//parameters(packs arguements into an array)

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;
// let f = 6;
// console.log(sum(a, b, c, d, e, f));

// function sum(...numbers) {
//     let total = 0;
//     for (let number of numbers) {
//         total += number;
//     }
//     return total;
// }


//callback= a function passed as an arguement to another function.

// sum(2, 3, displayDom);

// function sum(x, y, callBack) {
//     let result = x + y;
//     callBack(result);
// }

// function displayConsole(output) {
//     console.log(output);
// }

// function displayDom(output) {
//     document.getElementById("myLabel").innerHTML = output;
// }

// array.foreach()= executes a provided callback function once for each array element.
// let student = ["paul", "flomo", "julius", "bedell"];
// student.forEach(capitilize);
// student.forEach(print);

// function capitilize(element, index, array) {
//     array[index] = element[0].toUpperCase() + element.substring(1);




// }

// function print(element) {
//     console.log(element);
// }

//array.map()= executes a provided callback function once for each array
//element AND creates a new array
// let numbers = [1, 2, 3, 4, 5];
// let squares = numbers.map(square);
// let cubes = numbers.map(cube);
// squares.forEach(print);
// cubes.forEach(prints);

// function square(element) {
//     return Math.pow(element, 2);
// }

// function cube(element) {
//     return Math.pow(element, 3);
// }

// function print(element) {
//     console.log(element);
// }

// function prints(element) {
//     console.log(element);
// }
// array.filter()= creates a new array with all elements 
//that pa the test provided by a function
// let ages = [18, 16, 17, 19, 90];
// let adults = ages.filter(checkAge);
// adults.forEach(print);

// function checkAge(element) {
//     return element >= 18;
// }

// function print(element) {
//     console.log(element);
// }

// array.reduce()= reduces an array to a single value;
// let prices = [10, 34, 23, 54];
// let total = prices.reduce(checkOut);
// console.log(`The total is: $${total}`);

// function checkOut(total, element) {
//     return total + element;
// 

// Sorting Arrays in DescendingOrder and Ascending Order;
// let grades = [100, 50, 80, 90, 70];
// grades = grades.sort(descendingSort);
// grades = grades.sort(AscendingSort);
// grades.forEach(print);
// grades.forEach(prints);


// function descendingSort(x, y) {
//     return y - x;
// }

// function AscendingSort(x, y) {
//     return x - y;
// }

// function print(element) {
//     console.log(element);
// }

// function prints(element) {
//     console.log(element);
// }

// function expression = function  without a name( anonymous function)
// avoid polling the global scope with it. then forget about it.
// let greeting = function() {
//     console.log("Hello!");
// }
// greeting();


// let count = 0;
/*
function increaseCount() {
    count += 1;
    document.getElementById("myLabel").innerHTML = count;
};



function decreaseCount() {
    count -= 1;
    document.getElementById("myLabel").innerHTML = count;
};*/
// let count = 0;
// document.getElementById("increaseButton").onclick = function() {
//     count += 1;
//     document.getElementById("myLabel").innerHTML = count;
// };


// document.getElementById("decreaseButton").onclick = function() {
//     count -= 1;
//     document.getElementById("myLabel").innerHTML = count;
// };

// arrow function=compact alternative to a traditional function
// =>
// const greeting = function(userName) {
//     console.log(`hello ${userName}`);
// }
// greeting("Bro");

// this is an alternative to the traditional function above.
// const greeting = (userName) =>
//     console.log(`Hello ${userName}`);
// greeting("Bro");

// const percent = function(x, y) {
//     return x / y * 100;

// }
// console.log(`${percent(75, 100)}%`);

// const percent = (x, y) => x / y * 100;
// console.log(`${percent(75, 100)}%`);

/* This is an arrow function*/
/*let grades = [100, 50, 90, 60, 80, 70];
grades.sort((x, y) => y - x);

grades.forEach((element) =>
    console.log(element));*/

/* Array Elements shuffle*/
// let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
// shuffle(cards);
// // console.log(cards);
// cards.forEach(card => console.log(card));

// function shuffle(array) {
//     let currentIndex = array.length;
//     while (currentIndex != 0) {
//         let randomIndex = Math.floor(Math.random() * array.length);
//         currentIndex -= 1;
//         let temp = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temp;
//     }
//     return array;
// }

/* nested functions= Functions inside other functions.
Outer functions have access to inner function
Inner functions are "hidden" from outside
used in closures(future  video  topic); */
/*let userName = "Bro";
let userInbox = 0;
login();

function login() {
    displayUserName();
    displayUserInbox();

    function displayUserName() {
        console.log(`Welcome ${userName}`);
    }

    function displayUserInbox() {
        console.log(`You have ${userInbox} new Messages`);
    }
}*/

// Map= object that holds key-value pairs of any data type

// const store = new Map([
//     ["t-shirt", 20],
//     ["Jeans", 30],
//     ["socks", 10],
//     ["underwear", 50],
// ]);

// let shoppingCard = 0;
// shoppingCard += store.get("Jeans"); // get method
// shoppingCard += store.get("underwear"); // get method

// store.set("hat", 40); // set method to add new element to the map
// store.delete("hat"); // delete method to romove element from the map
// console.log(store.has("hat")); // has method to check whether you have setting item in your map
// console.log(store.size);
// console.log(`The total price is: $${shoppingCard}`);
// store.forEach((value, key) => console.log(`
//         ${ key }
//         $${ value }
//         `));

// finally made it to object oriented programming
//object= A group of properties and methods
// properties= what an object has
//method = what an object can do
//use . to access properties/methods

// the key work 'this' = reference to a particular object 
// the object depends on the  immediate  context.
// const car = {
//     model: "Mustang",
//     color: "Blue",
//     year: 2023,
//     drive: function() {
//         console.log(`You drive the ${this.model}`);
//     },
//     brake: function() {
//         console.log("You step on the brakes");
//     }

// }
// const car2 = {
//     model: "Corvette",
//     color: "red",
//     year: 2024,
//     drive: function() {
//         console.log(`You drive the  ${this.model} `);
//     },
//     brake: function() {
//         console.log("You step on the brakes");
//     }// this is a an object

// }
// console.log(car.model);
// console.log(car.color);
// console.log(car.year);
// console.log(car2.model);
// console.log(car.color);
// console.log(car.year);
// car2.drive();
// car2.brake();
// car.drive();
// car.brake();

// this.name = "myCoolWindow";
// console.log(this.name);

// class = a blueprint fo creating objects
// define what properties and method they have
// use a constructor for unique properties

// class Player {
//     score = 0;
//     pause() {
//         console.log("You pause the game");
//     }
//     exit() {
//         console.log("You exited the game");
//     }
// }

// const player1 = new Player();
// player1.score += 1;
// console.log(player1.score);
// console.log(player1.pause());
// console.log(player1.exit());
// // player1.pause();
// // player1.exit();
// const player2 = new Player();
// player2.score += 2;
// console.log(player2.score);
// player2.pause();
// player2.exit();


// Constructor= a special method of a class,
// accepts arguments and assigns properties.
// class Student {
//     constructor(name, age, gpa) {
//             this.name = name;
//             this.age = age;
//             this.gpa = gpa;
//         } // this is a class

//     study() {
//             console.log(`${this.name} is studying`);
//         } // this is a method in the class
// } // this is a  class
// const student1 = new Student("John", 24, 3.5); // object
// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.gpa);
// student1.study();





// static= belongs to the class, not the objects
// properties:useful for caches, fixe-configuration
// methods: useful for utility functions
// class Car {
//     static numberOfCars = 0;
//     constructor(model) {
//         this.model = model;
//         Car.numberOfCars += 1;
//     }
//     static startRace() {
//         console.log("3...2...1...GO!");
//     }

// }
// const car1 = new Car("Mustang");
// const car2 = new Car("Corvette");
// const car3 = new Car("BMW");
// const car4 = new Car("Ferari");
// console.log(Car.numberOfCars);
// Car.startRace();

// inheritance =a child class can inherit all 
//the methods and properties from another class

// class Animal {
//     alive = true;
//     eat() {
//         console.log(`Hey the ${this.name} is eating`);
//     }
//     sleep() {
//         console.log(`Hey the ${this.name} is sleeping`);
//     }

// }



// class Rabbit extends Animal {

//     name = "rabbit";

//     run() {
//         console.log(`Hey the ${this.name} is running`);
//     }
// }

// class Fish extends Animal {

//     name = "fish";

//     swin() {
//         console.log(`Hey the ${this.name} is swimming`);
//     }
// }



// class Hawk extends Animal {

//     name = "hawk";

//     fly() {
//         console.log(`Hey the ${this.name} is flying`);
//     }
// }

// const rabbit = new Rabbit();
// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.run();

// const fish = new Fish();
// const hawk = new Hawk();




// super= refers to the parent class.
// commonly used to invoke constructor


/*class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age);

        this.runSpeed = runSpeed;

    }
}
class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age);

        this.swimSpeed = swimSpeed;

    }
}
class Hawk extends Animal {

    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;

    }
}

const rabbit = new Rabbit("rabbit", 20, 10);
console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);


const fish = new Fish("snapper", 1, 10);
console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);
const hawk = new Hawk("hawk", 1, 2);
console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);*/



//get = binds an object property to  a function 
// when that property is accessed

// set = binds an object property to a function  
// when that property is assigned  a value

// class Car {
//     constructor(power) {
//         this._gas = 25;
//         this._power = power;
//     }
//     get power() {
//         return `${this._power}hp`;
//     }
//     get gas() {
//         return `${this._gas}L (${this._gas/50*100}%)`;
//     }
//     set gas(value) {
//         if (value > 50) {
//             value = 50;
//         } else if (value < 0) {
//             value = 0;
//         }
//         this._gas = value;
//     }
// }

// let car = new Car(400);

// car.gas =
//     console.log(car.power);
// console.log(car.gas);


// passing object to a function as an arguement

/*class Car {
    constructor(model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Corvette", 2024, "blue");
const car3 = new Car("Lambo", 2022, "yellow");
changeColor(car3, "gray");
displayInfo(car1);
displayInfo(car2);
displayInfo(car3);

function displayInfo(car) {
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);
}

function changeColor(car, color) {
    car.color = color;
}*/

/*class Car {
    constructor(model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }
    drive() {
        console.log(`You are driving ${this.model}`);
    }
}
const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Corvette", 2024, "blue");
const car3 = new Car("Lambo", 2022, "yellow");

const cars = [car1, car2, car3];
// console.log(cars[0].model);
// console.log(cars[1].model);
// console.log(cars[2].model);

// cars[0].drive();
// cars[1].drive();
// cars[2].drive();
startRace(cars);

function startRace(cars) {
    for (const car of cars) {
        car.drive();

    }
}*/

// anonymous objects = Objects withOut a name
// Not directly referenced
// Less syntax. No need for unique names
/*class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;

    }


}
let cards = [
    new Card("A", "Hearts"), new Card("A", "Spades"), new Card("A", "Diamonds"), new Card("A", "Clubs"), new Card("2", "Hearts"), new Card("2", "Spades"), new Card("2", "Diamonds"), new Card("2", "Clubs")
];
console.log(cards[0].value + cards[0].suit);
cards.forEach(card => console.log(`${card.value} ${card.suit}`));*/

/* error=object with a desciption of 
 something went wrong 
  can't open  a file 
   loss connection
    User types incorrect input
     TypeError

*/

/*try {
    let x = window.prompt("Enter a number");
    x = Number(x);
    if (isNaN(x)) throw "This wasn't a number!";
    if (x == " ") throw "That was empty!";
    else { console.log(`${x} is a number`); }

} catch (error) {
    console.log(error);
} finally {
    console.log("This always executes");
} // the finally blog always execute no matter what.*/




/*SetTimout()= invokes a function after a number of milleseconds
asynchronous function(doesn't pause execution);*/

/*
let item = "crptocurrency"
let price = 420.69;

let timer1 = setTimeout(firstMessage, 3000, item, price);
let timer2 = setTimeout(secondMessage, 4000, item, price);
let timer3 = setTimeout(thirdMessage, 5000, item, price);

function firstMessage(item, price) {
    alert(`Buy this ${item} for ${price}`);
}

function secondMessage() {
    alert(`This is not a scam`);
}

function thirdMessage() {
    alert(`Do it!`);
}
document.getElementById("myButton").onclick = function() {
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`Thanks for buying ${item} for ${price}`);
}*/



/*functio()= invokes a function repeatedly after a numebr of milliseconds
asynchronous

function(doesnot pause execution of the program) */
/*let count = 0;
let max = window.prompt("count up to what number?");
max = Number(max);
const myTimer = setInterval(countUp, 3000);

function countUp() {
    count += 1;
    console.log(count);
    if (count >= max) {
        clearInterval(myTimer);
    }
}*/

/*data objects is use to work with dates and times */
let date = new Date();
/*date.setFullYear(2024);
date.setMonth(11);
date.setDate(31);
date.setHours(12);
date.setMinutes(1);
date.setSeconds(30);
//date = date.toLocaleString();*/
//console.log(date);
/*document.getElementById("time").onclick = function() {
    document.getElementById("myTime").innerHTML = formatTime(date)
}


document.getElementById("myTime").innerHTML = formatTime(date);

function formatDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();
    return `${day}/ ${month}/${year}`;
}

function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hours >= 12 ? "pm" : "am";
    hours = (hours % 12) || 12;
    return `${hours}:${minutes}:${seconds}${amOrPm}`;
}*/
/*let myLabel = document.getElementById("myLabel");
update();
setInterval(update, 1000);

function update() {
    let date = new Date();
    myLabel.innerHTML = date;

    function formatTime() {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();;
        let amOrpm = hours >= 12 ? "PM" : "AM";
        hours = (hours % 12) || 12;
        hours = formatZeroes(hours);
        minutes = formatZeroes(minutes);
        seconds = formatZeroes(seconds);
        return `${hours}:${minutes}:${seconds} ${amOrpm}`;
    }

    function formatZeroes(time) {
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }
}*/
// synchronous code= In an ordered sequence
// ste-bu-step linear instruction
// ( start now, finish now);



// asynchronous code= out of sequence.
// Ex. Acess a database
//fetch a file
// tasks that take time
// (start now, finish something later)


/*console.log("Start Now");
console.log("This step is synchronous");
console.log("END");*/
// This is Asychronus 
/*console.log("Start Now");
setTimeout(() => console.log("This is asychronous method"), 5000);

console.log("END");*/


//console.time()= starts a timer you can use 
// to track how long an operation takes
// Given eac time a unique name

/*console.time("Response Time");
setTimeout(() => console.log("Hello!"), 3000);
//alert("Click the ok button");
console.timeEnd("Response Time");*/

// promise = object that     encapsulates the result of an asychronous operation
// let asynchronous methods return values sychronous methods
// "I promise to return something in the  future"

// the STAte is 'pending' then: fulfilled' or  'rejected'
// the Result is what can be returned
// 2 parts producing & consuming
/*const promise = new Promise((resolve, reject) => {
    let fileLoaded = true;
    if (fileLoaded) {
        resolve("File Loaded successfully");
    } else {
        reject("The the file did not load successfully");
    }
});

promise.then(value => console.log(value))
    .catch(error => console.log(error));*/


// creating another promise;
/*const wait = time => new Promise(resolve => {
setTimeout(resolve, 5000);
});

wait(3000).then(() => console.log("Thanks for waiting!"));*/

// async= makes a funtion return a Promise


/*async function loadFile() {
    let fileLoaded = true;
    if (fileLoaded) {
        return "File Loaded successfully";
    } else {
        throw "The  file did not load successfully";
    }
}

loadFile().then(value => console.log(value))
    .catch(error => console.log(error));*/

// await = makes an async function wait for a promise
/*async function loadFile() {
    let fileLoaded = false;
    if (fileLoaded) {
        return "File Loaded successfully";
    } else {
        throw "The file did not load successfully";
    }
}

async function startProcess() {
    try {
        let message = await loadFile();
        console.log(message);
    } catch (error) {
        console.log(error);

    }


}
startProcess()*/

// The idea behind a module is that it's a file of reusable code  
// We can import of pre-written code to use whenever 
// great for any general utility values and functions 
// Helps to make your code more reusable and maintanable 
// Think of modules as seperate chapters of a book

/*import {
    PI,
    getCircumference,
    getArea,
} from "./math_util.js";*/

//import * as M from "./math_util.js";// this code is the same as the one above just that one has name space for variable and function that are in that particular module.
/*console.log(M.PI);

let circumference = M.getCircumference(10);
console.log("The circumference is:", circumference);
let area = M.getArea(12);
console.log(`The area is ${area}`);*/
// Dom= Document object Model(API)
// An interface for changing the content of a page
//console.log(document);
//console.dir(document);
//console.log(document.title);
// console.log(document.URL);
// document.title = "Javascript full course ";
// document.body.style.backgroundColor = "skyblue  ";
// document.getElementById("myDiv").innerHTML = "Hello";
// document.getElementById("myDiv").style.color = "red";

/*let title = document.getElementById("title");
title.style.background = "skyblue";
title.style.color = "white";

let fruits = document.getElementsByName("fruits");
fruits.forEach(fruit => {
    if (fruit.checked) {
        console.log(fruit.value);
    }
});*/

// let vegetables = document.getElementsByTagName("li");
// vegetables[0].style.background = "lightgreen";
// vegetables[1].style.background = "pink";
// vegetables[2].style.background = "yellow";
// let desserts = document.getElementsByClassName("desserts");
// desserts[0].style.background = "red";
// desserts[1].style.background = "orange";
// desserts[2].style.background = "purple";


/*let element = document.querySelector("[for]");
element.style.background = "purple";
element.style.color = "gray";*/

//let elements = document.querySelectorAll("[for]");
// element.style.background = "purple";
// element.style.color = "gray";
// elements.forEach(element => {

//     element.style.background = "purple";
//     element.style.color = "gray";

// });


// let element = document.querySelector("#vegetables");
// let children = Array.from(element.children);

// children.forEach(child => child.style.background = "yellow")





// .firstElementChild
//.lastElementChild
// .parentElement
// .nextElementSibling
//.previousElementSibling
//.children[]
//Array.from(.children)


//add change HTML elements
// .innerHTML(vulnerable to XSS attacks);
//.textContent(more secure)
// const nameTag = document.createElement("h1");
// nameTag.textContent = window.prompt("Enter your name:");
// document.body.append(nameTag);
// const myList = document.querySelector("#fruit");
// const listItem = document.createElement("li");
// listItem.textContent = "mango";
//myList.append(listItem);
//myList.prepend(listItem);
// myList.insertBefore(listItem, myList.getElementsByTagName("li")[1])

// const title = document.getElementById("myTitle");
// title.style.backgroundColor = "green";
// title.style.color = "rbg(50,200,250)";
// title.style.fontFamily = "consolas";
// title.style.textAlign = "center";
// title.style.border = "2px solid black";
// title.style.display = "block";


// even lister
//const element = document.getElementById("myDiv");
//const element = document.getElementById("myButton");
//element.onclick = dosomething;
//const element = document.body;
//element.onload = dosomething;
//element.onchange= dosomething;
//const element = document.getElementById("myText");

//element.onmouseover = dosomething;
//element.onmouseout = dosomething;
//element.onmousedown = dosomething;
//element.onmouseup = dosomethingElse;

// function
// dosomething() {
//     element.style.backgroundColor = "red";


// }

// function dosomethingElse() {
//     element.style.backgroundColor = "lightblue";
// }



// .addEventListener(event, function, useCapture)
// You can add many event handlers to one element.
// Even the same that invokes different functions
//const innerDiv = document.getElementById("innerDiv");
//const outerDiv = document.getElementById("outerDiv");
//innerDiv.addEventListener("mouseover", changeRed);
//innerDiv.addEventListener("mouseout", changeBlue);

// function changeRed() {
//     innerDiv.style.backgroundColor = "red";
// }

// function changeBlue() {
//     innerDiv.style.backgroundColor = "lightblue";
// }
// innerDiv.addEventListener("click", changeBlue);
// outerDiv.addEventListener("click", changeBlue, true);

// function changeBlue() {
//     alert(`You selected ${this.id}`);
//     this.style.backgroundColor = "lightgreen";
// }

// const myButton = document.querySelector("#myButton");
// const myImg = document.querySelector("#myImg");

// myButton.addEventListener("click", () => {

//     if (myImg.style.display == "none") {
//         myImg.style.display = "block";
//     } else {
//         myImg.style.display = "none";
//     }
// })
// const myDiv = document.getElementById("myDiv");
// window.addEventListener("keydown", move);
// let x = 0;
// let y = 0;

// function move(event) {
//     switch (event.key) {
//         case "ArrowDown":
//             y += 5;
//             myDiv.style.top = y + "px";
//             break;
//         case "ArrowUp":
//             y -= 5;
//             myDiv.style.top = y + "px";
//             break;
//         case "ArrowRight":
//             x += 5;
//             myDiv.style.left = x + "px";
//             break;
//         case "ArrowLeft":
//             x -= 5;
//             myDiv.style.left = x + "px";
//             break;
//     }
// }

// const myButton = document.getElementById("myButton");
// const animation = document.getElementById("myDiv");
// myButton.addEventListener("click", begin);

// function begin() {
//     let timerId = null;
//     let scaleX = 1;
//     let scaleY = 1;
// let x = 0;
// let y = 0;
// timerId = setInterval(frame, 5);
// let degrees = 0;
// function frame() {
//     if (y >= 200 || x >= 200) {
//         clearInterval(timerId);
//     } else {
//         y += 1;
//         x += 1;
//         animation.style.top = y + "px";
//         animation.style.left = x + "px";
//     }
// }// this function makes the div move digonally.


// function frame() {
//     if (x >= 200 || y >= 200) {
//         clearInterval(timerId)
//     } else {
//         degrees += 5;
//         x += 2;
//         y += 2;
//         animation.style.left = x + "px";
//         animation.style.top = y + "px";
//         animation.style.transform = "rotateZ(" + degrees + "deg)"
//     }
//     function frame() {
//         if (scaleX >= 2 || scaleY >= 2) {
//             clearInterval(timerId)
//         } else {
//             scaleX += 0.01;
//             scaleY += 0.01;
//             animation.style.transform = "scale(" +
//                 scaleX + "," +
//                 scaleY + ")";
//         }

//     }
// }


// Canvas API= a means for drawing graphics
// use for animations, games, data visualization


//let canvas = document.getElementById("myCanvas");
//let context = canvas.getContext("2d");

//how to draw line on the canvas
// context.strokeStyle = "green";
// context.lineWidth = 10;
// context.beginPath();
// context.moveTo(0, 0);
// context.lineTo(250, 250);
// context.lineTo(250, 500);
// context.moveTo(500, 0);
// context.lineTo(250, 250);
// context.stroke();

//Draw Triangle
// context.strokeStyle = "green";
// context.fillStyle = "red";
// context.lineWidth = 10;
// context.beginPath();
// context.moveTo(250, 0);
// context.lineTo(0, 250);
// context.lineTo(500, 250);
// context.lineTo(250, 0);
// context.stroke();
// context.fill();

// Draw  Rectangles
/*context.lineWidth = "2";
context.fillStyle = "green";
context.fillRect(0, 0, 250, 250);
context.strokeStyle = "yellow";
context.strokeRect(0, 0, 250, 250);


context.lineWidth = "2";
context.fillStyle = "orange";
context.fillRect(0, 250, 250, 250);
context.strokeStyle = "yellow";
context.strokeRect(0, 250, 250, 250);

context.lineWidth = "2";
context.fillStyle = "purple";
context.fillRect(250, 250, 250, 250);
context.strokeStyle = "yellow";
context.strokeRect(250, 250, 250, 250);


context.lineWidth = "2";
context.fillStyle = "blue";
context.fillRect(250, 0, 250, 250);
context.strokeStyle = "yellow";
context.strokeRect(250, 0, 250, 250);*/

// Draw Circle
// (x,y, r sAngle, eAngle, counterclockwise);
/*context.fillStyle = "orange";
context.lineWidth = 10;
context.strokeStyle = "darkblue";
context.beginPath();
context.arc(250, 250, 200, 0, 2 * Math.PI);
context.stroke();
context.fill();*/

// Draw Text
/*context.font = "50px MV Boli";
context.fillStyle = "Brown";
context.textAlign = "center"
context.fillText("YOU WIN!", canvas.width / 2, canvas.height / 2);*/

// window= interface used to talk to the web 
// the DOM is  a property of the window

//console.dir(window);

//console.log(window.outerWidth);
//console.log(window.outerHeight);
//console.log(window.scrollX);
//console.log(window.scrollY);

//console.log(window.location.href);
//window.location.href = "https://google.com";
//console.log(window.location.hostname);
//console.log(window.location.pathname);

//const myButton = document.querySelector("#myButton");
//myButton.addEventListener("click", () => window.open("tboy.belekollie@facebook.com"));
//myButton.addEventListener("click", () => window.close("tboy.belekollie@facebook.com"));
//myButton.addEventListener("click", () => window.print());
//window.alert("hello");
//window.confirm("Press ok to continue");
//let age = window.prompt("Enter your age");
//if (age <= 18) {
//  window.alert("You must be 18+ to visit this site");
//} else {
//window.alert("You can access the site because you are an adult");
//}

// cookie= a small text file stored on your computer use
// to remember information about the user
// saved in name =value pairs
//console.log(navigator.cookieEnabled);
//document.cookie = "firstName=SpongeBob; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
//console.log(document.cookie);
//deleteCookie("email");
//deleteCookie("firstName");
//deleteCookie("lastName");
//setCookie("email", "belekollie@gmail.com", 365);
//console.log(document.cookie);

// const firstText = document.querySelector("#firstText");
// const lastText = document.querySelector("#lastText");
// const submitBtn = document.querySelector("#submitBtn");
// const cookieBtn = document.querySelector("#cookiesBtn");
// submitBtn.addEventListener("click", () => {
//     setCookie("firstName", firstText.value, 365);
//     setCookie("lastName", lastText.value, 365);
// });
// deleteCookie("firstName");
// deleteCookie("lastName");

// cookieBtn.addEventListener("click", () => {
//     firstText.value = getCookie("firstName");
//     lastText.value = getCookie("lastName");
// });



// setCookie("firstName", "John", 365);
// setCookie("lastName", "SquarePants", 365);
// console.log(getCookie("firstName"));
// console.log(getCookie("lastName"));

// function setCookie(name, value, daysToLive) {
//     const date = new Date();
//     date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
//     let expires = "expires=" + date.toUTCString();
//     document.cookie = `${name}=${value};${expires};path=/`;

// }

// function deleteCookie(name) {
//     setCookie(name, null, null);
// }

// function getCookie(name) {
//     const cDecoded = decodeURIComponent(document.cookie);
//     console.log(cDecoded);
//     const cArray = cDecoded.split("; ");
//     //console.log(cArray);
//     let result = null;
//     cArray.forEach(element => {
//         if (element.indexOf(name) == 0) {
//             result = element.substring(name.length + 1);

//         }
//     })
//     return result;
// }

// const timeDisplay = document.querySelector("#timeDisplay");
// const startBtn = document.querySelector("#startBtn");
// const pauseBtn = document.querySelector("#pauseBtn");
// const resetBtn = document.querySelector("#resetBtn");

// let startTime = 0;
// let elapsedTime = 0;
// let currentTime = 0;
// let paused = true;
// let intervalId;
// let hrs = 0;
// let mins = 0;
// let secs = 0;

// startBtn.addEventListener("click", () => {
//     if (paused) {
//         paused = false;
//         startTime = Date.now() - elapsedTime;
//         intervalId = setInterval(updateTime, 1000);
//     }

// });
// pauseBtn.addEventListener("click", () => {
//     if (!paused) {
//         paused = true;
//         elapsedTime = Date.now() - startTime;
//         clearInterval(intervalId);
//     }
// });
// resetBtn.addEventListener("click", () => {

//     paused = true;
//     clearInterval(intervalId);
//     startTime = 0;
//     elapsedTime = 0;
//     currentTime = 0;
//     hrs = 0;
//     mins = 0;
//     secs = 0;
//     timeDisplay.textContent = "00:00:00";
// });

// function updateTime() {
//     elapsedTime = Date.now() - startTime;
//     secs = Math.floor((elapsedTime / 1000) % 60);
//     mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
//     hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60)

//     secs = pad(secs);
//     mins = pad(mins);
//     hrs = pad(hrs);
//     timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

//     function pad(unit) {
//         return (("0") + unit).length > 2 ? unit : "0" + unit;
//     }
// }


/*const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelector(".choiceBtn");
let player;
let computer;
let result;


choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player:${player}`;
    computerText.textContent = `computer:${computer}`;
    resultText.textContent = checkWinner();

}));

function computerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch (randNum) {
        case 1:
            computer = "ROCK";
            break;

        case 2:
            computer = "PAPER";
            break;

        case 3:
            computer = "SCISSORS";
            break;
    }
}

function checkWinner() {
    if (player == computer) {
        return "Draw!";
    } else if (computer == "ROCK") {
        return (player == "PAPER") ? "You Win!" : "You loss";
    } else if (computer == "PAPER") {
        return (player == "SCISSORS") ? "You Win!" : "You loss";
    } else if (computer == "SCISSORS") {
        return (player == "ROCK") ? "You Win!" : "You loss";
    }
}*/

const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
let options = ["", "", "", "", "", "", "", "", "", ];
let currentPlayer = "X";
let running = false;
initializeGame();


function initializeGame() {
    cells.forEach(cell => cell.addEventListener("click", cellClicked))
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s your turn`;
    running = true;
}

function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex");
    if (options[cellIndex] != "" || !running) {
        return;
    }
    updateCell(this, cellIndex);
    changePlayer();
    // checkWinner();

}

function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer() {
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s your turn`;
}


function checkWinner() {
    let roundWon = false;
    for (let i = 0; i < winConditions.length; i += 1) {
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];
        if (cellA == "" || cellB == "" || cellC == "") {
            continue;
        }
        if (cellA == cellB && cellB == cellC) {
            roundWon = true;
            break;
        }
    }
    if (roundWon) {
        statusText.textContent = `${currentPlayer} Wins!`;
        running = false;
    } else if (!options.includes("")) {
        statusText.textContent = `Draw`;
        running = false;

    } else {
        changePlayer();
    }
}

function restartGame() {}