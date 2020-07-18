import React from 'react';
import styled from 'styled-components'
import TrebleClef from "./symbols/clefs/TrebleClef";
import KeySignature from "./symbols/key_sigs/KeySignature";
import TimeSignature from "./symbols/time_sigs/TimeSignature";
import Stave from "./Stave";

function LineInfo(props) {
    return (
        <LineInfoContainer gapBetweenLines={props.gapBetweenLines} lineWidth={props.lineWidth}>
            <TrebleClef/>
            <KeySignature/>
            <TimeSignature timeSig={props.timeSig}/>
        </LineInfoContainer>
    );
}

const LineInfoContainer = styled(Stave)`
    display: flex;
    flex-direction: row;
    &:hover {
        background: green;
    }
`;

export default LineInfo;
