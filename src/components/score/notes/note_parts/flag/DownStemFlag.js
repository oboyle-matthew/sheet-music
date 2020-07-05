import React from 'react';
import styled from "styled-components";
import {GenericFlag} from "./GenericFlag";

//             noteFlag = <Flag stemHeight={stemHeight} topOffset={noteHeight / 2} src={src} leftOffset={0}/>

function UpStemFlag(props) {
    const { noteHeight, stemHeight, flag } = props;
    const height = stemHeight;
    const top = noteHeight/2;
    const left = 0;
    return (
        <Flag height={height} top={top} left={left} src={flag} />
    )
}

const Flag = styled(GenericFlag)`
    position: absolute;
    height: ${props => props.height}px;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    z-index: 80;
`;

export default UpStemFlag;
