const config = require('../../config');
const { sendToMatchChannel } = require('../../services/discordService');


module.exports = function () {
    console.log('State reset');
    if (config.state.isActive && config.state.matchChannel) {
        sendToMatchChannel('⚠️ Pick/Ban state has been reset');
    }

    config.state.lastState = null;
    config.state.players = {
        player1: "Player 1",
        player2: "Player 2"
    };

    config.state.tiebreakerMapId = null;
};