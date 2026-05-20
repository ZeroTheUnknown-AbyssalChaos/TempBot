const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('say')
        .setDescription('Bot wiederholt den eingegebenen Text des Nutzers'),
    async execute(interaction) {
        const text = interaction.options.getString('text', true);
        await interaction.reply(text);
    },
}