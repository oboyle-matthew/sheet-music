import React from 'react';
import styled from "styled-components";

function NoteHead(props) {
    const { noteInfo, borderWidth } = props;
    let background = noteInfo.selected ? "orange" : "black";
    if (noteInfo.type === 'half' || noteInfo.type === 'whole') {
        background = 'white';
    }
    const borderColor = noteInfo.selected ? "orange" : "black";
    // TODO: Handle differently for text note head and non-text
    return (
        <TextNoteHead className={'note-head'} borderColor={borderColor} background={background} width={noteInfo.width} height={noteInfo.height} borderWidth={borderWidth} >
            {noteInfo.label && noteInfo.name}
        </TextNoteHead>
    )
}

const TextNoteHead = styled.div`
    position: absolute;
    border-radius: 200%;
    border: ${props => props.borderWidth}px solid ${props => props.borderColor};
    height: ${props => props.height}px;
    width: ${props => props.width}px;
    top: -${props => props.borderWidth}px;
    background: ${props => props.background};
    color: ${props => props.background === "black" ? "white" : "black"};
    line-height: ${props => props.height-props.borderWidth}px;
    text-align: center;
    font-size: ${props => props.height*0.9}px;
    cursor: default;
`;

export default NoteHead;
