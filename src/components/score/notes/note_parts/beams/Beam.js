import React from 'react';
import styled from "styled-components";

function Beam(props) {
    const { beamWidth, topPos, length, start, startOffset, angle, borderWidth, beamLength, beamOffset} = props;
    const containerHeight = beamWidth * 8;
    console.log(beamOffset);
    return <BeamContainer borderWidth={borderWidth} height={containerHeight} length={length} topPos={topPos} start={start} startOffset={startOffset}>

        <BeamSVG preserveAspectRatio="none" viewBox="0 0 100 100">
            {[angle].map(num => {
                let multiplier = 100/7;
                const leftPos = beamOffset*100;
                const rightPos = leftPos + beamLength*100;
                const totalTopLeftPos = 50 - multiplier/2;
                const totalTopRightPos = (3+num) * multiplier;

                const currTopLeftPos = totalTopLeftPos + ((totalTopRightPos - totalTopLeftPos) * beamOffset);
                const currBottomLeftPos = currTopLeftPos + multiplier;
                const currTopRightPos = totalTopLeftPos + ((totalTopRightPos - totalTopLeftPos) * (beamOffset+beamLength));
                const currBottomRightPos = currTopRightPos + multiplier;

                const bottomLeft = `${leftPos}, ${currBottomLeftPos}`;
                const topLeft = `${leftPos}, ${currTopLeftPos}`;
                const topRight = `${rightPos}, ${currTopRightPos}`;
                const bottomRight = `${rightPos}, ${currBottomRightPos}`;


                
                const points = [bottomLeft, topLeft, topRight, bottomRight];
                return <polygon points={points.join(' ')}
                                style={{fill: 'black'}}/>
            })}
        </BeamSVG>
    </BeamContainer>
}

const BeamContainer = styled.div`
    position: absolute;
    left: calc(${props => props.start*100}% + ${props => props.startOffset}px);
    width: calc(${props => props.length*100}% + ${props => props.borderWidth}px);
    height: ${props => props.height}px;
    top: ${props => props.topPos}px;
`;

const BeamSVG = styled.svg`
    position: absolute;
    top: -37.5%;
    width: 100%;
    height: 100%;
    // background-color: red;
`;

// const Beam = styled.div`
//     background-color: red;
//     position: absolute;
//     height: ${props => props.height}px;
//     opacity: 0.5;
//     width: ${props => props.length*100}%;
//     left: calc(${props => props.start*100}% + ${props => props.startOffset}px);
//     // top: 0px;
//     top: ${props => props.topPos}px;
// `;

export default Beam;
