import React from 'react';
import styled from "styled-components";
import SharpSVG from "../../../../data/accidentals/sharp.svg";
import NaturalSVG from "../../../../data/accidentals/natural.svg";
import FlatSVG from "../../../../data/accidentals/flat.svg";


function Accidental(props) {
    const { stemHeight, accidentalHeight } = props;
    let accidental;
    if (props.type === "sharp") {
        accidental = <SharpNaturalImage src={SharpSVG} />
    } else if (props.type === "natural") {
        accidental = <SharpNaturalImage src={NaturalSVG} />
    } else if (props.type === "flat") {
        accidental = <FlatImage src={FlatSVG} />
    }
    const topOffset = stemHeight - accidentalHeight / 2;
    return (
        <AccidentalContainer topOffset={topOffset} accidentalSize={accidentalHeight} >
            {accidental}
        </AccidentalContainer>
    );
}

const AccidentalContainer = styled.div`
    margin-top: ${props => props.topOffset}px;
    width: ${props => props.accidentalSize}px;
    height: ${props => props.accidentalSize}px;
    // background-color: magenta;
`;

const SharpNaturalImage = styled.img`
    height: 230%;
    transform: translateY(-29%);
    float: right;
    margin-right: 15%;
`;

const FlatImage = styled.img`
    height: 170%;
    transform: translateY(-42%);
    float: right;
`;

export default Accidental;
