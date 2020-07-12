import React from 'react';
import styled from "styled-components";

// function Beam(props) {
//     const { beam } = props;
//     return <div>
//         Beam
//     </div>
// }

const Beam = styled.div`
    background-color: red;
    position: relative;
    height: 100px;
    opacity: 0.3;
    width: ${props => props.length*100}%;
    left: ${props => props.start*100}%;
`;

export default Beam;
