import React from 'react';
import styled from "styled-components";

const Beam = styled.div`
    background-color: red;
    position: absolute;
    height: ${props => props.height}px;
    opacity: 0.5;
    width: ${props => props.length*100}%;
    left: calc(${props => props.start*100}% + ${props => props.startOffset}px);
    // top: 0px;
    top: ${props => props.topPos}px;
`;

export default Beam;
