import React from 'react';
import styled from "styled-components";
import Beam from "./Beam";

function Beams(props) {
    const { beams, noteHeightMultiplier, stem, noteWidth, borderWidth } = props;
    const start = beams[0].start;
    let startOffset = 0;
    if (stem === 'up') {
        startOffset = noteWidth + borderWidth
    }
    const totalLength = beams[0].length;
    return <BeamsContainer >
        {beams.map((beam, i) => {
            const beamOffset = (beam.start - start) / totalLength;
            const beamLength = beam.length / totalLength;
            let topPos = beam.height * noteHeightMultiplier;
            if (stem === 'up') {
                topPos *= -1;
            }
            return <Beam beamOffset={beamOffset}
                         beamLength={beamLength}
                         borderWidth={borderWidth}
                         angle={beam.angle}
                         beamWidth={noteHeightMultiplier}
                         length={totalLength}
                         start={start}
                         startOffset={startOffset}
                         topPos={topPos}
                         height={noteHeightMultiplier}
            />
        })}
    </BeamsContainer>
}

const BeamsContainer = styled.div`
    width: 100%;
`;

export default Beams;
