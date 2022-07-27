'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function({starterIndex = Math.trunc(Math.random() * 3 + 1), mainIndex = Math.trunc(Math.random() * 2 + 1), address, time = `06:00`}) {
    console.log(`Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your delicous pasta with ${ing1}, ${ing2}, and ${ing3}!!`);
  },

  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};


/*
restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach'); 

// Short Circuiting 
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
*/

// The Nullish Coalescing operator (??)
restaurant.numberOfGuests = 0;
const guests = restaurant.numberOfGuests || 10;
console.log(guests);

// Nullish: null values and undefined values (NOT 0 or '')
const correctGuests = restaurant.numberOfGuests ?? 10;
console.log(correctGuests);


/*
const add = function(...numbers) {
  // console.log(...numbers);
  let sum = 0;
  for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(1, 2 ,4 , 5, 7, 8, 9, 10);


// Spread opererator because using on the RIGHT side of the =
const arr = [1, 2, ...[3, 4]];

// Rest operator because using on the left side of the =
const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7];
console.log(a, b, ...others);

// Using the Rest operator on both sides of the =
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, ...otherFood);

// Using the Rest operator on objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);


// Using spread operator with objects
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



restaurant.orderDelivery(
  {
    time: `23:30`,
    address: `Via del Sole, 21`,
    mainIndex: 1,
    starterIndex: 3,
  }
)

restaurant.orderDelivery(
  {
  address: `Via del Sole, 21`,
  }
)




// Spreading Arrays
const arr = [7, 8, 9, 10,];
const newBadArr = [1, 2, 3, 4, 5, 6, arr[0], arr[1], arr[2], arr[3],];
console.log(`New Bad Arr:`, newBadArr);

const newGoodArr = [1, 2, 3, 4, 5, 6, ...arr];
console.log(`New Good Arr:`, newGoodArr);

console.log(...newGoodArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copying Array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Joining two arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables
const me = 'nik';
console.log(...me);



// Destructuring objects
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

// Renaming destructured objects
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

// Setting default objects for dectructured categories
const {menu = [], starterMenu = [], mainMenu = []} = restaurant;
console.log(menu, starterMenu, mainMenu);

// Mutating objects 
let a = 111;
let b = 999;
const obj = {a: 12, b: 34, c:44};
({a, b} = obj);
console.log(a, b);

// Destructuring nested objects
// Renaming the inner object
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



// Receiveing 2 return values from a function usinng Data Destructuring
console.log(restaurant.order(2, 0));

const [starter, main] = restaurant.order(2, 0);
console.log(starter +',', main);

// Receving values from a nested array
const nested = [2, 5, [3, 13]];
const [i, , j] = nested;
console.log(i, j);

const [x, , [y, z]] = nested;
console.log(x, y, z);

// Destructuring values that dont exist in the array
let [t, v, a] = [8, 15];
console.log(t, v, a);

[t=1, v=1, a=1] = [8, 15];
console.log(t, v, a);
*/