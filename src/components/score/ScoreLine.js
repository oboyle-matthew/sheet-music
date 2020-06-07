import React from 'react';
import styled from 'styled-components'
import TrebleClef from "./symbols/clefs/TrebleClef";
import KeySignature from "./symbols/key_sigs/KeySignature";
import TimeSignature from "./symbols/time_sigs/TimeSignature";
import Notes from "./notes/Notes";

const lineWidth = 2;
const gapBetweenLines = 20;
const innerSize = lineWidth*3+gapBetweenLines*4;

const testNotes = [
    [
        {"pitch": "C", "octave": 3, "type": "quarter", "length": {"16n": 4}, "position": "0:0:0"},
        {"pitch": "E", "octave": 3, "accidental": "sharp", "type": "half", "length": {"4n": 2}, "position": "0:1:0"},
        {"pitch": "G", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    ],
    [
        {"pitch": "C", "octave": 4, "type": "quarter", "length": {"1m": 1}, "position": "1:0:0"},
    ]
];

class ScoreLine extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return <StaffContainer>
            <Staff>
                <TrebleClef innerSize={innerSize}/>
                <KeySignature innerSize={innerSize} lineWidth={lineWidth} gapBetweenLines={gapBetweenLines}/>
                <TimeSignature/>
                <Notes lineWidth={lineWidth} gapBetweenLines={gapBetweenLines} notes={testNotes}/>
            </Staff>
        </StaffContainer>
    };
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
    z-index: 200;
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
