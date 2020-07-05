import React from 'react';
import styled from "styled-components";
import DownStem from "./stem_types/DownStem";
import UpStem from "./stem_types/UpStem";

function Stem(props) {
    const { borderWidth, noteInfo} = props;
    const stemHeight = noteInfo.height * 3;
    const color = noteInfo.selected ? "orange" : "black";
    console.log(noteInfo);
    return (
        noteInfo.stem === 'down' ?
            <DownStem flag={noteInfo.flag} noteWidth={noteInfo.width} stemWidth={borderWidth} noteHeight={noteInfo.height} stemHeight={stemHeight} color={color} /> :
            <UpStem flag={noteInfo.flag} noteWidth={noteInfo.width} stemWidth={borderWidth} noteHeight={noteInfo.height} stemHeight={stemHeight} color={color} />
    )
}

export default Stem;
