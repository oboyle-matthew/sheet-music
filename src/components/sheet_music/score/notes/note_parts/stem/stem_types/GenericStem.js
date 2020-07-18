import React from 'react';
import styled from "styled-components";

function GenericStem(props) {
    const { stemWidth, stemHeight, color, top, left, borderRadius } = props;
    return (
        <Stem width={stemWidth} height={stemHeight} color={color} top={top} left={left} borderRadius={borderRadius} className={'stem'}/>
    )
}

const Stem = styled.div`
    position: relative;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    background: ${props => props.color};
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    border-radius: ${props => props.borderRadius};
`;

export default GenericStem;
