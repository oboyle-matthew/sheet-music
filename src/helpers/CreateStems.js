import {getDistanceFromTop, getLeftDistance, getNoteLength} from "./GetPosFromNote";
import eighthUpStemFlagSVG from "../data/flags/eighth_up_stem_flag.svg";
import eighthDownStemFlagSVG from "../data/flags/eighth_down_stem_flag.svg";
import sixteenthUpStemFlagSVG from "../data/flags/sixteenth_up_stem_flag.svg";
import sixteenthDownStemFlagSVG from "../data/flags/sixteenth_down_stem_flag.svg";

export const createStems = (bar, timeSig) => {
    // console.log(bar);
    // console.log("\n");
    const splitByBeats = splitNotesByBeats(bar, timeSig);
    splitByBeats.forEach(beat => {
        const smallestSubDiv = getSmallestSubdivision(beat);
        // if (smallestSubDiv >= 0) {
        //     // console.log(beat);
        //     for (let subDiv = 0; subDiv <= smallestSubDiv; subDiv++) {
        //         createBeams(subDiv, beat, timeSig);
        //     }
        // }
        if (smallestSubDiv >= 0) {
            for (let subDiv = 0; subDiv <= smallestSubDiv; subDiv++) {
                createChains(subDiv, beat, timeSig);
            }
            createNoteStems(beat, timeSig);
        }
        beat.forEach(note => {
            if (!note.stem) {
                assignStems(note);
            }
        })
    });
    // console.log(bar);
    return bar;
};

const assignStems = (note) => {
    const { type } = note;
    if (type !== 'whole') {
        if (getDistanceFromTop(note) < 4) {
            note.stem = 'down';
        } else {
            note.stem = 'up';
        }
    }
};

const noteIsAsShortAsType = (note, typeIndex) => {
    return note.pitch !== 'rest' && subDivOrder.indexOf(note.type) >= typeIndex
};

const createChain = (currNote, i, beat, typeIndex) => {
    const currNoteTopDistance = getDistanceFromTop(currNote);
    const currChain = {notes: [currNote], total: currNoteTopDistance};
    for (let j = i+1; j < beat.length; j++) {
        const nextNote = beat[j];
        if (noteIsAsShortAsType(nextNote, typeIndex)) {
            currChain.total += getDistanceFromTop(nextNote);
            currChain.notes.push(nextNote);
        } else {
            break;
        }
    }
    return currChain;
};

const createNewChain = (currNote, i, beat, typeIndex) => {
    const currChain = {notes: [currNote]};
    for (let j = i+1; j < beat.length; j++) {
        const nextNote = beat[j];
        if (noteIsAsShortAsType(nextNote, typeIndex)) {
            currChain.notes.push(nextNote);
        } else {
            break;
        }
    }
    currChain.type = typeIndex;
    return currChain;
};

const createChains = (typeIndex, beat, timeSig) => {
    // console.log(beat);
    // console.log(typeIndex);
    let i = 0;
    while (i < beat.length) {
        const currNote = beat[i];
        if (noteIsAsShortAsType(currNote, typeIndex)) {
            const currChain = createNewChain(currNote, i, beat, typeIndex);
            if (!currNote.chains) {
                currNote.chains = [];
            }
            currNote.chains.push(currChain);
            // console.log(currNote);
            i += currChain.notes.length;
        } else {
            i++;
        }
    }
};

const getBeamAngle = (firstElem, lastElem) => {
    const firstElemTopDistance = getDistanceFromTop(firstElem);
    let beamAngle = getDistanceFromTop(lastElem) - firstElemTopDistance;
    if (beamAngle > 3) {
        beamAngle = 3;
    } else if (beamAngle < -3) {
        beamAngle = -3;
    }
    return beamAngle;
};

