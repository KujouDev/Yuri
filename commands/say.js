const	Discord	= require('discord.js'),
fs		= require('fs'),
config	= JSON.parse(fs.readFileSync('config.json', 'utf8'))

exports.run = (client, msg, args) => {
    var say = args.join(' '); // Arguments
    msg.delete(); // Deletes the content (Usage: say <text>)
    msg.channel.send(say); // Sends the message into the channel
};