import React from 'react';
import styled from "styled-components";
import QuarterNote from "./note_types/real_notes/QuarterNote";
import HalfNote from "./note_types/real_notes/HalfNote";
import StemmedNote from "./note_types/generic_notes/StemmedNote";

//Head: {Rotate: true, circle: true, text: text, background: }
// Rotate: If rotate & !semi-breeve
// Width & Height
//Stem: {direction: up/down, tailType: single/connected/none, numTails: 2, connectedTo: +3}

function Note(props) {
    const { type, gapBetweenLines, lineWidth } = props;
    const noteHeight = gapBetweenLines-2;
    const noteWidth = gapBetweenLines*5/4;
    const stemHeight = 3*gapBetweenLines + 2.5*lineWidth;
    const stemWidth = props.gapBetweenLines/8;
    if (type === "quarter") {
        return <QuarterNote stemWidth={stemWidth} stemHeight={stemHeight} noteWidth={noteWidth} noteHeight={noteHeight}/>
        // noteType = <QuarterNote stemWidth={stemWidth} top={top} stemHeight={stemHeight} noteWidth={noteWidth} noteHeight={noteHeight}/>
    } if (type === "half") {
        return <HalfNote stemWidth={stemWidth} stemHeight={stemHeight} noteWidth={noteWidth} noteHeight={noteHeight}/>
    }
}

export default Note;
