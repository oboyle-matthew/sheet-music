import React from 'react';
import styled from "styled-components";
import SharpSVG from "../../../../data/accidentals/sharp.svg";
import NaturalSVG from "../../../../data/accidentals/natural.svg";
import FlatSVG from "../../../../data/accidentals/flat.svg";


function Accidental(props) {
    const { accidentalHeight, type } = props;
    let accidental;
    if (type === "sharp") {
        accidental = <SharpNaturalImage src={SharpSVG} />
    } else if (type === "natural") {
        accidental = <SharpNaturalImage src={NaturalSVG} />
    } else if (type === "flat") {
        accidental = <FlatImage src={FlatSVG} />
    }
    return (
        <AccidentalContainer accidentalSize={accidentalHeight} >
            {accidental}
        </AccidentalContainer>
    );
}

const AccidentalContainer = styled.div`
    width: ${props => props.accidentalSize}px;
    height: ${props => props.accidentalSize}px;
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
