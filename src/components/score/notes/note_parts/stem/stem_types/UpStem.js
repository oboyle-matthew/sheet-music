import React from 'react';
import styled from "styled-components";
import {GenericStem} from "./GenericStem";
import UpStemFlag from "../../flag/UpStemFlag";

function UpStem(props) {
    const { stemHeight, noteHeight, color, stemWidth, noteWidth, flag} = props;
    return (
        <StemContainer>
            <Stem stemWidth={stemWidth} stemHeight={stemHeight} noteHeight={noteHeight} color={color} noteWidth={noteWidth} />
            {flag && <UpStemFlag noteHeight={noteHeight} stemHeight={stemHeight} stemWidth={stemWidth} flag={flag} />}
        </StemContainer>
    )
}

const StemContainer = styled.div`
    position: absolute;
`;

const Stem = styled(GenericStem)`
    top: ${props => props.noteHeight/2 - props.stemHeight}px;
    left: ${props => props.noteWidth + props.stemWidth}px;
    border-radius: 0 0 100px 0;
`;

export default UpStem;
