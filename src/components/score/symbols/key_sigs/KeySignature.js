import React from 'react';
import styled from 'styled-components'

function KeySignature(props) {
    // const sigs = [7, 4, 8, 5, 2,6,3];
    const test = [-1, 2, -2, 1, 4, 0, 3];
    // const test = [-2,-1,0,1,2,3,4,5,6,7,8,9,10];
    const fontSize = props.innerSize*0.5;
    const height = props.gapBetweenLines;
    const sigs = test.map(num => {
        return (num/2) * props.gapBetweenLines + (num/2) * props.lineWidth;
        // return (Math.floor((num+1)/2) * props.lineWidth + Math.floor((num+1)/2) * props.gapBetweenLines);
    });
    return (
        <KeySigContainer>
            {sigs.map(offset => (
                <Sharp height={height} fontSize={fontSize} offset={offset}>&#9839;</Sharp>
            ))}
        </KeySigContainer>
    );
}

const KeySigContainer = styled.div`
    margin-left: 15px;
    display: flex;
    flex-direction: row;
`;

const Sharp = styled.div`
    z-index: 100;
    margin-top: ${props => props.offset}px;
    margin-left: -${props => props.fontSize/5}px;
    //background-color: pink;
    height: ${props => props.height}px;
    line-height: ${props => props.height*0.75}px;
    font-size: ${props => props.fontSize}px;
    font-family: Arial;
`;

const OldSharp = styled.div`
    z-index: 100;
    margin-left: -15px;
    margin-top: ${props => props.offset}px;
    font-size: ${props => props.fontSize}px;
`;

export default KeySignature;
