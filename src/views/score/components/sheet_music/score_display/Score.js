import React from 'react';
import ScoreLine from "./ScoreLine";
import {splitByBarsPerLine} from "../../../../../helpers/BarSplitter";


class Score extends React.Component {

    render() {
        const { scoreInfo, barsPerLine } = this.props;
        const scoreLines = splitByBarsPerLine(scoreInfo, barsPerLine);
        return (
            <div>
                <ScoreLine/>

                {/*<div style={{backgroundColor: 'white'}} id={'download'}>*/}
                    {/*{splitByLine.map(line => <ScoreLine scoreInfo={scoreInfo} notes={line}  />)}*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default Score;
