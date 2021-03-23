let cards = [
    ' 1',
    ' 2',
    ' 3',
    ' 4',
    ' 5',
    ' 6',
    ' 7',
    ' 8',
    ' 9',
    '10',
    '11',
    '12',
    '13'
]

let suits = [
    'C',
    'D',
    'H',
    'S'
]

let getDeck = () => {
    let newDeck = [];
    suits.forEach(x => newDeck.push(cards.map(y=> x+y)));

    return newDeck.join();

}

let drawCard = deck => {
    var rand = Math.round(Math.random(deck.length-1));

    return deck.join().splice(rand,deck.indexOf(','),2);
}

module.exports ={

    startPokerGame: function(message){
        let deck = getDeck();
        message.reply('Starting poker game for ' + message.author.username);

        message.reply('\nDrawing two cards...');
        let card1 = drawCard(deck);
        let card2 = drawCard(deck);

        message.reply('\n Hand:\n'+ card1 + '\n' + card2);

        message.reply('\n Remaining cards: ' + deck);
    }





}