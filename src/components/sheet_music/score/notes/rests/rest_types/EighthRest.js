import React from 'react';
import styled from 'styled-components'
import eighth from "../../../../../data/rests/eighth.svg";


function EighthRest(props) {
    const size = props.gapBetweenLines*1.5 + props.lineWidth;
    return (
        <Rest src={eighth} size={size} />
    );
}


const Rest = styled.img`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    margin: auto 0;
`;

export default EighthRest;
