import React from 'react';
import styled from 'styled-components'

function TimeSignature() {
    return (
        <TimeSigContainer>
            <Top>3</Top>
            <Bottom>4</Bottom>
        </TimeSigContainer>
    );
}

const TimeSigContainer = styled.div`
    margin-left: 15px;
    font-size: 40px;
    font-weight: heavy;
    //background-color: green;
`;

const Top = styled.div`
    margin-top: -7px;
`;

const Bottom = styled.div`
    margin-top: -9px;
`;

export default TimeSignature;
