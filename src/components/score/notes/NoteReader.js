import React from 'react';
import styled from "styled-components";
import Accidental from "./accidentals/Accidental";
import Note from "./Note";


function NoteReader(props) {
    const { gapBetweenLines, lineWidth } = props;
    const noteHeight = gapBetweenLines-2;
    const noteWidth = gapBetweenLines*5/4;
    const stemHeight = 3*gapBetweenLines + 2.5*lineWidth;
    const stemWidth = props.gapBetweenLines/10;
    const topOffset = (props.top/2) * props.gapBetweenLines + (props.top/2) * props.lineWidth;
    const rand = Math.floor(Math.random() * 3);
    const type = rand === 0 ? "sharp" : rand === 1 ? "natural" : "flat";
    return (
        <NoteContainer topOffset={topOffset} left={props.left} length={props.length}>
            <Accidental stemHeight={stemHeight} accidentalHeight={gapBetweenLines} type={type}/>
            <Note type={props.type} stemWidth={stemWidth} top={props.top} stemHeight={stemHeight} noteWidth={noteWidth} noteHeight={noteHeight} />
        </NoteContainer>
    );
}

const NoteContainer = styled.div`
    position: absolute;
    left: ${props => props.left}%;
    top: ${props => props.topOffset}px;
    display: flex;
    flex-direction: row;
    background-color: orange;
    width: ${props => props.length}%;
`;

export default NoteReader;
