let cards = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13
]

let suits = [
    C,
    D,
    H,
    S
]

let getDeck = () => {
    let newDeck = [];
    suits.forEach(x => newDeck.push(cards.map(y=> x+y)));

    return newDeck;

}

module.exports ={

    startPokerGame: function(message){
        message.reply('Starting poker game for ' + message.author.username);
        message.reply(getDeck());
    }





}