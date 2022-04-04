const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('야마무스')
		.setDescription('나도 이게 뭔지 모른다요!'),
	async execute(interaction) {
		await interaction.reply('아몰라 ~하면 그만이야!');
	},
};