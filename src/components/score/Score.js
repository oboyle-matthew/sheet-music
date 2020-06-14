import React from 'react';
import ScoreLine from "./ScoreLine";
import domtoimage from "dom-to-image";
import jsPDF from "jspdf";

const lineWidth = 2;
const gapBetweenLines = 30;
const linesPerPageOfPdf = 3;
const timeSig = 3/4;

const takeScreenshot = () => {
    var node = document.getElementById('download');
    domtoimage.toPng(node)
        .then(src => {
            var img = new Image();
            img.src = src;
            document.body.appendChild(img);
            img.onload = function() {
                var width = img.width;
                var lineHeight = gapBetweenLines * 8 + lineWidth * 5;
                const height = linesPerPageOfPdf * lineHeight;
                var pdf = new jsPDF("l", "mm", "a4");
                for (var i = 0; i < img.height / height; i++) {
                    var canvas = document.createElement('canvas');
                    canvas.width = width;
                    canvas.height = height;
                    var context = canvas.getContext('2d');
                    context.drawImage(img, 0, height*i, width, height, 0, 0, width, height);
                    let splitImage = new Image();
                    splitImage.src = canvas.toDataURL();
                    pdf.addImage(splitImage, 'png', 10, 10, 280, 202);  // 180x150 mm @ (10,10)mm
                    if (i+1 < img.height/height) {
                        pdf.addPage();
                    }
                }
                pdf.save('test.pdf');
            }

        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
};

const testNotes = [
    [
        {"pitch": "C", "octave": 3, "type": "quarter", "length": {"16n": 4}, "position": "0:0:0"},
        {"pitch": "E", "octave": 3, "accidental": "sharp", "type": "half", "length": {"4n": 2}, "position": "0:1:0"},
        {"pitch": "G", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0", "selected": true},
    ],
    [
        {"pitch": "rest", "type": "quarter", "length": {"4n": 1}, "position": "1:0:0"},
        {"pitch": "rest", "type": "half", "length": {"2n": 1}, "position": "1:1:0"},
        {"pitch": "rest", "type": "eighth", "length": {"8n": 1}, "position": "1:3:0"},
        {"pitch": "rest", "type": "eighth", "length": {"8n": 1}, "position": "1:3:2"},
    ],
    [
        {"pitch": "rest", "type": "whole", "length": {"1n": 1}, "position": "2:0:0"},
    ],
    [
        {"pitch": "C", "octave": 3, "type": "eighth", "length": {"8n": 1}, "position": "0:0:0"},
        {"pitch": "D", "octave": 3, "type": "eighth", "length": {"8n": 1}, "position": "0:0:2"},
        {"pitch": "E", "octave": 3, "type": "eighth", "length": {"8n": 1}, "position": "0:1:0"},
        {"pitch": "F", "octave": 3, "type": "eighth", "length": {"8n": 1}, "position": "0:1:2"},
        {"pitch": "G", "octave": 3, "type": "eighth", "length": {"8n": 1}, "position": "0:2:0"},
        {"pitch": "A", "octave": 3, "type": "eighth", "length": {"8n": 1}, "position": "0:2:2"},
    ],
    [
        {"pitch": "B", "octave": 4, "type": "eighth", "length": {"8n": 1}, "position": "1:0:0"},
        {"pitch": "C", "octave": 4, "type": "eighth", "length": {"8n": 1}, "position": "1:0:2"},
        {"pitch": "D", "octave": 4, "type": "eighth", "length": {"8n": 1}, "position": "1:1:0"},
        {"pitch": "E", "octave": 4, "type": "eighth", "length": {"8n": 1}, "position": "1:1:2"},
        {"pitch": "F", "octave": 4, "type": "eighth", "length": {"8n": 1}, "position": "1:2:0"},
        {"pitch": "G", "octave": 4, "type": "eighth", "length": {"8n": 1}, "position": "1:2:2"},
    ],
    // [
    //     {"pitch": "G", "octave": 3, "type": "whole", "length": {"1m": 1}, "position": "1:0:0"},
    // ],
    // [
    //     {"pitch": "C", "octave": 3, "type": "sixteenth", "length": {"4n": 4}, "position": "0:0:0"},
    //     {"pitch": "D", "octave": 3, "accidental": "eighth", "type": "half", "length": {"4n": 2}, "position": "0:1:0"},
    //     {"pitch": "E", "octave": 3, "type": "sixteenth", "length": {"4n": 1}, "position": "0:3:0"},
    // ],
    // [
    //     {"pitch": "F", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:0:0"},
    //     {"pitch": "G", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:1:0"},
    //     {"pitch": "A", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:2:0"},
    //     {"pitch": "B", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    // ],
    // [
    //     {"pitch": "C", "octave": 3, "type": "quarter", "length": {"4n": 4}, "position": "0:0:0"},
    //     {"pitch": "D", "octave": 3, "accidental": "natural", "type": "half", "length": {"4n": 2}, "position": "0:1:0"},
    //     {"pitch": "E", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    // ],
    // [
    //     {"pitch": "F", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:0:0"},
    //     {"pitch": "G", "octave": 3, "accidental": "flat", "type": "quarter", "length": {"4n": 1}, "position": "0:1:0"},
    //     {"pitch": "A", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:2:0"},
    //     {"pitch": "B", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    // ],
    // [
    //     {"pitch": "C", "octave": 3, "type": "quarter", "length": {"16n": 4}, "position": "0:0:0"},
    //     {"pitch": "E", "octave": 3, "accidental": "sharp", "type": "half", "length": {"4n": 2}, "position": "0:1:0"},
    //     {"pitch": "G", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    // ],
    // [
    //     {"pitch": "C", "octave": 4, "type": "quarter", "length": {"4n": 1}, "position": "1:0:0"},
    // ],
    // [
    //     {"pitch": "C", "octave": 3, "type": "quarter", "length": {"4n": 4}, "position": "0:0:0"},
    //     {"pitch": "D", "octave": 3, "accidental": "sharp", "type": "half", "length": {"4n": 2}, "position": "0:1:0"},
    //     {"pitch": "E", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    // ],
    // [
    //     {"pitch": "F", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:0:0"},
    //     {"pitch": "G", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:1:0"},
    //     {"pitch": "A", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:2:0"},
    //     {"pitch": "B", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    // ],
    // [
    //     {"pitch": "G", "octave": 3, "type": "quarter", "length": {"1m": 1}, "position": "1:0:0"},
    // ],
    // [
    //     {"pitch": "C", "octave": 3, "type": "quarter", "length": {"16n": 4}, "position": "0:0:0"},
    //     {"pitch": "E", "octave": 3, "accidental": "sharp", "type": "half", "length": {"4n": 2}, "position": "0:1:0"},
    //     {"pitch": "G", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    // ],
    // [
    //     {"pitch": "C", "octave": 4, "type": "quarter", "length": {"4n": 1}, "position": "1:0:0"},
    // ],
    // [
    //     {"pitch": "C", "octave": 3, "type": "quarter", "length": {"4n": 4}, "position": "0:0:0"},
    //     {"pitch": "D", "octave": 3, "accidental": "sharp", "type": "half", "length": {"4n": 2}, "position": "0:1:0"},
    //     {"pitch": "E", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    // ],
    // [
    //     {"pitch": "F", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:0:0"},
    //     {"pitch": "G", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:1:0"},
    //     {"pitch": "A", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:2:0"},
    //     {"pitch": "B", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    // ],
    // [
    //     {"pitch": "G", "octave": 3, "type": "quarter", "length": {"1m": 1}, "position": "1:0:0"},
    // ],
    // [
    //     {"pitch": "C", "octave": 3, "type": "quarter", "length": {"16n": 4}, "position": "0:0:0"},
    //     {"pitch": "E", "octave": 3, "accidental": "sharp", "type": "half", "length": {"4n": 2}, "position": "0:1:0"},
    //     {"pitch": "G", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    // ],
    // [
    //     {"pitch": "C", "octave": 4, "type": "quarter", "length": {"4n": 1}, "position": "1:0:0"},
    // ],
    // [
    //     {"pitch": "C", "octave": 3, "type": "quarter", "length": {"4n": 4}, "position": "0:0:0"},
    //     {"pitch": "D", "octave": 3, "accidental": "sharp", "type": "half", "length": {"4n": 2}, "position": "0:1:0"},
    //     {"pitch": "E", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    // ],
    // [
    //     {"pitch": "F", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:0:0"},
    //     {"pitch": "G", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:1:0"},
    //     {"pitch": "A", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:2:0"},
    //     {"pitch": "B", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    // ],
    // [
    //     {"pitch": "G", "octave": 3, "type": "quarter", "length": {"1m": 1}, "position": "1:0:0"},
    // ],
];

const pitches = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

class Score extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: testNotes,
        }
    }

    componentWillMount() {
        document.addEventListener("keydown", this.handleKeyPress.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress.bind(this));
    }

    selectNote(pitch, octave, position) {
        const { notes } = this.state;
        const newNotes = notes.map(bar => (
            bar.map(note => {
                if (note.selected) {
                    delete note.selected
                }
                if (note.pitch === pitch && note.octave === octave && note.position === position) {
                    note.selected = true;
                }
                return note;
            })
        ));
        this.setState({
            notes: newNotes,
        })
    }

    handleKeyPress = (event) => {
        const { notes } = this.state;

        if(event.key === 'ArrowUp'){
            event.preventDefault();
            const newNotes = notes.map(bar => (
                bar.map(note => {
                    if (note.selected) {
                        note.pitch = pitches[(pitches.indexOf(note.pitch)+pitches.length+1) % pitches.length];
                    }
                    return note;
                })
            ));
            this.setState({
                notes: newNotes,
            })
        }
        if(event.key === 'ArrowDown'){
            event.preventDefault();
            const newNotes = notes.map(bar => (
                bar.map(note => {
                    if (note.selected) {
                        note.pitch = pitches[(pitches.indexOf(note.pitch)+pitches.length-1) % pitches.length];
                    }
                    return note;
                })
            ));
            this.setState({
                notes: newNotes,
            })
        }
    }

    render() {
        const { notes } = this.state;
        const barsPerLines = 3;
        let splitByBar = [];
        for (let i = 0; i < notes.length; i += barsPerLines) {
            splitByBar.push(notes.slice(i, i+barsPerLines));
        }
        return (
            <div tabIndex={0} onKeyPress={this.handleKeyPress} >
                <div id={'download'}>
                    {splitByBar.map((bar, i) => <ScoreLine timeSig={timeSig} gapBetweenLines={gapBetweenLines} lineWidth={lineWidth} id={i.toString()} notes={bar} />)}
                </div>
                <button onClick={takeScreenshot}>Take Screenshot</button>
                <button onClick={() => this.selectNote("C", 3, "0:0:0")}>Select</button>
            </div>
        );
    }
}

export default Score;
