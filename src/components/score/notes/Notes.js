import React from 'react';
import styled from "styled-components";
import NoteReader from "./NoteReader";
import NoteReaderOLD from "./NoteReaderOLD";
import {getDistanceFromTop} from "../../../helpers/GetPosFromNote";
// {"pitch": "C", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:0:0"},

const posToPercentage = (position) => {
    const quarters = position.split(":")[1];
    const sixteenths = position.split(":")[2];
    const left = ((parseInt(quarters) * (1/4)) + (parseInt(sixteenths) * (1/16))) * 100;
    return left;
};

const lengthToPercentage = (length) => {
    // const total = length["4n"] * 25;
    let total = 0;
    Object.keys(length).map(key => {
        const unit = key.charAt(key.length-1);
        if (unit === "n") {
            total += length[key] * (1/key.slice(0,-1))
        } else if (unit === "m") {
            total += length[key] * key.slice(0,-1);
        }
    });
    return total*100;
}

function Notes(props) {
    return (
        <LineContainer>
            {props.notes.map((bar, i) => (
                <BarContainer bg={i}>
                    {bar.map(note => {
                        console.log(note.type);
                        const type = note.type;
                        const top = getDistanceFromTop(note);
                        const left = posToPercentage(note.position);
                        const length = lengthToPercentage(note.length);

                        return <NoteReaderOLD type={type} lineWidth={props.lineWidth} gapBetweenLines={props.gapBetweenLines} top={top} left={left} length={length}/>
                    })}
                    {/*<NoteReader type={"quarter"} lineWidth={props.lineWidth} gapBetweenLines={props.gapBetweenLines} top={2} left={125} length={100} />*/}
                    {/*/!*<NoteReader type={"quarter"} lineWidth={props.lineWidth} gapBetweenLines={props.gapBetweenLines} top={1} left={150} length={50} />*!/*/}
                    {/*/!*<NoteReader type={"quarter"} lineWidth={props.lineWidth} gapBetweenLines={props.gapBetweenLines} top={0} left={0} length={200} />*!/*/}
                    {/*<NoteReader type={"quarter"} lineWidth={props.lineWidth} gapBetweenLines={props.gapBetweenLines} top={-1} left={250} length={200} />*/}
                    {/*<NoteReader type={"quarter"} lineWidth={props.lineWidth} gapBetweenLines={props.gapBetweenLines} top={-2} left={375} length={100} />*/}
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
    border-right: 3px solid black;
    margin-left: 1%;
    // background-color: ${props => props.bg === 0 ? "pink" : "blue"};
`;

export default Notes;
