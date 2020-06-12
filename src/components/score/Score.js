import React from 'react';
import ScoreLine from "./ScoreLine";

const testNotes = [
    [
        {"pitch": "C", "octave": 3, "type": "quarter", "length": {"16n": 4}, "position": "0:0:0"},
        {"pitch": "E", "octave": 3, "accidental": "sharp", "type": "half", "length": {"4n": 2}, "position": "0:1:0"},
        {"pitch": "G", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    ],
    [
        {"pitch": "C", "octave": 4, "type": "quarter", "length": {"1m": 1}, "position": "1:0:0"},
    ],
    [
        {"pitch": "C", "octave": 3, "type": "quarter", "length": {"4n": 4}, "position": "0:0:0"},
        {"pitch": "D", "octave": 3, "accidental": "sharp", "type": "half", "length": {"4n": 2}, "position": "0:1:0"},
        {"pitch": "E", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    ],
    [
        {"pitch": "F", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:0:0"},
        {"pitch": "G", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:1:0"},
        {"pitch": "A", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:2:0"},
        {"pitch": "B", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    ],
    [
        {"pitch": "G", "octave": 3, "type": "quarter", "length": {"1m": 1}, "position": "1:0:0"},
    ],
    [
        {"pitch": "C", "octave": 3, "type": "quarter", "length": {"4n": 4}, "position": "0:0:0"},
        {"pitch": "D", "octave": 3, "accidental": "sharp", "type": "half", "length": {"4n": 2}, "position": "0:1:0"},
        {"pitch": "E", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    ],
    [
        {"pitch": "F", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:0:0"},
        {"pitch": "G", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:1:0"},
        {"pitch": "A", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:2:0"},
        {"pitch": "B", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    ],
    [
        {"pitch": "C", "octave": 3, "type": "quarter", "length": {"4n": 4}, "position": "0:0:0"},
        {"pitch": "D", "octave": 3, "accidental": "sharp", "type": "half", "length": {"4n": 2}, "position": "0:1:0"},
        {"pitch": "E", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    ],
    [
        {"pitch": "F", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:0:0"},
        {"pitch": "G", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:1:0"},
        {"pitch": "A", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:2:0"},
        {"pitch": "B", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    ],
];

function Score() {
    const barsPerLines = 3;
    let splitByBar = [];
    for (let i = 0; i < testNotes.length; i += barsPerLines) {
        splitByBar.push(testNotes.slice(i, i+barsPerLines));
    }
    console.log(splitByBar);
    return (
        <div>
            {splitByBar.map(bar => <ScoreLine notes={bar} />)}

        </div>
    );
}

export default Score;
