const	Discord	= require('discord.js'),
fs		= require('fs'),
config	= JSON.parse(fs.readFileSync('config.json', 'utf8'))

exports.run = (client, msg, args) => {
    msg.delete();
    console.log("Bot is shutting down...");
    client.user.setStatus("dnd");
    client.user.setActivity("Bot is shutting down...", {url: "https://www.twitch.tv/kujxu", type: "PLAYING"});
    //process.exit()
};