const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("598186095896821773")
setInterval(function() {
channel.send(`DL |ITz_Dirilis DL |ITz_Dirilis ITz_Dirilis ITz_Dirilis ITz_Dirilis ITz_Dirilis`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
