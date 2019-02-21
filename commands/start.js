let available = true;

function startRace(message, args) {
    const trackLength = 80;
    const numberOfHorses = 6;
    
    available = false;

    horses = Array(numberOfHorses).fill(trackLength);
    raceTrack = renderRaceTrack(horses, trackLength);

    message.channel.send(raceTrack).then(message=> {createNextFrame(message, horses, trackLength, 0)});
}

function createNextFrame(message, horses, trackLength, n){
    let winners = [];
    horses.forEach((length, horse_index) => {
        length = length - Math.floor(Math.random()*3 + 1);
        horses[horse_index] = length;
        if (length <= 0) winners.push(horse_index);
    });
    if (winners.length > 0) return declareWinner(message, winners);
    console.log(n);
    console.log(horses);
    message.edit(renderRaceTrack(horses, trackLength)).then(message=>{
        setTimeout(() => {
            createNextFrame(message, horses, trackLength, n+1);
        }, 1000);
    })
}

function declareWinner(message, winners) {
    console.log("Winner declared!")
    if(winners.length === 1) 
        message.channel.send(`Horse ${winners[0]} has WON!`);
    else
    message.channel.send(`There has been a draw between horses ${winners}`);
    available = true;
}

function renderRaceTrack(horses, trackLength) {
    const horse = ':horse_racing:';
    const finish = ':checkered_flag:';
    const trackSeperator = '-';
    const bar ='|';

    let raceTrack = '`' + trackSeperator.repeat(trackLength) + '`' + '\n';
    for (i=0; i<horses.length; i++){
        raceTrack = raceTrack + finish + bar + ' '.repeat(horses[i] * 1.5) + horse + bar + ' ' + bar + ' ' + i + '\n' + '`' + trackSeperator.repeat(trackLength) + '`' + '\n'; 
    }
    return raceTrack;

}

module.exports = {
    name: 'start',
    description: 'Starts a race, with default number of horses, and default length unless otherwise specified.',
    args: 'false',
    execute: startRace,
    status: ()=>available
}
