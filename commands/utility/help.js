const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Gibt eine Übersicht aller verfügbaren Commands als Embed aus'),
    async execute(interaction) {
        const commands = interaction.client.commands;

        if (!commands || commands.size === 0) {
            return interaction.reply({ content: 'Keine Commands geladen.', ephemeral: true });
        }

        const list = [...commands.values()]
            .sort((a, b) => a.data.name.localeCompare(b.data.name))
            .map(cmd => `- **/${cmd.data.name}** | ${cmd.data.description ?? 'Keine Beschreibung'}`)
            .join('\n');

        await interaction.reply({
            content: `📖 **Verfügbare Commands:**\n${list}`,
            ephemeral: true,
        });
    },
};