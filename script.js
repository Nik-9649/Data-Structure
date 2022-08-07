"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]; // a part of enhanced object literals

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
    starterIndex = Math.trunc(Math.random() * 3 + 1),
    mainIndex = Math.trunc(Math.random() * 2 + 1),
    address,
    time = `06:00`,
  }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicous pasta with ${ing1}, ${ing2}, and ${ing3}!!`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*




// 1: Destructuring objects
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

// 1.1: Renaming destructured objects
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

// 1.2: Setting default objects for dectructured categories
const {menu = [], starterMenu = [], mainMenu = []} = restaurant;
console.log(menu, starterMenu, mainMenu);

// 1.3: Mutating objects 
let a = 111;
let b = 999;
const obj = {a: 12, b: 34, c:44};
({a, b} = obj);
console.log(a, b);

// 2: Destructuring nested objects
// 2.1: Renaming the inner object
const {fri: {open: o, close: c}} = openingHours;
console.log(o, c);


let [first, second] = restaurant.categories;
console.log(first, second);

let [main, , secondordary] = restaurant.categories;
let temp = main;
main = secondordary;
secondordary = temp;
console.log(main, secondordary);

[main, secondordary] = [secondordary, main];
console.log(`Destructuring version:`, main, secondordary);



// 3: Receiveing 2 return values from a function usinng Data Destructuring
console.log(restaurant.order(2, 0));

const [starter, main] = restaurant.order(2, 0);
console.log(starter +',', main);

// 4: Receving values from a nested array
const nested = [2, 5, [3, 13]];
const [i, , j] = nested;
console.log(i, j);

const [x, , [y, z]] = nested;
console.log(x, y, z);

// 5: Destructuring values that dont exist in the array
let [t, v, a] = [8, 15];
console.log(t, v, a);

[t=1, v=1, a=1] = [8, 15];
console.log(t, v, a);

// 6: Using spread operator with objects
const newRestaurant = {
  foundingYear: 1998,
  ...restaurant,
  founder: 'Guillermo',
}

console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Restorante Roma';
console.log(newRestaurant.name);
console.log(restaurantCopy.name);


// Real world example
const ingredients = [
  prompt('Please pass in the first ingredient of your pasta'),
  prompt('Please pass in the second ingredient of your pasta'),
  prompt('Please pass in the third ingredient of your pasta'),  
];
restaurant.orderPasta(...ingredients);



restaurant.orderDelivery({
  time: `23:30`,
  address: `Via del Sole, 21`,
  mainIndex: 1,
  starterIndex: 3,
}
)

restaurant.orderDelivery({
  address: `Via del Sole, 21`,
}
)


// 6.1: Spreading Arrays
const arr = [7, 8, 9, 10,];
const newBadArr = [1, 2, 3, 4, 5, 6, arr[0], arr[1], arr[2], arr[3],];

const newGoodArr = [1, 2, 3, 4, 5, 6, ...arr];
console.log(`New Good Arr:`, newGoodArr);

console.log(...newGoodArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// 6.2: Copying Array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// 6.3: Joining two arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// 6.4: Iterables
const me = 'nik';
console.log(...me);

// 7: Rest operator

// Spread opererator because using on the RIGHT side of the =
const arr = [1, 2, ...[3, 4]];

// Rest operator because using on the left side of the =
const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7];
console.log(a, b, ...others);

// 7.1: Using the Rest operator on both sides of the =
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, ...otherFood);

// 7.2: Using the Rest operator on objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

// 8: The Nullish Coalescing operator (??)
restaurant.numberOfGuests = 0;
const guests = restaurant.numberOfGuests || 10;
console.log(guests);

// 8.1: Nullish: null values and undefined values (NOT 0 or '')
const correctGuests = restaurant.numberOfGuests ?? 10;
console.log(correctGuests);

// 8.2: Nullish Coalescing Operator Assignment
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1);
console.log(rest2);


const add = function(...numbers) {
  // console.log(...numbers);
  let sum = 0;
  for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(1, 2 ,4 , 5, 7, 8, 9, 10);

// 9: Short Circuiting 
console.log(`---OR---`);
console.log(3 || 'Short circut');
console.log('' || 'Short circuiting');
console.log(true || 0);
console.log(undefined || null);

const guests = restaurant.numberOfGuests ? restaurant.numberOfGuests : 10;
console.log(guests);

const guests1 = restaurant.numberOfGuests || 0;
console.log(guests1);
console.log(`---AND---`);
console.log(0 && 'nik');
console.log(7 && 'nik');
console.log('Hello' && 23 && null && 'nik');


// Practical Example
if(restaurant.orderPizza) {
  restaurant.orderPizza(`mushroom`, `spnich`);
}

restaurant.orderPizza && restaurant.orderPizza(`mushroom`, `olives`);



// Logical Assingment operator
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
}

const rest2 = {
  name: 'La Piazza',
  owner: 'Via Rossi',
}

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// OR Assingment Operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// console.log(rest1);
// console.log(rest2);

// AND Assingment Operator
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(`New Bad Arr:`, newBadArr);

// 10: ES6 Object literal Enhancment
// 1.1 Older way to store an object inside another object

const oldObj = {
  oldName: `nik`,
  inheritence:{
    property: 3,
  }

}

// 1.2 ES6 made enhanced way of storing an object inside another object
const inheritence = {
property: 3,
};

const obj = {
  name: `nik`,
  inheritence: inheritence,
  // or
  inheritence, 
}


console.log(obj);
// 2.1 Older way to store a function inside an object
const functionObj = {
  logToTheConsole: function() {
    console.log(`test`);
  }
}

// 2.2 ES6 way to store a function inside an object
const es6FunctionObj = {
  logToTheConsole() {
    console.log(`ES6 function test`);
  }
}

// Logging and Executing all the example functions 
console.log(oldObj, obj);
functionObj.logToTheConsole();
es6FunctionObj.logToTheConsole();


// console.log([...menu.entries()]);

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach'); 
  
  // 11: Optional chaining
  
  // Checking for undefined property
  if(restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
  
  // Checking for undefined property with optional chaining (?.)
  console.log(restaurant.openingHours.mon?.open);
  console.log(restaurant.openingHours?.mon?.open);
  
  // Example 
  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
  for(const day of days) {
    // console.log(day);
    const open = restaurant.openingHours[day]?.open ?? `closed`;
    console.log(`On ${day}, we open at ${open}!`);
  }
  
  // Optional chaining for methods
  console.log(restaurant.order?.(0, 1) ?? `Method does not exist`);
  console.log(restaurant.orderRisotto?.(0, 1) ?? `Method does not exist`);
  
  // optional chaining for arrays
  const users = [{name: `nik`, email: `nik@gmail.com`}];
  console.log(users[0]?.name ?? `array is empty`);
  
  const emptyUsers = [];
  console.log(emptyUsers[0]?.email ?? `array is empty`);
  
  const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
  
  for (const item of menu) {
    console.log(item);
  }
  
  for (const [i, el] of menu.entries()) {
    // console.log(...item);
    console.log(`${i + 1}: ${el}`);
  }

// 12: Looping Objects, Object keys and Entiries
// 12.1: Property names
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days: `;

