import React from 'react';
import styled from "styled-components";
import GenericStem from "./GenericStem";
import DownStemFlag from "../../flag/DownStemFlag";

function DownStem(props) {
    const { stemHeight, noteHeight, color, stemWidth, flag} = props
    const top = noteHeight/2;
    const left = 0;
    const borderRadius = '100px 0 0 0';
    return (
        <StemContainer className={'stem'}>
            <GenericStem stemWidth={stemWidth} stemHeight={stemHeight} color={color} top={top} left={left} borderRadius={borderRadius} />
            {flag && <DownStemFlag noteHeight={noteHeight} stemHeight={stemHeight} flag={flag} />}
        </StemContainer>
    )
}

const StemContainer = styled.div`
    position: absolute;
`;

export default DownStem;
