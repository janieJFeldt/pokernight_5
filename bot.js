require('dotenv').config();
const AWS = require('aws-sdk');
const Discord = require('discord.js');
const db = require('./dbActions.js');
const poker = require('./pokerGame.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;


AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})
const docClient = new AWS.DynamoDB.DocumentClient();

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
  bot.guilds.get('822858977523138640').emojis.forEach(emoji => console.log(emoji.animated ? '<a:' + emoji.name + ':' + emoji.id + '>' : '<:' + emoji.name + ':' + emoji.id + '>'));
});



const decipherCommand = message => {

  if(message.content.startsWith('/')){

    switch(message.content.substr(1)){
      case('hi'):
        message.reply('hello there');
      break;
      case('stats'):
        db.saveToDynamo(docClient, db.getDataObject(message));
        message.reply('ultimate master poker player');
      break;
    }

  }
  else if (message.content.startsWith('!')){
    switch(message.content.substr(1)){
      case('kick'):
        if (message.mentions.users.size) {
          const taggedUser = msg.mentions.users.first();
          message.channel.send(`You wanted to kick: ${taggedUser.username}`);
        } else {
          message.reply('Please tag a valid user!');
        }
      break;

      case('poker'):
        poker.startPokerGame(message);
      break;
      case('start'):
        poker.createGame(message);
      break;
    }
  
  }
}

bot.on('message', msg => {
  decipherCommand(msg);
});
