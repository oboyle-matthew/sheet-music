import React from 'react';
import styled from "styled-components";
import {getRandomColor} from "../../../../../helpers/RandomColor";

// import NoteHead from "./note_types/generic_notes/NoteHead";

//Head: {Rotate: true, circle: true, text: text, background: }
// Rotate: If rotate & !semi-breeve
// Width & Height
//Stem: {direction: up/down, tailType: single/connected/none, numTails: 2, connectedTo: +3}



function StemConnector(props) {
    const { gapBetweenLines, lineWidth, noteWidth, noteHeight} = props;
    return (
        <div>
            Connect
        </div>
    )
}

export default StemConnector;
