const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent
    ] });

client.on("messageCreate", (message) =>{
    if(message.author.bot) return;
    // console.log(message.content);
    message.reply({
        content: 'Bot says helllo!!!'
    })
})

client.login("MTIxMjYwMTY3ODQ0NTAyMzMwNA.GPJ7XU._jwUJh56Kw16RjvHrk4jReXH8S1mAl3PRCxl60")