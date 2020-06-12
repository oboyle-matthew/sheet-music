import React from 'react';
import styled from 'styled-components'
import TrebleClef from "./symbols/clefs/TrebleClef";
import KeySignature from "./symbols/key_sigs/KeySignature";
import TimeSignature from "./symbols/time_sigs/TimeSignature";
import Notes from "./notes/Notes";

const lineWidth = 2;
const gapBetweenLines = 20;
const innerSize = lineWidth*3+gapBetweenLines*4;

function ScoreLine(props) {
    return (
        <StaffContainer>
            <Staff>
                <TrebleClef innerSize={innerSize}/>
                <KeySignature innerSize={innerSize} lineWidth={lineWidth} gapBetweenLines={gapBetweenLines}/>
                <TimeSignature/>
                <Notes lineWidth={lineWidth} gapBetweenLines={gapBetweenLines} notes={props.notes}/>
            </Staff>
        </StaffContainer>
    )
}

const StaffContainer = styled.div`
    margin-top: 30px;
`;

const Staff = styled.div`
  & {
    position: relative;
    width: 100%;
    border-top: ${lineWidth}px solid black;
    border-bottom: ${lineWidth}px solid black;
    height: ${(lineWidth*3+gapBetweenLines*4)}px;
    display: flex;
    flex-direction: row;
  }
  &:before {
    position: absolute;
    left: 0;
    border-top: ${lineWidth}px solid black;
    border-bottom: ${lineWidth}px solid black;
    content: "";
    top: ${gapBetweenLines}px;
    height: ${gapBetweenLines}px;
    width: 100%;
    z-index: 200;
  }
  &:after {
    position: absolute;
    left: 0;
    border-top: ${lineWidth}px solid black;
    content: "";
    top: ${(lineWidth*2+gapBetweenLines*3)}px;
    width: 100%;
    z-index: 200;
  }
  
`;

export default ScoreLine;
