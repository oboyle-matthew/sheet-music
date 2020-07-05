import React from 'react';
import styled from 'styled-components'

function TimeSignature(props) {
    const { timeSig } = props;
    return (
        <TimeSigContainer>
            <Top>{timeSig[0]}</Top>
            <Bottom>{timeSig[1]}</Bottom>
        </TimeSigContainer>
    );
}

const TimeSigContainer = styled.div`
    margin-left: 15px;
    margin-right: 10px;
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
