import React from 'react';
import styled from "styled-components";
import {getRandomColor} from "../../../helpers/RandomColor";
import Stem from "./note_parts/stem/Stem";
import NoteHead from "./note_parts/head/NoteHead";
import StemConnector from "./note_parts/stem_connector/StemConnector";



function Note(props) {
    const { gapBetweenLines, lineWidth, noteInfo } = props;
    const borderWidth = lineWidth*1.5;
    return (
        <NoteContainer>
            <NoteHead noteInfo={noteInfo} borderWidth={borderWidth} />
            {noteInfo.stem && <Stem noteInfo={noteInfo} borderWidth={borderWidth} />}
            {noteInfo.stemConnector && <StemConnector noteInfo={noteInfo} />}
        </NoteContainer>
    )
}

const NoteContainer = styled.div`
`

export default Note;
