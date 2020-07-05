import React from 'react';
import styled from "styled-components";
import eighthUpStemFlagSVG from "../../../data/flags/eighth_up_stem_flag.svg";
import eighthDownStemFlagSVG from "../../../data/flags/eighth_down_stem_flag.svg";
import sixteenthUpStemFlagSVG from "../../../data/flags/sixteenth_up_stem_flag.svg";
import sixteenthDownStemFlagSVG from "../../../data/flags/sixteenth_down_stem_flag.svg";
import {getRandomColor} from "../../../helpers/RandomColor";
import StemCreator from "./note_parts/stem/StemCreator";

// import NoteHead from "./note_types/generic_notes/NoteHead";

//Head: {Rotate: true, circle: true, text: text, background: }
// Rotate: If rotate & !semi-breeve
// Width & Height
//Stem: {direction: up/down, tailType: single/connected/none, numTails: 2, connectedTo: +3}



function Note(props) {
    const { type, label, gapBetweenLines, noteName, stem, lineWidth, selected, stemConnector } = props;
    const borderWidth = lineWidth*1.5;
    const stemHeight = 3*gapBetweenLines;
    const stemWidth = borderWidth;
    const noteWidth = gapBetweenLines;
    const noteHeight = gapBetweenLines;
    let borderColor = 'black';
    let background = 'black';
    if (type === 'half' || type === 'whole') {
        background = 'white';
    }
    if (selected) {
        background = 'orange';
        borderColor = 'orange';
    }
    // let noteStem;
    // let noteFlag;
    // let src;
    // if (stemConnector) {
    //     stemConnector.forEach((connector, i) => {
    //         if (stem === 'up') {
    //             noteStem = <UpNoteStem borderColor={borderColor} borderWidth={borderWidth} stemHeight={stemHeight} stemWidth={stemWidth} noteWidth={noteWidth} noteHeight={noteHeight}/>
    //         } else if (stem === 'down') {
    //             noteStem = <DownNoteStem borderColor={borderColor} borderWidth={borderWidth} stemHeight={stemHeight} stemWidth={stemWidth} noteWidth={noteWidth} noteHeight={noteHeight}/>
    //         }
    //         if (connector.start) {
    //             noteFlag = <StemConnector />
    //         }
    //     });
    // } else if (type !== 'whole') {
    //     if (stem === 'up') {
    //         noteStem = <UpNoteStem borderColor={borderColor} borderWidth={borderWidth} stemHeight={stemHeight} stemWidth={stemWidth} noteWidth={noteWidth} noteHeight={noteHeight}/>
    //         if (type === 'eighth' || type === 'sixteenth') {
    //             src = (type === 'eighth') ? eighthUpStemFlagSVG : sixteenthUpStemFlagSVG;
    //             noteFlag = <Flag stemHeight={stemHeight} topOffset={noteHeight/2 - stemHeight} src={src} leftOffset={borderWidth*2}  />
    //         }
    //     } else if (stem === 'down') {
    //         noteStem = <DownNoteStem borderColor={borderColor} borderWidth={borderWidth} stemHeight={stemHeight} stemWidth={stemWidth} noteWidth={noteWidth} noteHeight={noteHeight}/>
    //         if (type === 'eighth' || type === 'sixteenth') {
    //             src = (type === 'eighth') ? eighthDownStemFlagSVG : sixteenthDownStemFlagSVG;
    //             noteFlag = <Flag stemHeight={stemHeight} topOffset={noteHeight / 2} src={src} leftOffset={0}/>
    //         }
    //     }
    // }
    return (
        <NoteContainer>
            <TextNoteHead borderColor={borderColor} background={background} gapBetweenLines={gapBetweenLines} borderWidth={borderWidth} >
                {label && noteName}
            </TextNoteHead>
            {/*const { gapBetweenLines, stem, lineWidth, noteWidth, noteHeight} = props;*/}

            <StemCreator type={type} gapBetweenLines={gapBetweenLines} lineWidth={lineWidth} />
            {/*<Stem>*/}
                {/*{noteStem}*/}
                {/*{noteFlag}*/}
            {/*</Stem>*/}

        </NoteContainer>
    )
}

// const StemConnector = styled.div`
//     width: 20px;
//     height: 10px;
//     background-color: ${getRandomColor};
// `
//
// const Flag = styled.img`
//     position: absolute;
//     height: ${props => props.stemHeight}px;
//     // background: yellow;
//     top: ${props => props.topOffset}px;
//     left: ${props => props.leftOffset}px;
//     z-index: 80;
// `;

const NoteContainer = styled.div`
`

const TextNoteHead = styled.div`
    position: absolute;
    border-radius: 200%;
    border: ${props => props.borderWidth}px solid ${props => props.borderColor};
    height: ${props => props.gapBetweenLines}px;
    width: ${props => props.gapBetweenLines}px;
    top: -${props => props.borderWidth}px;
    background: ${props => props.background};
    color: ${props => props.background === "black" ? "white" : "black"};
    line-height: ${props => props.gapBetweenLines-props.borderWidth}px;
    text-align: center;
    font-size: ${props => props.gapBetweenLines*0.9}px;
`;

// const NoteStem = styled.div`
//     position: relative;
//     width: ${props => props.stemWidth}px;
//     height: ${props => props.stemHeight}px;
//     background: ${props => props.borderColor};
// `;
//
// const DownNoteStem = styled(NoteStem)`
//     top: ${props => props.noteHeight/2}px;
//     border-radius: 100px 0 0 0;
// `;
//
// const UpNoteStem = styled(NoteStem)`
//     top: ${props => props.noteHeight/2 - props.stemHeight}px;
//     left: ${props => props.noteWidth + props.stemWidth}px;
//     border-radius: 0 0 100px 0;
// `;
//
// const Stem = styled.div`
//     position: absolute;
// `

export default Note;
