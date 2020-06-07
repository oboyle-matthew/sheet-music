import React from 'react';
import styled from "styled-components";

const GenericNote = styled.div`
    & {
        width: ${props => props.stemWidth}px;
        height: ${props => props.stemHeight}px;
        background: ${props => props.stem ? "black" : "transparent"};
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
        background: ${props => props.background};
        transform: rotate(${props => props.rotate ? "-30" : "0"}deg);
        position: relative;
        top: ${props => props.stemHeight - props.noteHeight/2}px;
        left: ${props => props.stemWidth-props.noteWidth}px;
    }
`;

export default GenericNote;