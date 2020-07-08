import {getDistanceFromTop, getLeftDistance} from "./GetPosFromNote";
import eighthUpStemFlagSVG from "../data/flags/eighth_up_stem_flag.svg";
import eighthDownStemFlagSVG from "../data/flags/eighth_down_stem_flag.svg";
import sixteenthUpStemFlagSVG from "../data/flags/sixteenth_up_stem_flag.svg";
import sixteenthDownStemFlagSVG from "../data/flags/sixteenth_down_stem_flag.svg";

export const createStems = (bar, timeSig) => {
    // console.log(bar);
    console.log("\n");
    const splitByBeats = splitNotesByBeats(bar, timeSig);
    splitByBeats.forEach(beat => {
        const smallestSubDiv = getSmallestSubdivision(beat);
        if (smallestSubDiv >= 0) {
            // console.log(beat);
            for (let subDiv = 0; subDiv <= smallestSubDiv; subDiv++) {
                getChain(subDiv, beat, timeSig);
            }
        }
        beat.forEach(note => {
            if (!note.stemConnector) {
                assignStems(note);
            }
        })
    });
    console.log(bar);
    return bar;
};

const assignStems = (note) => {
    const { type } = note;
    if (type !== 'whole') {
        if (getDistanceFromTop(note) < 4) {
            note.stem = 'down';
            if (type !== 'quarter' && type !== 'half') {
                note.flag = (type === 'eighth') ? eighthDownStemFlagSVG : sixteenthDownStemFlagSVG;
            }
        } else {
            note.stem = 'up';
            if (type !== 'quarter' && type !== 'half') {
                note.flag = (type === 'eighth') ? eighthUpStemFlagSVG : sixteenthUpStemFlagSVG;
            }
        }
    }
};

const getChain = (typeIndex, beat, timeSig) => {
    for (let i = 0; i < beat.length; i++) {
        const currNote = beat[i];
        if (subDivOrder.indexOf(currNote.type) >= typeIndex) {
            const currChain = {notes: [], max: getDistanceFromTop(currNote), min: getDistanceFromTop(currNote)};
            for (let j = i; j < beat.length; j++) {
                const nextNote = beat[j];
                if (subDivOrder.indexOf(nextNote.type) >= typeIndex) {
                    const topPos = getDistanceFromTop(nextNote);
                    if (topPos > currChain.max) {
                        currChain.max = topPos;
                    }
                    if (topPos < currChain.min) {
                        currChain.min = topPos;
                    }
                    currChain.notes.push(nextNote);
                    if (j+1 === beat.length || subDivOrder.indexOf(beat[j+1].type) < typeIndex) {
                        i = j+1;
                        j = beat.length;
                    }
                } else {
                    i = j+1;
                    j = beat.length;
                }
            }
            if (currChain.notes.length > 1) {
                const firstElem = currChain.notes[0];
                const lastElem = currChain.notes[currChain.notes.length-1];
                const length = getLeftDistance(lastElem) - getLeftDistance(firstElem);
                console.log("Len");
                console.log(length);
                console.log(timeSig[0]);
                console.log(timeSig[1]);
                // Length of the chain, relative to length of the bar
                const percentageLength = length / ((timeSig[0] * 16) / timeSig[1]);
                console.log(percentageLength);
                console.log(currChain);
                console.log(currChain.max);
                currChain.notes.forEach((note, i) => {
                    if (!note.hasOwnProperty('stemConnector')) {
                        note.stemConnector = [];
                    }
                    if (i === 0) {
                        note.stemConnector.push({
                            start: true,
                            length: percentageLength,
                            height: 10,
                            transform: 5,
                            type: typeIndex,
                        })
                    } else {
                        note.stemConnector.push({
                            start: false,
                            height: 10 + i,
                            type: typeIndex,
                        })
                    }
                });
            }
        }
    }
};

const subDivOrder = ['eighth', 'sixteenth', 'thirtysecond', 'sixtyfourth'];

const getSmallestSubdivision = (beat) => {
    let smallest = -1;
    beat.forEach(note => {
        const index = subDivOrder.indexOf(note.type);
        if (index > smallest) {
            smallest = index;
        }
    });
    return smallest;
};

const splitNotesByBeats = (bar, timeSig) => {
    const splitByBeats = [...Array(timeSig[0]).keys()].map(e => []);
    bar.filter(note => note.pitch !== 'rest').forEach(note => {
        console.log(note);
        const total = getLeftDistance(note);
        const sixteenthsInBeat = (1/timeSig[1]) * 16;
        splitByBeats[Math.floor(total/sixteenthsInBeat)].push(note);
    });
    return splitByBeats;
};