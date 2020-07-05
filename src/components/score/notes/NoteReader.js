import React from 'react';
import styled from "styled-components";
import Accidental from "./accidentals/Accidental";
import Note from "./Note";
import Rest from "./rests/RestReader";
import {getDistanceFromTop} from "../../../helpers/GetPosFromNote";

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
        flag: note.flag,
        stemConnector: note.stemConnector,
        width: gapBetweenLines,
        height: gapBetweenLines,
    };

    return (
        <NoteContainer left={left} length={length} top={topOffset} height={gapBetweenLines} >
            <Accidental type={note.accidental} accidentalHeight={gapBetweenLines} />
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
