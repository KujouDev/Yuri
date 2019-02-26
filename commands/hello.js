const	Discord	= require('discord.js'),
fs		= require('fs'),
config	= JSON.parse(fs.readFileSync('config.json', 'utf8'))

exports.run = (client, msg, args) => {
    chan.send(`Hello ${msg.author} :smile:`)
};