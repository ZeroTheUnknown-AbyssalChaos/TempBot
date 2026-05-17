const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Bot antwortet mit seiner aktuellen Latenz'),
    async execute(interaction) {
        const sent = await interaction.reply({ content: '🏓 Pong!', fetch: true});

        const clientLatency = sent.createdTimestamp - interaction.createdTimestamp;
        const wsLatency = Math.round(interaction.client.ws.ping);

        await interaction.editReply(`🏓 Pong! Latenz: ${clientLatency}`);
    },
}
