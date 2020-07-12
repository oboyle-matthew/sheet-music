import React from 'react';
import styled from "styled-components";
import Beam from "./Beam";

function Beams(props) {
    const { beams, gapBetweenLines } = props;
    return <BeamsContainer gapBetweenLines={gapBetweenLines} >
        {beams.map(beam => {
            console.log(beam);
            return <Beam length={beam.length} start={beam.start} />
        })}
    </BeamsContainer>
}

const BeamsContainer = styled.div`
    left: ${props => props.gapBetweenLines}px; 
    position: absolute;
    width: 100%;
`;

export default Beams;
