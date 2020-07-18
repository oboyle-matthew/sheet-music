import React from 'react';
import styled from "styled-components";
import GenericStem from "./GenericStem";
import UpStemFlag from "../../flag/UpStemFlag";

function UpStem(props) {
    const { stemHeight, noteHeight, color, stemWidth, noteWidth, flag} = props;
    const top = noteHeight/2 - stemHeight;
    const left = noteWidth + stemWidth;
    const borderRadius = '0 0 100px 0';
    return (
        <StemContainer>
            <GenericStem stemWidth={stemWidth} stemHeight={stemHeight} color={color} top={top} left={left} borderRadius={borderRadius} />
            {flag && <UpStemFlag noteHeight={noteHeight} stemHeight={stemHeight} stemWidth={stemWidth} flag={flag} />}
        </StemContainer>
    )
}

const StemContainer = styled.div`
    position: absolute;
`;

export default UpStem;
