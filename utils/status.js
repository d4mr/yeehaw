let status = {
    betting: false,
    race: false
}

// race = {
//     horses: [a,b,c,d,e],
//     winner: horses[n],
//     bets: [{horses[n], amt, }]
// }

module.exports.betting = {
    isOn : (mode) => {status.betting = mode},
    checkOn : () => status.betting,
    addBet : (userID, amt, horseNumber) => {status.race.bets.push([userID, amt, horseNumber])}
}

module.exports.racing = {
    initalise: horses=>{status.race.horses = horses},
    setWinners: winners=>{status.reace.winner = winner}
}