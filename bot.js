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


bot.on('message', message => {
    if (message.content.startsWith('!')){
        switch(message.content.substr(1)){
            case('poker'):{
                var channel=message.member.voiceChannel;
                if(channel)
                {
                    fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
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
                    }).then(r => r.json().then(j => {
                        var e=new Discord.RichEmbed();
                        e.setDescription(`[Click to open Poker Night in ${channel.name}](<https://discord.gg/${j.code}>)`);
                        message.channel.sendEmbed(e);
                    }));
                } else message.reply("You need to be in voice chat!");
            }
            break;
            case('yt'):{
                var channel=message.member.voiceChannel;
                if(channel)
                {
                    fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
                        method: "POST",
                        body: JSON.stringify({
                            max_age: 86400,
                            max_uses: 0,
                            target_application_id: "755600276941176913",  // Youtube Together: 755600276941176913 | Poker Night: 755827207812677713 | Betrayal.io: 773336526917861400 | Fishington.io: 814288819477020702
                            target_type: 2,
                            temporary: false,
                            validate: null
                        }),
                        headers: {
                            "Authorization": "Bot "+TOKEN,
                            "Content-Type": "application/json"
                        }
                    }).then(r => r.json().then(j => {
                        var e=new Discord.RichEmbed();
                        e.setDescription(`[Click to open Youtube Together in ${channel.name}](<https://discord.gg/${j.code}>)`);
                        message.channel.sendEmbed(e);
                    }));
                } else message.reply("You need to be in voice chat!");
            }
            break;

        }

    }
});
