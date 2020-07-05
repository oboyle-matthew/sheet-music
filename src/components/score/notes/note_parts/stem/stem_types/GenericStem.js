import React from 'react';
import styled from "styled-components";

export const GenericStem = styled.div`
    position: relative;
    width: ${props => props.stemWidth}px;
    height: ${props => props.stemHeight}px;
    background: ${props => props.color};
`;
