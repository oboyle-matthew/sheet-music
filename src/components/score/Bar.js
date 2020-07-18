import React from 'react';
import styled from 'styled-components'
import TrebleClef from "./symbols/clefs/TrebleClef";
import KeySignature from "./symbols/key_sigs/KeySignature";
import TimeSignature from "./symbols/time_sigs/TimeSignature";
import Stave from "./Stave";
import NoteReader from "./notes/NoteReader";
import RestReader from "./notes/rests/RestReader";
import {getDistanceFromTop} from "../../helpers/GetPosFromNote";
import {getRandomColor} from "../../helpers/RandomColor";

// const click = (event) => {
//     console.log(event.target.classList);
//     console.log(event.target.classList.contains('inner'));
//     if(event.target === event.currentTarget) {
//         // handle
//         console.log("Yes");
//     } else {
//         console.log("No");
//     }
// };

const calculateStemConnector = (currNote, nextNote, timeSig) => {
    //TODO: Need to handle it differently for different time Sigs (Also need actual TimSig, not just top/bottom, Eg. 6/8 !== 3/4
    if (currNote.type === 'eighth' || currNote.type === 'sixteenth') {
        if (nextNote.type === 'eighth' || nextNote.type === 'sixteenth') {
            const diff = getDistanceFromTop(currNote) - getDistanceFromTop(nextNote);
        }
    }
    return null;
};

const click = (event, note) => {
    if (event.target.classList.contains('note-head')) {
        console.log("note-head");
    } else if (event.target.classList.contains('stem')) {
        console.log('stem');
    } else if (event.target.classList.contains('beam')) {
        console.log('beam');
    }
    console.log(event);
    // console.log("Note click");
}

function Bar(props) {
    const { lineWidth, gapBetweenLines, width, timeSig, selectNote } = props;
    return (
        <BarContainer width={width} gapBetweenLines={gapBetweenLines} lineWidth={lineWidth}>
            <NotesContainer gapBetweenLines={gapBetweenLines}>
                {props.notes.map((note, i) => {
                    let reader;
                    if (note.pitch === 'rest') {
                        reader = <RestReader timeSig={timeSig} gapBetweenLines={gapBetweenLines} lineWidth={lineWidth} note={note}/>
                    } else {
                        let stemConnector = null;
                        if (i < props.notes.length-1) {
                            stemConnector = calculateStemConnector(note, props.notes[i+1], timeSig);
                        }
                        reader = <NoteReader timeSig={timeSig} gapBetweenLines={gapBetweenLines} lineWidth={lineWidth}
                                           note={note} stemConnector={stemConnector} />
                    }
                    return <ElementContainer onClick={e => selectNote(e, note)}>
                        {reader}
                    </ElementContainer>
                })}
            </NotesContainer>
        </BarContainer>
    );
}

const ElementContainer = styled.div`
    
`

const NotesContainer = styled.div`
    position: relative;
    // background-color: ${getRandomColor()};
    // opacity: 0.5;
    width: calc(100% - ${props => props.gapBetweenLines}px);
    left: ${props => props.gapBetweenLines}px;
`;

const BarContainer = styled(Stave)`
    position: relative;
    display: flex;
    flex-direction: row;
    width: ${props => props.width}%;
    height: 100%;
    border-right: solid 2px black;
`;

export default Bar;
