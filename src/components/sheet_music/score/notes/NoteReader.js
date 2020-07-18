import React from 'react';
import styled from "styled-components";
import Accidental from "./accidentals/Accidental";
import Note from "./Note";
import {getDistanceFromTop, getLeftDistance, getNoteLength} from "../../../helpers/GetPosFromNote";
import Beams from "./note_parts/beams/Beams";

const posToPercentage = (position, timeSig) => {
    const quarters = position.split(":")[1];
    const sixteenths = position.split(":")[2];
    const numberOfSixteenthNotes = timeSig*16;
    const left = (((parseFloat(quarters) * 4) + parseFloat(sixteenths)) / numberOfSixteenthNotes) * 100;
    return left;
};

const lengthToPercentage = (length, timeSig) => {
    return getNoteLength(length, timeSig) * 100;
};

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
    const top = getDistanceFromTop(note);
    const topOffset = (top/2) * gapBetweenLines + ((top+2)/2) * lineWidth;
    const left = posToPercentage(note.position, timeSig);
    const length = lengthToPercentage(note.length, timeSig);
    const noteInfo = {
        selected: note.selected,
        type: note.type,
        label: true,
        name: note.pitch,
        stem: note.stem,
        stemHeight: note.stemHeight ? note.stemHeight : 6,
        flag: note.flag,
        beams: note.beams,
        width: gapBetweenLines,
        height: gapBetweenLines,
    };

    return (
        <NoteContainer left={left} length={length} top={topOffset} height={gapBetweenLines} >
            {/*<Accidental type={note.accidental} accidentalHeight={gapBetweenLines} />*/}
            <Note gapBetweenLines={gapBetweenLines} lineWidth={lineWidth} noteInfo={noteInfo} />
        </NoteContainer>
    );
}

const NoteContainer = styled.div`
    position: absolute;
    left: ${props => props.left}%;
    top: ${props => props.top}px;
    display: flex;
    flex-direction: row;
    // background-color: ${getRandomColor};
    width: ${props => props.length}%;
    height: ${props => props.height}px;
`;

export default NoteReader;
