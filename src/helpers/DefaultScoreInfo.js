export const getDefaultScoreInfo = () => {
    return {
        type: 'sheet', // sheet/shapes
        noteSize: 20, // gapBetweenLines
        staffSpacing: 10, // space between parts
        systemSpacing: 20, // space between lines
        barsPerLine: 2,
        leftMargin: 0, // Honestly just easier having margins as separate keys
        rightMargin: 0,
        upMargin: 0,
        downMargin: 0,
        autoSpacing: true, // space based on length of actual note, or condense if there's not that much (Eg. full bar rest)
        noteLabels: true,
        symbols: null, // symbols for each note, if type === shapes. Mapping of note to symbol
        // pitchDifference if type === shapes. Whether the notes go up or down based on pitch
    }
};