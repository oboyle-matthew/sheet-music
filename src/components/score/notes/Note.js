import React from 'react';
import styled from "styled-components";
import QuarterNote from "./note_types/real_notes/QuarterNote";
import HalfNote from "./note_types/real_notes/HalfNote";
import SharpSVG from "../../../data/accidentals/sharp.svg";
import NaturalSVG from "../../../data/accidentals/natural.svg";
import FlatSVG from "../../../data/accidentals/flat.svg";


function Note(props) {
    const noteHeight = props.gapBetweenLines-2;
    const noteWidth = props.gapBetweenLines*5/4;
    const accidentalHeight = props.gapBetweenLines;
    const stemHeight = 3*props.gapBetweenLines + 2.5*props.lineWidth;
    const stemWidth = props.gapBetweenLines/10;
    const topOffset = (props.top/2) * props.gapBetweenLines + (props.top/2) * props.lineWidth;
    let noteType;
    if (props.type === "quarter") {
        noteType = <QuarterNote stemWidth={stemWidth} top={props.top} stemHeight={stemHeight} noteWidth={noteWidth} noteHeight={noteHeight}/>
    } else if (props.type === "half") {
        noteType = <HalfNote stemWidth={stemWidth} top={props.top} stemHeight={stemHeight} noteWidth={noteWidth} noteHeight={noteHeight}/>
    }
    const rand = Math.floor(Math.random() * 3)
    return (
        <NoteContainer topOffset={topOffset} left={props.left} length={props.length}>
            <Accidental stemHeight={stemHeight} noteWidth={noteWidth} accidentalHeight={accidentalHeight}>
                {rand === 0 ? <SharpNaturalImage src={SharpSVG} /> : rand === 1 ? <SharpNaturalImage src={NaturalSVG} /> :  <FlatImage src={FlatSVG} />}
            </Accidental>
            {noteType}
        </NoteContainer>
    );
}

const SharpNaturalImage = styled.img`
    height: 230%;
    transform: translateY(-29%);
    float: right;
    margin-right: 15%;
`;

const FlatImage = styled.img`
    height: 170%;
    transform: translateY(-42%);
    float: right;
`;

const NoteContainer = styled.div`
    position: absolute;
    left: ${props => props.left}px;
    top: ${props => props.topOffset}px;
    display: flex;
    flex-direction: row;
    // background-color: orange;
    width: ${props => props.length}px;
`;

const Accidental = styled.div`
    margin-top: ${props => props.stemHeight - props.accidentalHeight/2}px;
    width: ${props => props.accidentalHeight}px;
    height: ${props => props.accidentalHeight}px;
    // background-color: magenta;
`;

const Sharp = styled.div`
    z-index: 100;
    float: right;
    height: 100%;
    position: relative;
    left: 10px;
    transform: translateY(-133%);
    font-size: ${props => props.fontSize}px;
    font-family: Arial;
`;

export default Note;
