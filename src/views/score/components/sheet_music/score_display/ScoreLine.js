import React from 'react';
import styled from "styled-components";

class ScoreLine extends React.Component {

    render() {
        const { notes, scoreInfo } = this.props;
        return (
            <OuterContainer>
                <Container>
                    <Part1/>
                    <Part2/>
                    {/*<Test1/>*/}
                    {/*<Test2/>*/}
                    {/*Score Line*/}
                </Container>
            </OuterContainer>
        );
    }
}

const OuterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
`;

const Container = styled.div`
    background-color: yellow;
    // height: 500px;
    // width: 100%;
`;

const Part1 = styled.div`
    background-color: red;
    width: 500px;
    height: 20px;
`;

const Part2 = styled.div`
    background-color: green;
    width: 1000px;
    height: 20px;
`

// const Test1 = styled.div`
//     background-color: red;
//     width: 100%;
//     height: 20px;
// `;
//
// const Test2 = styled.div`
//     background-color: green;
//     width: 1200px;
//     height: 20px;
// `

export default ScoreLine;
