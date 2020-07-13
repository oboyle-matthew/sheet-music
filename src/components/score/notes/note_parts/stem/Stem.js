import React from 'react';
import styled from "styled-components";
import DownStem from "./stem_types/DownStem";
import UpStem from "./stem_types/UpStem";

function Stem(props) {
    const { borderWidth, noteInfo, noteHeightMultiplier } = props;
    const stemHeight = noteHeightMultiplier * noteInfo.stemHeight;
    const color = noteInfo.selected ? "orange" : "black";
    return (
        noteInfo.stem === 'down' ?
            <DownStem flag={noteInfo.flag} noteWidth={noteInfo.width} stemWidth={borderWidth} noteHeight={noteInfo.height} stemHeight={stemHeight} color={color} /> :
            <UpStem flag={noteInfo.flag} noteWidth={noteInfo.width} stemWidth={borderWidth} noteHeight={noteInfo.height} stemHeight={stemHeight} color={color} />
    )
}

export default Stem;
