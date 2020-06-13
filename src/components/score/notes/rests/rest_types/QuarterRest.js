import React from 'react';
import styled from 'styled-components'
import quarter from "../../../../../data/rests/quarter.svg";


function QuarterRest(props) {
    const size = props.gapBetweenLines*2 + props.lineWidth;
    return (
        <Rest src={quarter} size={size} />
    );
}


const Rest = styled.img`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    margin: auto 0;
`;

export default QuarterRest;
