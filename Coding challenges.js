/*
// Coding challenge #1 //


// let marksWeight = 78;
// let marksHeight = 1.69;
// let johnsWeight = 92;
// let johnsHeight = 1.95;


let marksWeight = 95;
let marksHeight = 1.88;
let johnsWeight = 85;
let johnsHeight = 1.76;


const marksBMI = marksWeight / marksHeight ** 2;
const johnsBMI = johnsWeight / johnsHeight ** 2;

// console.log(marksBMI > johnsBMI);


// Coding Challenge #2 // 

if (marksBMI > johnsBMI) {
    console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})!`);
} else {
    console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})!`);
}



// Coding Challenge #3 // 
const dolphinsAverageScore = (97 + 112 + 81) / 3;
const koalasAverageScore = (109 + 95 + 86) / 3;

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
    console.log(`Team Dolphin is the winner :)`);
} else if (koalasAverageScore > dolphinsAverageScore && koalasAverageScore >= 100) {
    console.log(`Team Koala is the winner! :)`);
} else if (dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore >= 100 && koalasAverageScore >= 100){
    console.log(`It's a draw!`);
} else {
    console.log(`No one wins the trophy :(`);
}


// Coding Challenge #4 //
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? (bill) * 15/100 : (bill) * 20/100;

console.log(`The bill was $${bill}, and the tip was $${tip}, and the total value was $${bill + tip}.`);


// Fundamentals 2 //
// Coding Challenge 1 //

// const calcAverage = (score1, score2, score3) => score1 + score2 + score3 / 3;
// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(85, 54, 41);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         return console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins ) {
//         return console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//     } else {
//         return console.log(`No team Wins`);
//     }
// }

// checkWinner(avgDolphins, avgKoalas);

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(34, 23, 27);



const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        return console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins ) {
        return console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        return console.log(`No team Wins`);
    }
}

checkWinner(avgDolphins, avgKoalas);


function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}

const test = calcTip(100);

console.log(test);

const bills = [
    125, 555, 44
];

const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2]),
];

console.log(tips);

const total = [
    tips[0] + bills[0],
    tips[1] + bills[1],
    tips[2] + bills[2],
];

console.log(total);


const johnas = {
    firstName: 'Johnas',
    job: `teacher`,
    friends: [`Michael`, `Adam`, `Jeff`],
    birthYear: 1991,

    calcAge:  function () {
        const age = 2037 - this.birthYear;
        return age;
    },

    eligable: function () {
        // console.log(this.calcAge());
        if (this.calcAge() > 18) {
            return `has a driving license.`;
        }
        else {
            return `has no driving license yet.`;
        }
    }
}

// console.log(`${johnas.firstName} has ${johnas.friends.length} friends and ${johnas.friends[0]} is his best friend.`);


console.log(`${johnas.firstName} is a ${johnas.calcAge()} years old ${johnas.job} and ${johnas.eligable()}`);




const mark = {
    fullName: 'Mark Miller',
    weight: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    },
    
    // marksBMI: this.calcBMI(),
    
}
// console.log(mark.marksBMI);
// marksBMI = mark.calcBMI();

console.log(mark.bmi);

const john = {
    fullName: 'John Smith',
    weight: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
}

// johnsBMI = john.calcBMI();
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi > john.bmi ? `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi}).` : `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi}.)`);


function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}

const bills = [
    22, 295, 176, 440, 37, 105, 10, 1100, 86, 52
]

const tips = []
const totals = []

for(let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);

    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(tips);
console.log(totals);

const calcAverage = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(totals));


// Data Structure 
// Coding challenge 1
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// 1.
const [players1, players2] = game.players;

// 2.
const [gk, ...fieldPlayers] = players1;
// console.log(gk);

// 3.
const [allPlayers] = [...players1, ...players2];

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']

// 5.
const {odds: {team1, x: draw, team2}} = game;


// 6.
const printGoals = function(...args) {
    console.log(`${args.length} goals were scored!`);
}
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log(`Team one is more likely to win!`);
team2 < team1 && console.log(`Team two is more likely to win!`);

// console.log(game.scored);

*/
console.log("-----Coding challenge 3-----");
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🟨 Yellow card"],
  [69, "🟥 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🟨 Yellow card"],
]);

const uniqueEvents = new Set([...gameEvents.values()]);
const events = [...uniqueEvents];
console.log(events);
