import React from 'react';
import styled from 'styled-components'

function TrebleClef(props) {
    return (
        <Treble innerSize={props.innerSize}>
            &#119070;
        </Treble>
    );
}

const Treble = styled.span`
    z-index: 100;
    margin-left: 5px;
    margin-top: -${props => props.innerSize*0.43}px;
    font-size: ${props => props.innerSize*1.37}px;
`;

export default TrebleClef;
