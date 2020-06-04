import React from 'react';
import styled from "styled-components";

function QuarterNote(props) {
    const borderWidth = props.stemWidth*1.5;
    return (
        <Note borderWidth={borderWidth} stemHeight={props.stemHeight} stemWidth={props.stemWidth} noteWidth={props.noteWidth} noteHeight={props.noteHeight}/>
    );
}

const Note = styled.div`
    & {
        width: ${props => props.stemWidth}px;
        height: ${props => props.stemHeight}px;
        background: black;
        margin-left: ${props => props.noteWidth - props.stemWidth}px;
        border-radius: 0 0 100px/360px 0;
    }
    &:before {
        border-radius: 200%;
        border: ${props => props.borderWidth}px solid black;
        display: block;
        content: "";
        width: ${props => props.noteWidth-(props.borderWidth*2)}px;
        height: ${props => props.noteHeight-(props.borderWidth*2)}px;
        background: black;
        transform: rotate(-30deg);
        position: relative;
        top: ${props => props.stemHeight - props.noteHeight/2}px;
        left: ${props => props.stemWidth-props.noteWidth}px;
    }
`;

export default QuarterNote;