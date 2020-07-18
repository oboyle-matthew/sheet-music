import React from 'react';
import styled from 'styled-components'

const test = (e) => {
    console.log(e.nativeEvent.offsetY);
};

function TrebleClef(props) {
    return (
        <Treble innerSize={props.innerSize}>
            &#119070;
            <Test onMouseMove={test} />
        </Treble>
    );
}

const Treble = styled.span`
    margin-left: 5px;
    margin-top: -${props => props.innerSize*0.43}px;
    font-size: ${props => props.innerSize*1.37}px;
`;

const Test = styled.div`
    display: none;
    margin-top: -50px;
    height: 100px;
    background-color: purple;
`;

export default TrebleClef;
