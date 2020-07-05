import React from 'react';
import styled from 'styled-components'
import LineInfo from "./LineInfo";
import Bar from "./Bar";

const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function ScoreLine(props) {
    const { lineWidth, gapBetweenLines, timeSig } = props;
    return (
        <StaffContainer gapBetweenLines={gapBetweenLines} lineWidth={lineWidth} >
            {/*<TestContainer>*/}
                {/*<Test/>*/}
            {/*</TestContainer>*/}
            <LineInfo lineWidth={lineWidth} gapBetweenLines={gapBetweenLines} timeSig={timeSig} />
            {props.notes.map(bar => (
                <Bar timeSig={timeSig[0]/timeSig[1]} notes={bar} lineWidth={lineWidth} gapBetweenLines={gapBetweenLines} width={100/props.notes.length} />
            ))}
        </StaffContainer>
    )
}

const StaffContainer = styled.div`
    padding-top: ${props => props.gapBetweenLines*2}px;
    padding-bottom: ${props => props.gapBetweenLines*2}px;
    // background-color: ${getRandomColor};
    width: 100%;
    height: ${props => (props.lineWidth*5+props.gapBetweenLines*4)}px;
    display: flex;
    flex-direction: row;
`;

const TestContainer = styled.div`
    position: absolute;
    left: 150px;
    z-index: 9999999;
    width: 1000px;
    background-color: yellow;
    // top: 50px;
   
`;

const Test = styled.div`
    background-color: purple;
    height: 10px;
    width: 50%;
    transform-origin: top left;
    transform: rotate(5deg) skew(5deg);
   
`;

export default ScoreLine;
