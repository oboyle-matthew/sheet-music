import React from 'react';
import styled from 'styled-components'
import WholeRest from "./rest_types/WholeRest";
import HalfRest from "./rest_types/HalfRest";
import QuarterRest from "./rest_types/QuarterRest";
import EighthRest from "./rest_types/EighthRest";


function Rest(props) {
    const { type, gapBetweenLines, lineWidth } = props;
    let rest;
    if (type === 'whole') {
        rest = <WholeRest gapBetweenLines={gapBetweenLines} lineWidth={lineWidth} />;
    } else if (type === 'half') {
        rest = <HalfRest gapBetweenLines={gapBetweenLines} lineWidth={lineWidth} />;
    } else if (type === 'quarter') {
        rest = <QuarterRest gapBetweenLines={gapBetweenLines} lineWidth={lineWidth} />;
    } else if (type === 'eighth') {
        rest = <EighthRest gapBetweenLines={gapBetweenLines} lineWidth={lineWidth} />;
    }
    return rest;
}

export default Rest;
