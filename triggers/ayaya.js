const	Discord	= require('discord.js'),
fs		= require('fs'),
config	= JSON.parse(fs.readFileSync('config.json', 'utf8'))

exports.run = (client, msg, args) => {
    embed = new Discord.RichEmbed()
	//// Titel (optional mit Link)
	//.setTitle("User Avatar")
	//.setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
	//// Autor (optional mit Bild und Link)
	.setAuthor("Aya-chan", "https://i.imgur.com/I1fDpqQ.png", "http://kinmosa.wikia.com/wiki/Karen_Kuj%C5%8D#Aya")
	//// Embed Farbe
	.setColor(0x205293)
	//// Text in Embed
	.setDescription("S-Stooop! I-I don´t have allowed to name me s-so B-Bakaaaaaa! :flushed:")
	//// Fußzeilentext
	//.setFooter("Yuri Bot " + config.version + " | Bot created by Kujou#1750")
	//// Großes Bild unten
	.setImage("https://media.giphy.com/media/hk9uunG30OC1q/giphy.gif")
	//// Kleines Bild an der Seite
	//.setThumbnail(msg.author.avatarURL)
	//// Zeit in Fußzeile - "Zeitstempel"
	//.setTimestamp()
    chan.send({embed})
};