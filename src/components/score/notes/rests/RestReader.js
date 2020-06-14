import React from 'react';
import styled from 'styled-components'
import Rest from "./Rest";

const posToPercentage = (position, timeSig) => {
    const quarters = position.split(":")[1];
    const sixteenths = position.split(":")[2];
    const numberOfSixteenthNotes = timeSig*16;
    const left = (((parseFloat(quarters) * 4) + parseFloat(sixteenths)) / numberOfSixteenthNotes) * 100;
    return left;
};

const lengthToPercentage = (length, timeSig) => {
    let total = 0;
    Object.keys(length).map(key => {
        const unit = key.charAt(key.length-1);
        if (unit === "n") {
            total += length[key] * ((1/key.slice(0,-1)) / timeSig);
        } else if (unit === "m") {
            total += length[key] * key.slice(0,-1);
        }
    });
    return total*100;
}

const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function RestReader(props) {
    const { gapBetweenLines, lineWidth, note, timeSig } = props;
    const left = posToPercentage(note.position, timeSig);
    const length = lengthToPercentage(note.length, timeSig);
    const height = gapBetweenLines*4 + lineWidth*5;
    return (
        <RestContainer left={left} length={length} height={height} lineWidth={lineWidth} >
            <Rest type={note.type} gapBetweenLines={gapBetweenLines} lineWidth={lineWidth}  />
        </RestContainer>
    );
}

const RestContainer = styled.div`
    position: absolute;
    left: ${props => props.left}%;
    display: flex;
    flex-direction: row;
    width: ${props => props.length}%;
    height: ${props => props.height}px;
    // background-color: ${getRandomColor};
`;

export default RestReader;
