const { Client, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

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

client.login(process.env.DISCORD_TOKEN)