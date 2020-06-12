import React from 'react';
import styled from "styled-components";
import NoteHead from "./NoteHead";

function GenericNote(props) {
    return (
        <Note background={background} borderWidth={props.borderWidth} stemHeight={props.stemHeight} stemWidth={props.stemWidth} noteWidth={props.noteWidth} noteHeight={props.noteHeight}>
            <NoteHead background={background} borderWidth={props.borderWidth} stemHeight={props.stemHeight} stemWidth={props.stemWidth} noteWidth={props.noteWidth} noteHeight={props.noteHeight}/>
            <DownNoteStem background={background} borderWidth={props.borderWidth} stemHeight={props.stemHeight} stemWidth={props.stemWidth} noteWidth={props.noteWidth} noteHeight={props.noteHeight}/>
            {/*<UpNoteStem background={background} borderWidth={props.borderWidth} stemHeight={props.stemHeight} stemWidth={props.stemWidth} noteWidth={props.noteWidth} noteHeight={props.noteHeight}/>*/}
        </Note>
    );
}

const NoteStem = styled.div`
    position: relative;
    display: block;
    width: ${props => props.stemWidth}px;
    height: ${props => props.stemHeight}px;
    background: black;
`;

const DownNoteStem = styled(NoteStem)`
    & {
        top: ${props => props.noteHeight/2}px;
        left: ${props => props.stemWidth/4}px;
        width: ${props => props.stemWidth}px;
        height: ${props => props.stemHeight}px;
        border-radius: 100px/400px 0 0 0;
    }
`;

const UpNoteStem = styled(NoteStem)`
    & {
        top: ${props => props.noteHeight/2 - props.stemHeight}px;
        left: ${props => props.noteWidth-props.stemWidth}px;
        width: ${props => props.stemWidth}px;
        height: ${props => props.stemHeight}px;
        border-radius: 0 0 100px/360px 0;
    }
`;


const Note = styled.div`
    // background-color: purple;
    margin-top: 1px;
`;

export default GenericNote;