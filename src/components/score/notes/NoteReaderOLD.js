import React from 'react';
import styled from "styled-components";
import Accidental from "./accidentals/Accidental";
import Note from "./Note";

const test = (e) => {
    console.log(e.nativeEvent.offsetX);
    console.log(e.nativeEvent.offsetY);
};


function NoteReader(props) {
    const { gapBetweenLines, lineWidth } = props;
    const topOffset = (props.top/2) * props.gapBetweenLines + (props.top/2) * props.lineWidth;
    const rand = Math.floor(Math.random() * 4);
    const type = rand === 0 ? "sharp" : rand === 1 ? "natural" : rand === 2 ? "flat" : "none";
    return (
        <NoteContainer onMouseMove={test} topOffset={topOffset} left={props.left} length={props.length}>
            <Accidental accidentalHeight={gapBetweenLines} type={type}/>
            <Note type={props.type} gapBetweenLines={gapBetweenLines} lineWidth={lineWidth} />
            {/*<Note type={props.type} stemWidth={stemWidth} top={props.top} stemHeight={stemHeight} noteWidth={noteWidth} noteHeight={noteHeight} />*/}
        </NoteContainer>
    );
}

const NoteContainer = styled.div`
    position: absolute;
    left: ${props => props.left}%;
    top: ${props => props.topOffset}px;
    height: 100%;
    display: flex;
    flex-direction: row;
    // background-color: orange;
    padding-top: 50px;
    width: ${props => props.length}%;
`;

export default NoteReader;
