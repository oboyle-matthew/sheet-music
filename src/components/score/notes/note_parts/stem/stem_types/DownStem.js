import React from 'react';
import styled from "styled-components";
import {GenericStem} from "./GenericStem";
import DownStemFlag from "../../flag/DownStemFlag";

function DownStem(props) {
    const { stemHeight, noteHeight, color, stemWidth, flag} = props;
    return (
        <StemContainer>
            <Stem stemWidth={stemWidth} stemHeight={stemHeight} noteHeight={noteHeight} color={color} />
            {flag && <DownStemFlag noteHeight={noteHeight} stemHeight={stemHeight} flag={flag} />}
        </StemContainer>
    )
}

const StemContainer = styled.div`
    position: absolute;
`;

const Stem = styled(GenericStem)`
    top: ${props => props.noteHeight/2}px;
    border-radius: 100px 0 0 0;
`;

export default DownStem;
