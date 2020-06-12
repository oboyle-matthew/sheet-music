import React from 'react';
import styled from "styled-components";
// import NoteHead from "./note_types/generic_notes/NoteHead";

//Head: {Rotate: true, circle: true, text: text, background: }
// Rotate: If rotate & !semi-breeve
// Width & Height
//Stem: {direction: up/down, tailType: single/connected/none, numTails: 2, connectedTo: +3}

function Note(props) {
    const { type, label, gapBetweenLines, noteName, stem, lineWidth } = props;
    const stemHeight = 3*gapBetweenLines;
    const borderWidth = lineWidth*1.5;
    let background = 'black';
    if (type === 'half' || type === 'full') {
        background = 'white';
    }
    let noteStem;
    if (stem === 'up') {
        noteStem = <UpNoteStem background={background} borderWidth={borderWidth} stemHeight={stemHeight} stemWidth={borderWidth} noteWidth={gapBetweenLines} noteHeight={gapBetweenLines}/>
    } else if (stem === 'down') {
        noteStem = <DownNoteStem background={background} borderWidth={borderWidth} stemHeight={stemHeight} stemWidth={borderWidth} noteWidth={gapBetweenLines} noteHeight={gapBetweenLines}/>
    }
    return (
        <NoteContainer>
            <TextNoteHead background={background} gapBetweenLines={gapBetweenLines} borderWidth={3} >
                {label && noteName}
            </TextNoteHead>
            {noteStem}
        </NoteContainer>
    )
}

const TextNoteHead = styled.div`
    position: absolute;
    border-radius: 200%;
    border: ${props => props.borderWidth}px solid black;
    height: ${props => props.gapBetweenLines}px;
    width: ${props => props.gapBetweenLines}px;
    top: -${props => props.borderWidth}px;
    background: ${props => props.background};
    color: ${props => props.background === "black" ? "white" : "black"};
    line-height: ${props => props.gapBetweenLines-props.borderWidth}px;
    text-align: center;
    font-size: ${props => props.gapBetweenLines*0.9}px;
`;

const NoteStem = styled.div`
    position: relative;
    width: ${props => props.stemWidth}px;
    height: ${props => props.stemHeight}px;
    background: black;
`;

const DownNoteStem = styled(NoteStem)`
    top: ${props => props.noteHeight/2}px;
    border-radius: 100px 0 0 0;
`;

const UpNoteStem = styled(NoteStem)`
    top: ${props => props.noteHeight/2 - props.stemHeight}px;
    left: ${props => props.noteWidth + props.stemWidth}px;
    border-radius: 0 0 100px 0;
`;

const NoteContainer = styled.div`

`

export default Note;
