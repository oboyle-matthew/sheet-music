import React from 'react';
import styled from "styled-components";
import QuarterNote from "./note_types/real_notes/QuarterNote";
import HalfNote from "./note_types/real_notes/HalfNote";


function Note(props) {
    const { stemWidth, top, stemHeight, noteWidth, noteHeight, type } = props;
    let noteType;
    if (type === "quarter") {
        noteType = <QuarterNote stemWidth={stemWidth} top={top} stemHeight={stemHeight} noteWidth={noteWidth} noteHeight={noteHeight}/>
    } else if (type === "half") {
        noteType = <HalfNote stemWidth={stemWidth} top={top} stemHeight={stemHeight} noteWidth={noteWidth} noteHeight={noteHeight}/>
    }
    return (
        noteType
    );
}

export default Note;
