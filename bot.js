require('dotenv').config();
const Discord = require('discord.js');
const fetch = require("node-fetch");
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;


bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
  // bot.guilds.get('822858977523138640').emojis.forEach(emoji => console.log(emoji.animated ? '<a:' + emoji.name + ':' + emoji.id + '>' : '<:' + emoji.name + ':' + emoji.id + '>'));
});



const decipherCommand = async message => {
  if (message.content.startsWith('!')){
    switch(message.content.substr(1)){
      case('start'):{
       console.log(TOKEN);
       fetch("https://discord.com/api/v8/channels/662756581489770530/invites", {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                        target_application_id: "755827207812677713",  // Youtube Together: 755600276941176913 | Poker Night: 755827207812677713 | Betrayal.io: 773336526917861400 | Fishington.io: 814288819477020702 
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": "Bot "+TOKEN,
                        "Content-Type": "application/json"
                    }
                }).then(b => {
         message.reply(b);
       });
      }
      break;
    }
  
  }
}

bot.on('message', msg => {
  decipherCommand(msg);
});
