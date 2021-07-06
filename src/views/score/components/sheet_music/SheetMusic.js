import React from 'react';
import {getTestNotes} from "../../../../helpers/TestNotes";
import MusicPlayer from "./music_player/MusicPlayer";
import Settings from "./settings/Settings";
import {getDefaultLayoutInfo, getTestLayoutInfo} from "../../../../helpers/DefaultLayoutInfo";
import Score from "./score_display/Score";
import {getTestScoreInfo} from "../../../../helpers/DefaultScoreInfo";

const lineWidth = 1;
const gapBetweenLines = 20;
const barsPerLine = 2;
const timeSig = [2,2];

class SheetMusic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scoreInfo: {},
            layoutInfo: [],
        };
    }

    componentWillMount() {
        const scoreInfo = getTestScoreInfo();
        const layoutInfo = getTestLayoutInfo();
        this.setState({scoreInfo, layoutInfo})
    }

    changeLayoutInfo = (key, value) => {
        this.setState({
            layoutInfo: {
                ...this.state.scoreInfo,
                [key]: value,
            }
        })
    };

    render() {
        const { scoreInfo, layoutInfo } = this.state;
        // console.log(notes);
        return (
            <div tabIndex={0}>
                <h1>Sheet music</h1>
                {/*<MusicPlayer notes={notes} />*/}
                <Settings updateKey={this.changeLayoutInfo} layoutInfo={layoutInfo} />
                <Score scoreInfo={scoreInfo} barsPerLine={2} />
            </div>
        );
    }
}

export default SheetMusic;
