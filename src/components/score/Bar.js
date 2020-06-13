import React from 'react';
import styled from 'styled-components'
import TrebleClef from "./symbols/clefs/TrebleClef";
import KeySignature from "./symbols/key_sigs/KeySignature";
import TimeSignature from "./symbols/time_sigs/TimeSignature";
import Stave from "./Stave";
import NoteReader from "./notes/NoteReader";
import RestReader from "./notes/rests/RestReader";

const click = (event) => {
    console.log(event.target.classList);
    console.log(event.target.classList.contains('inner'));
    if(event.target === event.currentTarget) {
        // handle
        console.log("Yes");
    } else {
        console.log("No");
    }
}

function LineInfo(props) {
    const { lineWidth, gapBetweenLines, width } = props;
    return (
        <BarContainer onClick={click} width={width} gapBetweenLines={gapBetweenLines} lineWidth={lineWidth}>
            {/*{props.notes.map(note => (*/}
                {/*<div className={'test'} style={{backgroundColor: 'pink', zIndex: 3}}>*/}
                    {/*<Inner style={{backgroundColor: 'purple', height: '30px'}} className={'inner'}>*/}
                        {/*{note.type}*/}
                    {/*</Inner>*/}
                {/*</div>)*/}
            {/*)}*/}
            {props.notes.map(note => (
                note.pitch === 'rest' ? <RestReader gapBetweenLines={gapBetweenLines} lineWidth={lineWidth} note={note} /> :
                    <NoteReader gapBetweenLines={gapBetweenLines} lineWidth={lineWidth} note={note} />
            ))}
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
