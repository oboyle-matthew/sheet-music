import React from 'react';
import styled from 'styled-components'
import TrebleClef from "./symbols/clefs/TrebleClef";
import KeySignature from "./symbols/key_sigs/KeySignature";
import TimeSignature from "./symbols/time_sigs/TimeSignature";
import Notes from "./notes/Notes";
import LineInfo from "./LineInfo";
import Bar from "./Bar";

const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function ScoreLine(props) {
    const { lineWidth, gapBetweenLines } = props;
    return (
        <StaffContainer gapBetweenLines={gapBetweenLines} lineWidth={lineWidth} >
            <LineInfo lineWidth={lineWidth} gapBetweenLines={gapBetweenLines} />
            {props.notes.map(bar => (
                <Bar notes={bar} lineWidth={lineWidth} gapBetweenLines={gapBetweenLines} width={100/props.notes.length} />
            ))}
        </StaffContainer>
    )
}

const StaffContainer = styled.div`
    padding-top: ${props => props.gapBetweenLines*2}px;
    padding-bottom: ${props => props.gapBetweenLines*2}px;
    // background-color: ${getRandomColor};
    width: 100%;
    height: ${props => (props.lineWidth*5+props.gapBetweenLines*4)}px;
    display: flex;
    flex-direction: row;
`;

export default ScoreLine;
