import React from 'react';
import styled from "styled-components";
import Accidental from "./accidentals/Accidental";
import Note from "./Note";
import Rest from "./rests/RestReader";

const pitchToTop = {
    "C": 2,
    "B": 3,
    "A": 4,
    "G": 5,
    "F": 6,
    "E": 0,
    "D": 1,
};

const posToPercentage = (position, timeSig) => {
    const quarters = position.split(":")[1];
    const sixteenths = position.split(":")[2];
    const numberOfSixteenthNotes = timeSig*16;
    const left = (((parseFloat(quarters) * 4) + parseFloat(sixteenths)) / numberOfSixteenthNotes) * 100;
    return left;
};

const lengthToPercentage = (length, timeSig) => {
    let total = 0;
    Object.keys(length).map(key => {
        const unit = key.charAt(key.length-1);
        if (unit === "n") {
            total += length[key] * ((1/key.slice(0,-1)) / timeSig);
        } else if (unit === "m") {
            total += length[key] * key.slice(0,-1);
        }
    });
    return total*100;
}

const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function NoteReader(props) {
    const { gapBetweenLines, lineWidth, note, timeSig} = props;
    const top = pitchToTop[note.pitch];
    let stem;
    if (top  < 4) {
        stem = 'down';
    } else {
        stem = 'up';
    }
    const topOffset = (top/2) * gapBetweenLines + ((top+2)/2) * lineWidth;
    const left = posToPercentage(note.position, timeSig);
    const length = lengthToPercentage(note.length, timeSig);

    return (
        <NoteContainer left={left} length={length} top={topOffset} height={gapBetweenLines} >
            <Accidental type={note.accidental} accidentalHeight={gapBetweenLines} />
            <Note selected={note.selected} type={note.type} label={false} gapBetweenLines={gapBetweenLines} noteName={note.pitch} stem={stem} lineWidth={lineWidth} />
        </NoteContainer>
    );
}

const NoteContainer = styled.div`
    position: absolute;
    left: ${props => props.left}%;
    top: ${props => props.top}px;
    display: flex;
    flex-direction: row;
    background-color: ${getRandomColor};
    width: ${props => props.length}%;
    height: ${props => props.height}px;
`;

export default NoteReader;
