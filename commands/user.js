const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('유저')
		.setDescription('유저 정보를 출력합니다!'),
	async execute(interaction) {
        await interaction.reply(`유저태그 : ${interaction.user.tag} \n유저 아이디 : ${interaction.user.id}`);
	},
};
