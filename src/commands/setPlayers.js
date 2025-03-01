const { SlashCommandBuilder } = require('discord.js');
const config = require('../config');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setplayer')
        .setDescription('Set a player name for pick/ban updates')
        .addIntegerOption(option =>
            option.setName('number')
                .setDescription('Player number (1 or 2)')
                .setRequired(true)
                .addChoices(
                    { name: 'Player 1', value: 1 },
                    { name: 'Player 2', value: 2 }
                ))
        .addStringOption(option =>
            option.setName('name')
                .setDescription('Player name')
                .setRequired(true)),

    async execute(interaction) {
        const playerNumber = interaction.options.getInteger('number');
        const playerName = interaction.options.getString('name');

        config.state.players[playerNumber] = playerName;

        await interaction.reply(`Set Player ${playerNumber} name to "${playerName}"`);
    }
};