import React from 'react';
import styled from "styled-components";
import {getRandomColor} from "../../../helpers/RandomColor";
import Stem from "./note_parts/stem/Stem";
import NoteHead from "./note_parts/head/NoteHead";
import Beams from "./note_parts/beams/Beams";

function Note(props) {
    const { gapBetweenLines, lineWidth, noteInfo } = props;
    const borderWidth = lineWidth*1.5;
    const noteHeightMultiplier = (gapBetweenLines + lineWidth) / 2;
    return (
        <NoteContainer>
            <NoteHead noteInfo={noteInfo} borderWidth={borderWidth} />
            {noteInfo.stem && <Stem noteInfo={noteInfo} borderWidth={borderWidth} noteHeightMultiplier={noteHeightMultiplier} />}
            {noteInfo.beams && <Beams noteWidth={noteInfo.width} stem={noteInfo.stem} beams={noteInfo.beams} noteHeightMultiplier={noteHeightMultiplier} />}
        </NoteContainer>
    )
}

const NoteContainer = styled.div`
    width: 100%;
`

export default Note;
