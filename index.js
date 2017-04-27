//Load Discord
const Discord = require('discord.js');
const Events = require('./events');

//Require the config.json
const config = require('./config.json');

//Creating bot
const client = new Discord.Client();

//Message in terminal/CMD when bot is online
client.on('ready', () =>{
  console.log('BFNAtions is online!');
});

module.on('ready', () =>{
  console.log('Events is ok!');
});
//Bot login
client.login(config.token);
