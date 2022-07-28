/*
const country = "Pakistan";
const continent = "Asia";
let population = 220.9;
// let population = 40;
const isIsland = false;
const language = "urdu";
// const language = "English";

const description = `${country} is in ${continent} and it's ${population} million people speake ${language}!`;
console.log(description);
console.log("27" > 7);

let numNeighbours = Number(prompt(`How many neighbour countries does your country have?`));
if (numNeighbours === 1) {
    console.log(`Only 1 border!`);
} else if (numNeighbours > 1) {
    console.log(`'More than 1 border interesting...`);
} else {
    console.log(`No borders hmm! weird.`)
}

if (language === "English" && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}

function describeCountry(country, population, capitalCity) {
    const description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return description;
}


const pakistan = describeCountry(`Pakistan`, 220.9, `Islamabad`);
console.log(pakistan);

const germany = describeCountry(`Germany`, 83.24, `Berlin`);
console.log(germany);

const france = describeCountry(`France`, 67.39, `Paris`);
console.log(france);


function percentageOfWorld1 (country, population) {
    return `${country} has ${population} million people, so it's about ${population / 7900 * 100}% of the world population`;
}

const pakistan1 = percentageOfWorld1(`Pakistan`, 220.9);
console.log(pakistan1);

const france1 = percentageOfWorld1(`France`, 67.39);
console.log(france1);

const germany1 = percentageOfWorld1(`Germany`, 83.24);
console.log(germany1);

console.log(`-----------------------------------------`);

const percentageOfWorld2 = function percentageOfWorld1 (country, population) {
    return `${country} has ${population} million people, so it's about ${population / 7900 * 100}% of the world population`;
}

const pakistan2 = percentageOfWorld2(`Pakistan`, 220.9);
console.log(pakistan2);

const france2 = percentageOfWorld2(`France`, 67.39);
console.log(france2);

const germany2 = percentageOfWorld2(`Germany`, 83.24);
console.log(germany2);


const percentageOfWorld3 = (country, population) => `${country} has ${population} million people, so it's about ${population / 7900 * 100}% of the world population`;

const pakistan3 = percentageOfWorld3(`Pakistan`, 220.9);
console.log(pakistan3);

const france3 = percentageOfWorld3(`France`, 67.39);
console.log(france3);

const germany3 = percentageOfWorld3(`Germany`, 83.24);
console.log(germany3);


console.log(`-----------------------------------------`);

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}


function describePopulation (country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
    console.log(description);

}

describePopulation(`Pakistan`, 220.9);
describePopulation(`France`, 67.39);



const populations = [220.9, 67.39, 83.24, 25.69];
console.log(populations.length == 4);

function percentageOfWorld1 (population) {
    return population / 7900 * 100;
}


const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]), 
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3]), 
];
console.log(percentages);


// const myCountry = {
//     country: `Pakistan`,
//     capital: `Islamabad`,
//     language: `Urdu`,
//     population: 220.9,
//     neighbours: [`China`, `Afghanistan`, `Iran` , `India`],
// }
    

// // console.log(myCountry);


// console.log(`${myCountry.country} has ${myCountry.population + 2} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);
// console.log(`${myCountry.country} has ${myCountry['population'] - 2} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

const myCountry = {
    country: `Pakistan`,
    capital: `Islamabad`,
    language: `Urdu`,
    population: 220.9,
    neighbours: [`China`, `Afghanistan`, `Iran` , `India`],
    describe: function log() { console.log(`${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`)},
    // checkIsland: function() {
    //     this.isIsland = this.neighbours.length === 0 ? true : false;
    // }
    checkIsland: function () {
        if(this.neighbours.length === 0) { return this.isIsland = true;}
        else { return this.isIsland = false}
    },
}

// console.log(myCountry);


// console.log(`${myCountry.country} has ${myCountry.population + 2} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);
// console.log(`${myCountry.country} has ${myCountry['population'] - 2} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry.checkIsland());


for(let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting`);
}


const jonasArray = [
    `Jonas`,
    `Schmedtmann`,
    2037 - 1991,
    `Teacher`,
    [`Michael`, `Peter`, `Steven`],

];

for(let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i]);
}


// const percentages = [
//     percentageOfWorld1(populations[0]),
//     percentageOfWorld1(populations[1]), 
//     percentageOfWorld1(populations[2]),
//     percentageOfWorld1(populations[3]), 
// ];
// console.log(percentages, `hello`);


function percentageOfWorld1 (population) {
    return population / 7900 * 100;
}


const populations1 = [220.9, 67.39, 83.24, 25.69];
const percentages2 = [];


for(let i = 0; i < populations1.length; i++) {
    percentages2.push(percentageOfWorld1(populations1[i]));
}

console.log(percentages2);


const listOfNeighbours = [
    ['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden','Russia']
];
// console.log(listOfNeighbours);

for(let i = 0; i < listOfNeighbours.length; i++) {
    for(let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
}


function percentageOfWorld1 (population) {
    return population / 7900 * 100;
}


const populations1 = [220.9, 67.39, 83.24, 25.69];
const percentages2 = [];


for(let i = 0; i < populations1.length; i++) {
    percentages2.push(percentageOfWorld1(populations1[i]));
}

console.log(percentages2);

const percentages3 = [];
let i = 0;
while(i < populations1.length) {
    percentages3.push(percentageOfWorld1(populations1[i]));
    i++;
}

console.log(percentages3);
*/
