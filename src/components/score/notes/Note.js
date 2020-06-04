import React from 'react';
import styled from "styled-components";
import QuarterNote from "./note_types/QuarterNote";

function Note(props) {
    const noteHeight = props.gapBetweenLines-2;
    const noteWidth = props.gapBetweenLines*5/4;
    const accidentalHeight = props.gapBetweenLines;
    const stemHeight = 3*props.gapBetweenLines + 2.5*props.lineWidth;
    const stemWidth = props.gapBetweenLines/10;
    const topOffset = (props.top/2) * props.gapBetweenLines + (props.top/2) * props.lineWidth;
    return (
        <NoteContainer topOffset={topOffset} left={props.left} length={props.length}>
            <Accidental stemHeight={stemHeight} noteHeight={noteHeight} noteWidth={noteWidth} accidentalHeight={accidentalHeight}>
                <Sharp accidentalHeight={accidentalHeight} fontSize={props.gapBetweenLines*2}>&#9839;</Sharp>
            </Accidental>
            <QuarterNote type={props.type} stemWidth={stemWidth} top={props.top} stemHeight={stemHeight} noteWidth={noteWidth} noteHeight={noteHeight}/>
        </NoteContainer>
    );
}

const NoteContainer = styled.div`
    position: absolute;
    left: ${props => props.left}px;
    top: ${props => props.topOffset}px;
    display: flex;
    flex-direction: row;
    //background-color: orange;
    width: ${props => props.length}px;
`;

const Accidental = styled.div`
    margin-top: ${props => props.stemHeight - props.noteHeight/2 - (props.accidentalHeight-props.noteHeight) / 2}px;
    width: ${props => props.noteWidth}px;
    height: ${props => props.accidentalHeight}px;
    //background-color: magenta;
`;

const Sharp = styled.div`
    z-index: 100;
    float: right;
    height: ${props => props.accidentalHeight}px;
    line-height: ${props => props.accidentalHeight*0.75}px;
    font-size: ${props => props.fontSize}px;
    font-family: Arial;
`;

export default Note;
