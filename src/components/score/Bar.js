import React from 'react';
import styled from 'styled-components'
import TrebleClef from "./symbols/clefs/TrebleClef";
import KeySignature from "./symbols/key_sigs/KeySignature";
import TimeSignature from "./symbols/time_sigs/TimeSignature";
import Stave from "./Stave";
import NoteReader from "./notes/NoteReader";
import RestReader from "./notes/rests/RestReader";
import {getDistanceFromTop} from "../../helpers/GetPosFromNote";

const click = (event) => {
    console.log(event.target.classList);
    console.log(event.target.classList.contains('inner'));
    if(event.target === event.currentTarget) {
        // handle
        console.log("Yes");
    } else {
        console.log("No");
    }
};

const calculateStemConnector = (currNote, nextNote, timeSig) => {
    //TODO: Need to handle it differently for different time Sigs (Also need actual TimSig, not just top/bottom, Eg. 6/8 !== 3/4
    if (currNote.type === 'eighth' || currNote.type === 'sixteenth') {
        if (nextNote.type === 'eighth' || nextNote.type === 'sixteenth') {
            const diff = getDistanceFromTop(currNote) - getDistanceFromTop(nextNote);
        }
    }
    // console.log(currNote.position);
    // console.log(nextNote.position);
    return null;
};

function LineInfo(props) {
    const { lineWidth, gapBetweenLines, width, timeSig } = props;
    return (
        <BarContainer onClick={click} width={width} gapBetweenLines={gapBetweenLines} lineWidth={lineWidth}>
            {props.notes.map((note, i) => {
                if (note.pitch === 'rest') {
                    return <RestReader timeSig={timeSig} gapBetweenLines={gapBetweenLines} lineWidth={lineWidth} note={note}/>
                } else {
                    let stemConnector = null;
                    if (i < props.notes.length-1) {
                        stemConnector = calculateStemConnector(note, props.notes[i+1], timeSig);
                    }
                    return <NoteReader timeSig={timeSig} gapBetweenLines={gapBetweenLines} lineWidth={lineWidth}
                                       note={note} stemConnector={stemConnector} />
                }
            })}
        </BarContainer>
    );
}

const Inner = styled.div`
    
`

const BarContainer = styled(Stave)`
    position: relative;
    display: flex;
    flex-direction: row;
    width: ${props => props.width}%;
    height: 100%;
    border-right: solid 2px black;
`;

export default LineInfo;
