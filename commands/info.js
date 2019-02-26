const	Discord	= require('discord.js'),
fs		= require('fs'),
config	= JSON.parse(fs.readFileSync('config.json', 'utf8'))

exports.run = (client, msg, args) => {
    embed = new Discord.RichEmbed()
	//// Titel (optional mit Link)
	//.setTitle("User Avatar")
	//.setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
	//// Autor (optional mit Bild und Link)
	.setAuthor("Yuri | ユリ", client.user.avatarURL, "https://yuribot.xyz")
	//// Embed Farbe
	.setColor(0x9347be)
	//// Text in Embed
	//.setDescription()
	//// Fußzeilentext
	.setFooter(`Yuri Bot by ${config.owner}`)
	//// Großes Bild unten
	//.setImage(msg.author.avatarURL)
	//// Kleines Bild an der Seite
	.setThumbnail(client.user.avatarURL)
	//// Zeit in Fußzeile - "Zeitstempel"
	//.setTimestamp()
	//// Felder (Feldtitel, Feldtext)
	.addField("**Version**", config.version, true)
	.addField("**Library**", "discord.js v11.3.2 (running on Node.js v8.11.1)", true)
	.addField("**Website**","[yuribot.xyz](https://yuribot.xyz)", true)
	.addField("**Developer**", `<@${config.owner_id}>`, true)
	chan.send({embed})
};