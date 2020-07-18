import React from 'react';
import {getTestNotes} from "../../../../helpers/TestNotes";
import MusicPlayer from "./music_player/MusicPlayer";
import Settings from "./settings/Settings";
import {getDefaultScoreInfo} from "../../../../helpers/DefaultScoreInfo";

const lineWidth = 1;
const gapBetweenLines = 20;
const barsPerLines = 2;
const timeSig = [2,2];

class Score extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            scoreInfo: {},
        };
    }

    componentWillMount() {
        const testNotes = getTestNotes();
        const defaultScoreInfo = getDefaultScoreInfo();
        this.setState({
            notes: testNotes,
            scoreInfo: defaultScoreInfo
        })
    }

    handleKeyPress = (event) => {
        console.log("TEST");
        console.log(event);
    };

    changeScoreInfo = (key, value) => {
        this.setState({
            scoreInfo: {
                ...this.state.scoreInfo,
                [key]: value,
            }
        })
    };

    render() {
        const { notes, scoreInfo } = this.state;
        return (
            <div tabIndex={0} onKeyPress={this.handleKeyPress}>
                <h1>Sheet music</h1>
                <MusicPlayer notes={notes} />
                <Settings updateKey={this.changeScoreInfo} scoreInfo={scoreInfo} />
            </div>
        );
    }
}

export default Score;
