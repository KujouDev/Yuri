const	Discord	= require('discord.js'),
fs		= require('fs'),
config	= JSON.parse(fs.readFileSync('config.json', 'utf8'))

exports.run = (client, msg, args) => {
    var usr = msg.mentions.users.first() || msg.author; // User mention
    embed = new Discord.RichEmbed()
    //// Titel (optional mit Link)
    //.setTitle("User Avatar")
    //.setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
    //// Autor (optional mit Bild)
    .setAuthor(`Avatar of ${usr.tag}`, usr.avatarURL)
    //// Embed Farbe
    .setColor(0x9347be)
    //// Text in Embed
    .setDescription("[Direct Link](" + usr.avatarURL + ")")
    //// Fußzeilentext
    //.setFooter()
    //// Großes Bild unten
    .setImage(`${usr.avatarURL}`)
    //// Kleines Bild an der Seite
    //.setThumbnail()
    //// Zeit in Fußzeile - "Zeitstempel"
    //.setTimestamp()
    //// Felder
    //.addField("This is a field title, it can hold 256 characters", "This is a field value, it can hold 2048 characters.")
    chan.send({embed})
};