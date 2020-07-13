import React from 'react';
import styled from "styled-components";
import Beam from "./Beam";

function Beams(props) {
    const { beams, noteHeightMultiplier, stem, noteWidth } = props;
    return <BeamsContainer >
        {beams.map(beam => {
            let topPos = beam.height * noteHeightMultiplier;
            const start = beam.start;
            let startOffset = 0;
            if (stem === 'up') {
                topPos *= -1;
                startOffset = noteWidth
            }
            return <Beam length={beam.length} start={start} startOffset={startOffset} topPos={topPos} height={noteHeightMultiplier}/>
        })}
    </BeamsContainer>
}

const BeamsContainer = styled.div`
    width: 100%;
`;

export default Beams;
