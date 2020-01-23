


// #3
const cars = ["Ford","Honda","Volks","Toyota"];
console.log(cars.length); 

//#4
const moreCars = ["Dodge","Honda","Chevy","Subaru"];
const totalCars = cars.concat(moreCars);
console.log("#4 " + totalCars);

// #5
console.log("#5 Index of Honda is " + totalCars.indexOf('Honda'));
console.log("#5 lastIndex of Ford is " + totalCars.lastIndexOf('Honda'));


// #6
let stringOfCars = totalCars.join();
console.log("Join #6 " +stringOfCars);

// #7
totalCars2 = stringOfCars.split(',');
console.log("Split #7 " +totalCars2);

// #8
const carsInReverse = totalCars.reverse();
console.log("Reverse #8 " + carsInReverse);

// #9
console.log("Sort #9 " + carsInReverse.sort());

//#10
const removedCars = carsInReverse.slice(2,5);
console.log("Slice #10 " + removedCars);

// #11
console.log(carsInReverse);
  console.log("Splice #11 " + carsInReverse.splice(2,3,"Ford", "Honda"));
console.log(carsInReverse);


// 12 .push()
  console.log("Push #12 "+ carsInReverse.push(removedCars));console.log(carsInReverse);

// #13 .pop()console.log("Pop #13 " + carsInReverse.pop());
console.log(carsInReverse);

// #14 .shift()
console.log("Shift #14 " + carsInReverse.shift());
console.log(carsInReverse);


// #15 .unshift()
console.log("Unshift # 15 " + carsInReverse.unshift("Fiat"));
console.log(carsInReverse);

// #16 
// .forEach()
// Create an array called numbers with the following items: 23, 45, 0, 2 Write code that will add 2 to each item in the array numbers.
const numArry = [23, 45, 0, 2];
const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];


const addTwo = (num)=>{
  num = num + 2;
  console.log(num);
};

numArry.forEach(x => addTwo(x));
console.log();  

numbers.forEach(x => addTwo(x));
console.log(); 


// .forEach() requires a function to be passed into it as its first argument. Build a function that will add 2 and then use .forEach() to pass each number into your freshly built function. const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]


// let checkStr = "blaBLBLa";
// checkStr = checkStr.trim()
// checkStr = checkStr.toLowerCase();

// console.log(checkStr);

// const checkArry = checkStr.split();

// console.log(checkArry);

// checkStr.foreach( )
// 