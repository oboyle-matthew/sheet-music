//TODO: 1. Make sure all parts have same number of bars.

export const getTestScoreInfo = () => {
    return {
        title: "My Test Score",
        composer: "Matthew O'Boyle",
        parts: [
            {
                name: "Piano",
                type: "piano",
                staves: 2,
            },
            {
                name: "Violin",
                type: "violin",
                staves: 1,
            }
        ],
        measures: [
            {
                timeSig: [4,4],
                keySig: {note: "D", modality: "Major"},
                tempo: {note: "quarter", speed: 120},
                notes: {
                    piano: [
                        getPianoRHMeasure(),
                        getPianoLHMeasure(),
                    ],
                    violin: [
                        getViolinMeasure(),
                    ]
                }
            },
            {
                notes: {
                    piano: [
                        getPianoLHMeasure(),
                        getPianoRHMeasure(),
                    ],
                    violin: [
                        getViolinMeasure(),
                    ]
                }
            },
            {
                notes: {
                    piano: [
                        getViolinMeasure(),
                        getPianoLHMeasure(),
                    ],
                    violin: [
                        getPianoRHMeasure(),
                    ]
                }
            },
            {
                notes: {
                    piano: [
                        getPianoRHMeasure(),
                        getViolinMeasure(),
                    ],
                    violin: [
                        getPianoLHMeasure(),
                    ]
                }
            },
        ],
    }
};

const getPianoRHMeasure = () => {
    return [
        {
            type: "note",
            pitches: [
                {
                    name: "D",
                    octave: 4,
                },
            ],
            noteType: "eighth",
            length: {"8n": 1},
            position: "0:0:0",
        },
        {
            type: "note",
            pitches: [
                {
                    name: "F",
                    octave: 4,
                    accidental: "sharp",
                },
                {
                    name: "A",
                    octave: 4,
                },
            ],
            noteType: "eighth",
            length: {"8n": 1},
            position: "0:0:2",
        },
        {
            type: "rest",
            noteType: "quarter",
            length: {"4n": 1},
            position: "0:1:0",
        },
        {
            type: "note",
            pitches: [
                {
                    name: "D",
                    octave: 5,
                },
            ],
            noteType: "quarter",
            dotted: true,
            length: {"4n": 1, "8n": 1},
            position: "0:2:0",
        },
        {
            type: "note",
            pitches: [
                {
                    name: "G",
                    octave: 5,
                    accidental: "sharp",
                },
            ],
            noteType: "eighth",
            length: {"8n": 1},
            position: "0:3:2",
        },
    ]
};

const getPianoLHMeasure = () => {
    return [
        {
            type: "note",
            pitches: [
                {
                    name: "D",
                    octave: 4,
                }
            ],
            noteType: "whole",
            length: {"1n": 1},
            position: "0:0:0",
        }
    ]
};

const getViolinMeasure = () => {
    return [
        {
            type: "note",
            pitches: [
                {
                    name: "G",
                    octave: 4,
                }
            ],
            noteType: "half",
            length: {"2n": 1},
            position: "0:0:0",
        },
        {
            type: "note",
            pitches: [
                {
                    name: "G",
                    octave: 4,
                    accidental: "sharp",
                }
            ],
            noteType: "half",
            length: {"2n": 1},
            position: "0:2:0",
        }
    ]
};