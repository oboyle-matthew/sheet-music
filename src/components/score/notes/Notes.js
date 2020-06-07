import React from 'react';
import styled from "styled-components";
import NoteReader from "./NoteReader";

function Notes(props) {
    return (
        <LineContainer>
            {props.notes.map((bar, i) => (
                <BarContainer bg={i}>
                    <NoteReader type={"half"} lineWidth={props.lineWidth} gapBetweenLines={props.gapBetweenLines} top={3} left={0} length={100}/>
                    <NoteReader type={"quarter"} lineWidth={props.lineWidth} gapBetweenLines={props.gapBetweenLines} top={2} left={125} length={100} />
                    {/*<NoteReader type={"quarter"} lineWidth={props.lineWidth} gapBetweenLines={props.gapBetweenLines} top={1} left={150} length={50} />*/}
                    {/*<NoteReader type={"quarter"} lineWidth={props.lineWidth} gapBetweenLines={props.gapBetweenLines} top={0} left={0} length={200} />*/}
                    <NoteReader type={"quarter"} lineWidth={props.lineWidth} gapBetweenLines={props.gapBetweenLines} top={-1} left={250} length={200} />
                    <NoteReader type={"quarter"} lineWidth={props.lineWidth} gapBetweenLines={props.gapBetweenLines} top={-2} left={375} length={100} />
                    {/*<NoteReader type={"half"} lineWidth={props.lineWidth} gapBetweenLines={props.gapBetweenLines} top={-3} left={375} length={125} />*/}

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
