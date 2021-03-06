import React from 'react';
import styled from "styled-components";
import {GenericFlag} from "./GenericFlag";

function UpStemFlag(props) {
    const { noteHeight, stemHeight, stemWidth, flag } = props;
    const height = stemHeight;
    const top = noteHeight/2 - stemHeight;
    const left = stemWidth * 2;
    return (
        <Flag height={height} top={top} left={left} src={flag} />
    )
}

const Flag = styled(GenericFlag)`
    height: ${props => props.height}px;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
`;

export default UpStemFlag;
