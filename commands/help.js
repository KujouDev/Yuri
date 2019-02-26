const	Discord	= require('discord.js'),
fs		= require('fs'),
config	= JSON.parse(fs.readFileSync('config.json', 'utf8'))

exports.run = (client, msg, args) => {
    embed = new Discord.RichEmbed()
	//// Titel (optional mit Link)
	//.setTitle("User Avatar")
	//.setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
	//// Autor (optional mit Bild und Link)
	.setAuthor("Yuri Bot Help", client.user.avatarURL, "https://yuribot.xyz")
	//// Embed Farbe
	.setColor(0x9347be)
	//// Text in Embed
	.setDescription("H-Hello, I'm Yuri. In the following List below you find all Commands <@" + config.owner_id + "> has given me :smile:")
	//// Fußzeilentext
	.setFooter(`Yuri Bot by ${config.owner}`)
	//// Großes Bild unten
	//.setImage(msg.author.avatarURL)
	//// Kleines Bild an der Seite
	.setThumbnail(client.user.avatarURL)
	//// Zeit in Fußzeile - "Zeitstempel"
	//.setTimestamp()
	//// Felder
	.addField("**Yuri**", `**\`${config.prefix}help\`, \`${config.prefix}info\`**`, true)
	.addField("**Fun Commands**", `**\`${config.prefix}say\`**`, true)
	.addField("**Utils**", `**\`${config.prefix}avatar\`**`, true)
	.addField("**Triggers**", "**`ayaya`, `knife`, `Hello Yuri`**", true)
	chan.send({embed})
};