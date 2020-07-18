import React from 'react';
import styled from "styled-components";

function NoteHead(props) {
    return (
        <RotatedHead
            background={props.background} borderWidth={props.borderWidth} stemHeight={props.stemHeight}
            stemWidth={props.stemWidth} noteWidth={props.noteWidth} noteHeight={props.noteHeight}
        />
    );
}

const RotatedHead = styled.div`
    position: absolute;
    border-radius: 200%;
    border: ${props => props.borderWidth}px solid black;
    width: ${props => props.noteWidth-(props.borderWidth*2)}px;
    height: ${props => props.noteHeight-(props.borderWidth*2)}px;
    background: ${props => props.background};
    transform: rotate(-30deg);
`;

const HeadWithText = styled.div`
    position: absolute;
    border-radius: 200%;
    border: ${props => props.borderWidth}px solid black;
    width: ${props => props.noteWidth-(props.borderWidth*2)}px;
    height: ${props => props.noteWidth-(props.borderWidth*2)}px;
    background: ${props => props.background};
    color: ${props => props.background === "black" ? "white" : "black"};
`

export default NoteHead;