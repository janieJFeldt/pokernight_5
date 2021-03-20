require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

const decipherCommand = message => {

  if(message.content.startsWith('/')){

    switch(message.content.subStr(1)){
      case('hi'):
        msg.channel.send('hello there');
      break;
      case('stats'):
        msg.channel.send('ultimate master poker player');
      break;
    }

  }
  else if (message.startsWith('!')){

  }
}

bot.on('message', msg => {
  decipherCommand(msg);

  if (msg.content === 'ping') {
    msg.reply('pong');
    msg.channel.send('pong');

  } else if (msg.content.startsWith('!kick')) {
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
    } else {
      msg.reply('Please tag a valid user!');
    }
  }
});
