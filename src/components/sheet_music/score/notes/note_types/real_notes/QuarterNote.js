import React from 'react';
import StemmedNote from "../generic_notes/StemmedNote";

function QuarterNote(props) {
    const borderWidth = props.stemWidth*1.5;
    return (
        <StemmedNote type="quarter" borderWidth={borderWidth} stemHeight={props.stemHeight} stemWidth={props.stemWidth} noteWidth={props.noteWidth} noteHeight={props.noteHeight}/>
    );
}

export default QuarterNote;