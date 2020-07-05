import {getDistanceFromTop} from "./GetPosFromNote";

export const createStems = (bar, timeSig) => {
    // console.log(bar);
    console.log("\n");
    const splitByBeats = splitNotesByBeats(bar, timeSig);
    splitByBeats.forEach(beat => {
        const smallestSubDiv = getSmallestSubdivision(beat);
        if (smallestSubDiv >= 0) {
            // console.log(beat);
            for (let subDiv = 0; subDiv <= smallestSubDiv; subDiv++) {
                getChain(subDiv, beat);
            }
        }
    });
    console.log(bar);
    return bar;
};

const getChain = (typeIndex, beat) => {
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
                currChain.notes.forEach((note, i) => {
                    if (!note.hasOwnProperty('stemConnector')) {
                        note.stemConnector = [];
                    }
                    note.stemConnector.push({
                        location: i === 0 ? 'start' : (i === currChain.notes.length-1 ? 'end' : 'middle'),
                        from: getDistanceFromTop(firstElem),
                        to: getDistanceFromTop(lastElem),
                        min: currChain.min,
                        max: currChain.max,
                        type: typeIndex,
                    });
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
    bar.filter(note => note.type !== 'rest').forEach(note => {
        const { position } = note;
        const quarters = position.split(":")[1];
        const sixteenths = position.split(":")[2];
        const total = (parseFloat(quarters) * 4) + parseFloat(sixteenths);
        const sixteenthsInBeat = (1/timeSig[1]) * 16;
        splitByBeats[Math.floor(total/sixteenthsInBeat)].push(note);
    });
    return splitByBeats;
};

const posToPercentage = (position, timeSig) => {
    const quarters = position.split(":")[1];
    const sixteenths = position.split(":")[2];
    const numberOfSixteenthNotes = timeSig*16;
    const left = (((parseFloat(quarters) * 4) + parseFloat(sixteenths)) / numberOfSixteenthNotes) * 100;
    return left;
};