import React from 'react';
import styled from "styled-components";
import Note from "./Note";

function Notes(props) {
    console.log(props.gapBetweenLines);
    return (
        <LineContainer>
            {props.notes.map((bar, i) => (
                <BarContainer bg={i}>
                    <Note lineWidth={props.lineWidth} gapBetweenLines={props.gapBetweenLines} top={3} left={0} length={100}/>
                    <Note lineWidth={props.lineWidth} gapBetweenLines={props.gapBetweenLines} top={2} left={100} length={50} />
                    <Note lineWidth={props.lineWidth} gapBetweenLines={props.gapBetweenLines} top={1} left={150} length={50} />
                    <Note lineWidth={props.lineWidth} gapBetweenLines={props.gapBetweenLines} top={0} left={200} length={50} />
                    <Note lineWidth={props.lineWidth} gapBetweenLines={props.gapBetweenLines} top={-1} left={250} length={50} />
                    <Note lineWidth={props.lineWidth} gapBetweenLines={props.gapBetweenLines} top={-2} left={300} length={75} />
                    <Note lineWidth={props.lineWidth} gapBetweenLines={props.gapBetweenLines} top={-3} left={375} length={125} />

                </BarContainer>

            ))}

        </LineContainer>
    );
}

const BarLine = styled.div`
    border-left: 6px solid green;
    height: 100%;
`;

const LineContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    //background-color: yellow;
`;

const BarContainer = styled.div`
    position: relative;
    width: 50%;
    //background-color: ${props => props.bg === 0 ? "pink" : "blue"};
`;

export default Notes;
