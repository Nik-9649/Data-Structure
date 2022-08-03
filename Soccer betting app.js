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
const {odds: {team1,x: draw, team2}} = game;


// 6.
const printGoals = function(...args) {
    console.log(`${args.length} goals were scored!`);
}
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log(`Team one is more likely to win!`);
team2 < team1 && console.log(`Team two is more likely to win!`);

//
for(const [i, value]  of game.scored.entries()) {
    console.log(`Goal ${i}: ${value}`);
}

for(const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === `x` ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr}: ${odd}`);
}