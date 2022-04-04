// Require the necessary discord.js classes
const { Client, Collection, Intents} = require('discord.js');
const { token } = require('./config.json');
const fs = require('node:fs');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

/*
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === '야') {
        await interaction.reply('왜불러');
	}
    else if(commandName === "방구") {
        await interaction.reply('뿡');
    }
    else if(commandName === "서버") {
        await interaction.reply(`서버이름 : ${interaction.guild.name} \n서버 인원 : ${interaction.guild.memberCount}`);
    }
    else if(commandName === "유저") {
        await interaction.reply(`유저 태그 : ${interaction.user.tag} \n유저 아이디 : ${interaction.user.id}`);
    }
});
*/
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

// Login to Discord with your client's token
client.login(token);