const getFirstStemTopPos = (notes, stem, length, beamAngle) => {
    const firstElemTopDistance = getDistanceFromTop(notes[0]);
    let firstStemTopPos;
    if (stem === 'up') {
        firstStemTopPos = firstElemTopDistance - 6;
    } else {
        firstStemTopPos = firstElemTopDistance + 6;
    }
    notes.forEach((note) => {
        const leftDistance = getLeftDistance(note);
        const heightAtNote = firstStemTopPos + ((leftDistance / length) * beamAngle);
        if (stem === 'up') {
            const diff = getDistanceFromTop(note) - heightAtNote;
            if (diff < 6) {
                firstStemTopPos += (diff-6);
            }
        } else {
            const diff = heightAtNote - getDistanceFromTop(note);
            if (diff < 6) {
                firstStemTopPos += (6 - diff);
            }
        }
    });
    return firstStemTopPos;
};

const assignStemInfo = (notes, stem, length, beamAngle, firstStemTopPos) => {
    notes.forEach(note => {
        note.stem = stem;
        const leftDistance = getLeftDistance(note);
        const heightAtNote = firstStemTopPos + ((leftDistance / length) * beamAngle);
        note.stemHeight = Math.abs(heightAtNote - getDistanceFromTop(note));
        note.stem = stem;
    })
};

const createBeams = (firstElem, notes, beamAngle, timeSig) => {
    const sixteenthNotesInBar = (timeSig[0] * 16) / timeSig[1];
    firstElem.beams = [];
    notes.forEach(note => {
        if (note.chains) {
            note.chains.forEach(chain => {
                if (chain.notes.length > 1) {
                    const firstChainNote = chain.notes[0];
                    const lastChainNote = chain.notes[chain.notes.length-1];
                    const beamLength = (getLeftDistance(lastChainNote) - getLeftDistance(firstChainNote)) / sixteenthNotesInBar;
                    const firstChainNoteLength = getNoteLength(firstChainNote.length, timeSig[0] / timeSig[1]);
                    const startPos = (getLeftDistance(firstChainNote) - getLeftDistance(firstElem)) / sixteenthNotesInBar;
                    firstElem.beams.push({
                        start: startPos / firstChainNoteLength,
                        length: beamLength / firstChainNoteLength,
                        angle: beamAngle,
                        height: firstChainNote.stemHeight - chain.type,
                    });
                }

            })
        }
    });
};

const createEighthBeam = (notes, timeSig) => {
    const firstElem = notes[0];
    const lastElem = notes[notes.length-1];
    const length = getLeftDistance(lastElem) - getLeftDistance(firstElem);
    // Length of the chain, relative to length of the bar
    const beamAngle = getBeamAngle(firstElem, lastElem);
    const stem = getStemPos(notes);
    const firstStemTopPos = getFirstStemTopPos(notes, stem, length, beamAngle);
    assignStemInfo(notes, stem, length, beamAngle, firstStemTopPos);
    createBeams(firstElem, notes, beamAngle, timeSig);
};

const getStemPos = (notes) => {
    let totalTopPos = 0;
    notes.forEach(note => {
        totalTopPos += getDistanceFromTop(note);
    });
    const avgTopPos = totalTopPos / notes.length;
    // const averageTopPos = currChain.total / currChain.notes.length;
    return avgTopPos < 4 ? "down" : "up";
};

const addNoteFlag = (note, type) => {
    if (getDistanceFromTop(note) < 4) {
        note.flag = (type === 0) ? eighthDownStemFlagSVG : sixteenthDownStemFlagSVG;
    } else {
        note.flag = (type === 0) ? eighthUpStemFlagSVG : sixteenthUpStemFlagSVG;
    }
};

const createNoteStems = (beat, timeSig) => {
    for (let i = 0; i < beat.length; i++) {
        const currNote = beat[i];
        if (currNote.chains) {
            const firstChain = currNote.chains[0];
            if (firstChain.type === 0) {
                if (firstChain.notes.length > 1) {
                    createEighthBeam(firstChain.notes, timeSig);
                } else {
                    const lastChain = currNote.chains[currNote.chains.length-1];
                    addNoteFlag(currNote, lastChain.type);
                }
            }
        }
    }
};