for(const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

// 12.2: Property values
const values = Object.values(openingHours);
// console.log(values);

// 12.3: Entrie object
const entries = Object.entries(openingHours);
// console.log(entries);

// 12.3.1: [key, value]
for(const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}!`);
}

// 13 Sets
const orderSet = new Set(['Pizza', 'Pasta', 'Pizza', 'Risotto', 'Pasta']);
console.log(orderSet);

console.log(new Set('nik'));

console.log(orderSet.size);

console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));

orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Pasta');
console.log(orderSet);
// orderSet.clear();
console.log(orderSet);

for(const order of orderSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff);
console.log(staff.size);
*/

// 14 Maps
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, Portugal");

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are open :D")
  .set(false, "we are closed :(");

// console.log(rest.get('name'));
// console.log(rest.get(true));

const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest.has(`categories`));

rest.delete(2);

const arr = [1, 2];
rest.set(arr, "test");
// console.log(rest);

// console.log(rest.size);
// console.log(rest.get(arr));
// rest.clear();
// console.log(rest);

rest.set(document.querySelector("h1"), "Heading");

const quiz = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C++"],
  [2, "Java"],
  [3, "Javascript"],
  [4, "Python"],
  ["correct", 3],
  [true, "Correct Answer :)"],
  [false, "Try again :("],
]);

// Convert object to Map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(quiz.get("question"));
for (const [key, value] of quiz) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}

// const userAnswer = Number(prompt("Input the answer!"));

// const result =
//   userAnswer === quiz.get("correct")
//     ? console.log(quiz.get(true))
//     : console.log(quiz.get(false));

// console.log(quiz.get(quiz.get("correct") === userAnswer));

// Converting Maps to arrays

console.log([...quiz]);

console.log([...quiz.keys()]);
console.log([...quiz.values()]);
console.log([...quiz.entries()]);

//
function Person(personName, personAge) {
  this.name = personName;
  this.age = personAge;
}

const personObject = {
  name: "nik",
  age: 20,

  get getName() {
    return this.name;
  },
};
console.log(personObject.getName);

const p1 = new Person("nik", 20);
const p2 = new Person("healer", 22);

console.log(p1.name);
console.log(p2.name);

// p2.greet();

p1.gender = "male";
p1.greet = function () {
  console.log(`Hello ${this.name}!`);
};

console.log(p1.gender);
p1.greet();
