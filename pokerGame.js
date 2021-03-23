let cards = [
    'A ',
    ' 2',
    ' 3',
    ' 4',
    ' 5',
    ' 6',
    ' 7',
    ' 8',
    ' 9',
    '10',
    'Jk',
    'Qn',
    'Kg'
]

let suits = [
    'Clubs ',
    'Dimnds',
    'Hearts',
    'Spades'
]

let getDeck = () => {
    let newDeck = [];
    suits.forEach(x => newDeck.push(cards.map(y=> y + ' of ' + x)));

    return newDeck;

}

let drawCard = deck => {
    var rand = Math.round(Math.random()*(deck.length-1));
    var rand2 = Math.round(Math.random()*(deck[rand].length-1));
    return deck[rand].splice(rand2,1);
}

let getRiverCard = (message, river) => {


    message.channel.send(`\n[${river.splice(0,1)}]`);

}

module.exports ={

    createGame: function(message){

        message.react('👍').then(() => message.react('👎'));

        const filter = (reaction) => reaction.emoji.name === '👍';
        const collector = message.createReactionCollector(filter, { time: 7000 });
        collector.on('collect', r => console.log(`Collected ${r.emoji.name}`));
        collector.on('end', collected => {console.log(`Collected ${collected.size} items`)
        message.channel.send(collector.users.join('\n'));

    });


    },

    startPokerGame: function(message){
        let deck = getDeck();
        message.reply('Starting poker game for ' + message.author.username);
        message.channel.send('If you would like to join, react with a thumbs-up!');
        message.reactions.add()

        message.reply('\nDrawing two cards...');
        let card1 = drawCard(deck);
        let card2 = drawCard(deck);

        let river = [drawCard(deck),drawCard(deck),drawCard(deck)];


        message.reply('\n Hand:\n'+ card1 + '\n' + card2);

        message.channel.send('\n-----{1st}-----')
        getRiverCard(message, river);
        message.channel.send('\n-----{2nd}-----')
        getRiverCard(message, river);
        message.channel.send('\n-----{3rd}-----')
        getRiverCard(message, river);


       //  message.reply('\n Remaining cards: ' + deck);
    }





}