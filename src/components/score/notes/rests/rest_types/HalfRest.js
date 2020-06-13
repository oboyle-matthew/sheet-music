import React from 'react';
import styled from 'styled-components'


function HalfRest(props) {
    const { gapBetweenLines, lineWidth } = props;
    return (
        <Rest gapBetweenLines={gapBetweenLines} lineWidth={lineWidth} />
    );
}


const Rest = styled.div`
    width: ${props => props.gapBetweenLines}px;
    height: ${props => props.gapBetweenLines/2}px;
    background: black;
    position: relative;
    top: ${props => props.gapBetweenLines*1.5 + props.lineWidth*2}px;
    
`

export default HalfRest;
