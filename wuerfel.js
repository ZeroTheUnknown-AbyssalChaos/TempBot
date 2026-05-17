const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('wuerfel')
        .setDescription('Würfelt eine zufällige Zahl zwischen 1 und 6'),
    async execute(interaction) {
        const sent = await interaction.reply({ content: '🎲', fetch: true});
        
        const result = Math.floor(Math.random() * 6) + 1;

        await interaction.editReply(`🎲 Du hast eine ${result} gewürfelt!`);
    },
}