const OLDcreateBeams = (typeIndex, beat, timeSig) => {
    for (let i = 0; i < beat.length; i++) {
        const currNote = beat[i];
        if (noteIsAsShortAsType(currNote, typeIndex)) {
            const currChain = createChain(currNote, i, beat, typeIndex);
            if (currChain.notes.length > 1) {
                const firstElem = currChain.notes[0];
                const lastElem = currChain.notes[currChain.notes.length-1];
                const length = getLeftDistance(lastElem) - getLeftDistance(firstElem);
                // Length of the chain, relative to length of the bar
                const percentageLength = length / ((timeSig[0] * 16) / timeSig[1]);
                if (typeIndex === 0) {
                    const firstElemTopDistance = getDistanceFromTop(firstElem);
                    let beamAngle = getDistanceFromTop(lastElem) - firstElemTopDistance;
                    if (beamAngle > 3) {
                        beamAngle = 3;
                    } else if (beamAngle < -3) {
                        beamAngle = -3;
                    }
                    const averageTopPos = currChain.total / currChain.notes.length;
                    const stem = averageTopPos < 4 ? "down" : "up";
                    let firstStemHeight;
                    if (stem === 'up') {
                        firstStemHeight = firstElemTopDistance - 6;
                    } else {
                        firstStemHeight = firstElemTopDistance + 6;
                    }
                    currChain.notes.forEach((note) => {
                        const leftDistance = getLeftDistance(note);
                        const heightAtNote = firstStemHeight + ((leftDistance / length) * beamAngle);
                        if (stem === 'up') {
                            const diff = getDistanceFromTop(note) - heightAtNote;
                            if (diff < 6) {
                                firstStemHeight += (diff-6);
                            }
                        } else {
                            const diff = heightAtNote - getDistanceFromTop(note);
                            if (diff < 6) {
                                firstStemHeight += (6 - diff);
                            }
                        }
                    });


                    currChain.notes.forEach((note, i) => {
                        note.stem = stem;
                        const leftDistance = getLeftDistance(note);
                        const heightAtNote = firstStemHeight + ((leftDistance / length) * beamAngle);
                        const stemHeight = Math.abs(heightAtNote - getDistanceFromTop(note));
                        if (i === 0) {
                            note.beam = {
                                length: percentageLength,
                                stemHeight: stemHeight,
                                beams: [{type: typeIndex, start: true}],
                                beamAngle: beamAngle,
                            }
                        } else {
                            note.beam = {
                                beams: [{type: typeIndex, start: false}],
                                stemHeight: stemHeight,
                            }
                        }
                    })
                } else {
                    currChain.notes.forEach((note, i) => {
                        note.beam.beams.push({type: typeIndex, start: i === 0});
                    })
                }
            } else {
                if (currNote.beam) {
                    if (i > 0 && beat[i-1].beam) {
                        console.log("BEFORE\n\n\n");
                        console.log(currNote);
                        console.log(currChain);
                        console.log(i);
                    } else {
                        console.log("AFTER\n\n\n");
                        console.log(currNote);
                        console.log(currChain);
                        console.log(i);
                    }

                } else {
                    if (getDistanceFromTop(currNote) < 4) {
                        currNote.flag = (typeIndex === 0) ? eighthDownStemFlagSVG : sixteenthDownStemFlagSVG;
                    } else {
                        currNote.flag = (typeIndex === 0) ? eighthUpStemFlagSVG : sixteenthUpStemFlagSVG;
                    }
                }
                if (i === 0) {
                    // console.log(beat[i-1]);
                }
            }
            i += currChain.notes.length;
            // console.log(i);
            // console.log(beat.length);
        }
    }
};

const subDivOrder = ['eighth', 'sixteenth', 'thirty-second', 'sixty-fourth'];

const getSmallestSubdivision = (beat) => {
    let smallest = -1;
    beat.filter(note => note.pitch !== 'rest').forEach(note => {
        const index = subDivOrder.indexOf(note.type);
        if (index > smallest) {
            smallest = index;
        }
    });
    return smallest;
};

const splitNotesByBeats = (bar, timeSig) => {
    const splitByBeats = [...Array(timeSig[0]).keys()].map(e => []);
    bar.forEach(note => {
        // console.log(note);
        const total = getLeftDistance(note);
        const sixteenthsInBeat = (1/timeSig[1]) * 16;
        splitByBeats[Math.floor(total/sixteenthsInBeat)].push(note);
    });
    return splitByBeats;
};