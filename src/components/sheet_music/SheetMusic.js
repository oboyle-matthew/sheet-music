import React from 'react';
import ScoreLine from "./ScoreLine";
import {createStems} from "../../helpers/CreateStems";
import {decrementNotePitch, incrementNotePitch} from "../../helpers/GetPosFromNote";
import {getTestNotes} from "../helpers/TestNotes";

const lineWidth = 1;
const gapBetweenLines = 20;
const barsPerLines = 2;
const timeSig = [2,2];

class Score extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
        };
    }

    createStemConnectors(notes) {
        return notes.map(bar => {
            createStems(bar, timeSig);
            return bar;
        });
    }

    componentWillMount() {
        const testNotes = getTestNotes();
        const notes = this.createStemConnectors(testNotes);
        this.setState({notes})
    }

    updateNotes = (method) => {
        const { notes } = this.state;
        const newNotes = notes.map(bar => {
            let newBar = bar.map(note => {
                if (note.selected) {
                    note.stem = null;
                    method(note);
                }
                return note;
            });
            createStems(newBar, timeSig);
            return newBar
        });
        this.setState({
            notes: newNotes,
        })
    };

    handleKeyPress = (event) => {
        if(event.key === 'ArrowUp'){
            event.preventDefault();
            this.updateNotes(incrementNotePitch)
        }
        if(event.key === 'ArrowDown'){
            event.preventDefault();
            this.updateNotes(decrementNotePitch)
        }
    };

    addEmptyBar = () => {
        const { notes } = this.state;
        const wholeRest = {"pitch": "rest", "type": "whole", "length": {"1n": 1}, "position": "2:0:0"};
        this.setState({
            notes: [...notes, [wholeRest]]
        })
    };

    selectNote = (event, selectedNote) => {
        const { notes } = this.state;
        //TODO: If stem: Select for whole note. Otherwise, just have an individual select for the specific notes
        if (event.target.classList.contains('note-head')) {
            console.log("note-head");
        } else if (event.target.classList.contains('stem')) {
            console.log('stem');
        } else if (event.target.classList.contains('beam')) {
            console.log('beam');
        }
        const newNotes = notes.map(bar => (
            bar.map(note => {
                if (note === selectedNote) {
                    note.selected = true;
                } else {
                    delete note.selected;
                }
                return note;
            })
        ));
        this.setState({
            note: newNotes,
        })
    };

    render() {
        const { notes } = this.state;
        const splitByLine = [];
        for (let i = 0; i < notes.length; i += barsPerLines) {
            splitByLine.push(notes.slice(i, i+barsPerLines));
        }
        return (
            <div tabIndex={0} onKeyPress={this.handleKeyPress} >
                <div style={{backgroundColor: 'white'}} id={'download'}>
                    {splitByLine.map((line, i) => <ScoreLine selectNote={this.selectNote} timeSig={timeSig} gapBetweenLines={gapBetweenLines} lineWidth={lineWidth} id={i.toString()} notes={line} />)}
                </div>
                <button onClick={takeScreenshot}>Take Screenshot</button>
                {/*<button onClick={() => this.selectNote("C", 3, "0:0:0")}>Select</button>*/}
                <button onClick={this.addEmptyBar}>Add bar</button>
            </div>
        );
    }
}

export default Score;
