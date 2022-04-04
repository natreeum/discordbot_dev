const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('서버')
		.setDescription('서버 정보를 출력합니다!'),
	async execute(interaction) {
        await interaction.reply(`서버이름 : ${interaction.guild.name} \n서버 인원 : ${interaction.guild.memberCount}`);
	},
};