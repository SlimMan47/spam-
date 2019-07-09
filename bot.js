const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("598186095896821773")
setInterval(function() {
channel.send(`1111111111111111111111111`);
}, 30)
})

client.login(process.env.BOT_TOKEN);