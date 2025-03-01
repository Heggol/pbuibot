/**
 * Detect if there are new song states
 * @param {Object|null} oldSongStates Previous song states
 * @param {Object} newSongStates Current song states
 * @returns {boolean} True if new states are detected
 */
function hasNewSongState(oldSongStates, newSongStates) {
    if (!oldSongStates) return true;
    if (!newSongStates) return false;
    for (const songId in newSongStates) {
        if (!oldSongStates[songId] || oldSongStates[songId] !== newSongStates[songId]) {
            return true;
        }
    }

    return false;
}

/**
 * Determines if an update should be sent based on state changes
 * @param {Object|null} previousState The previous state
 * @param {Object} currentState The current state
 * @returns {boolean} True if an update should be sent
 */
function shouldSendUpdate(previousState, currentState) {
    if (!previousState) return true;

    const previousStep = previousState?.currentFlowStep || 0;
    const currentStep = currentState.currentFlowStep;

    return previousStep !== currentStep ||
        hasNewSongState(previousState?.songStates, currentState.songStates);
}

module.exports = {
    hasNewSongState,
    shouldSendUpdate
};