import styled from "styled-components";

const Stave = styled.div`
    background-image: repeating-linear-gradient(
        black,
        black ${props => props.lineWidth}px,
        white ${props => props.lineWidth}px,
        white ${props => props.gapBetweenLines+props.lineWidth}px
    );
    height: ${props => props.lineWidth*5 + props.gapBetweenLines*4}px;
`;

export default Stave;
