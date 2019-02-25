// I know this script currently has some issues they need to get fixed
// ~ Yuri Dev (Kujou)

const	Discord	= require('discord.js'),
		fs		= require('fs'),
		config	= JSON.parse(fs.readFileSync('config.json', 'utf8')),
		client  = new Discord.Client()

client.on('ready', () => {
	console.log(`Bot ${client.user.username} has logged in successfully...`)
	client.user.setActivity(config.game, {url: "https://www.twitch.tv/kujxu", type: "LISTENING"}) // PLAYING LISTENING WATCHING
	client.user.setStatus(config.status)
});

client.on('message', (msg) => { // Message Event
	var	cont	= msg.content
		author	= msg.member
		chan	= msg.channel
		guild	= msg.guild
		trigger = cont.toLowerCase()

	//if (msg.author.bot) return; // If the bot is the author, returns.
	
	if (author.id != client.user.id && cont.startsWith(config.prefix)) {
		// Command wird gesplittet Ohne Split Bsp: y!say hello world!
		var command	= cont.split(' ')[0].substr(config.prefix.length),
			args	= cont.split(' ').slice(1)
	}

    if (cont.startsWith(config.prefix)) {
		// Command Aliases
		if (command === "commands") command = "help";
		if (command === "cmd") command = "help";
		if (command === "information") command = "info";
		if (command === "about") command = "info";
		if (command === "speak") command = "say";
		if (command === "avi") command = "avatar";
		if (command === "profile picture") command = "avatar";
		if (command === "pfp") command = "avatar";
		if (command === "userimage") command = "avatar";
		// Load Commands from folder
		fs.access(`./commands/${command}.js`, fs.constants.F_OK, (err) => {
			if (err) {
				console.log(`${msg.author.tag} tried to use ${command} command`);
			} else {
				var commands = require(`./commands/${command}.js`); // Run command folder
				commands.run(client, msg, args); // Runs [Client, Message, Args]
				console.log(`${msg.author.tag} used ${command} command`);
			}
		});
	}
	
	if (!cont.startsWith(config.prefix)) {
		// Command Aliases
		if (trigger === "hi yuri") trigger = "hello yuri";
		if (trigger === "ohayou yuri") trigger = "hello yuri";
		// Load Commands from folder
		fs.access(`./triggers/${trigger}.js`, fs.constants.F_OK, (err) => {
			if (err) {
				console.log(`${msg.author.tag} tried to use ${trigger} trigger`);
			} else {
				var triggers = require(`./triggers/${trigger}.js`); // Run command folder
				triggers.run(client, msg, args); // Runs [Client, Message, Args]
				console.log(`${msg.author.tag} used ${trigger} trigger`);
			}
		});
	}
});

client.login(config.token)
