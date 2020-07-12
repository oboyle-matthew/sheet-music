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
    const connectorWidth = 25;
    return (
        <StaffContainer gapBetweenLines={gapBetweenLines} lineWidth={lineWidth} >
            <TestContainer>

                <div style={{width: 500, height: 10}} />
                <div style={{width: '30%', height: 2*gapBetweenLines}}>

                    <svg style={{width: '100%', height: '100%'}} preserveAspectRatio="none" viewBox="0 0 100 100">
                        {[3].map(num => {
                            const bottomLeft = `0, ${50 + connectorWidth/2}`;
                            const topLeft = `0, ${50 - connectorWidth/2}`;
                            const topRightPos = (3-num)*connectorWidth/2;
                            const topRight = `100, ${topRightPos}`;
                            const bottomRight = `100, ${topRightPos+connectorWidth}`;
                            const points = [bottomLeft, topLeft, topRight, bottomRight];
                            return <polygon points={points.join(' ')}
                                 style={{fill: 'black'}}/>
                        })}
                    </svg>
                </div>
            </TestContainer>
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
    left: 166px;
    top: 35px;
    z-index: 99999;
`;

const Test = styled.line`
`;

export default ScoreLine;
