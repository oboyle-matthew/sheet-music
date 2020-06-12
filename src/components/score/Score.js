import React from 'react';
import ScoreLine from "./ScoreLine";
import domtoimage from "dom-to-image";
import jsPDF from "jspdf";

const lineWidth = 2;
const gapBetweenLines = 30;
const linesPerPageOfPdf = 3;

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
        {"pitch": "G", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    ],
    [
        {"pitch": "C", "octave": 4, "type": "quarter", "length": {"4n": 1}, "position": "1:0:0"},
    ],
    [
        {"pitch": "C", "octave": 3, "type": "quarter", "length": {"4n": 4}, "position": "0:0:0"},
        {"pitch": "D", "octave": 3, "accidental": "sharp", "type": "half", "length": {"4n": 2}, "position": "0:1:0"},
        {"pitch": "E", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    ],
    [
        {"pitch": "F", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:0:0"},
        {"pitch": "G", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:1:0"},
        {"pitch": "A", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:2:0"},
        {"pitch": "B", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    ],
    [
        {"pitch": "G", "octave": 3, "type": "quarter", "length": {"1m": 1}, "position": "1:0:0"},
    ],
    [
        {"pitch": "C", "octave": 3, "type": "quarter", "length": {"4n": 4}, "position": "0:0:0"},
        {"pitch": "D", "octave": 3, "accidental": "sharp", "type": "half", "length": {"4n": 2}, "position": "0:1:0"},
        {"pitch": "E", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    ],
    [
        {"pitch": "F", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:0:0"},
        {"pitch": "G", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:1:0"},
        {"pitch": "A", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:2:0"},
        {"pitch": "B", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    ],
    [
        {"pitch": "C", "octave": 3, "type": "quarter", "length": {"4n": 4}, "position": "0:0:0"},
        {"pitch": "D", "octave": 3, "accidental": "sharp", "type": "half", "length": {"4n": 2}, "position": "0:1:0"},
        {"pitch": "E", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    ],
    [
        {"pitch": "F", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:0:0"},
        {"pitch": "G", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:1:0"},
        {"pitch": "A", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:2:0"},
        {"pitch": "B", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    ],
    [
        {"pitch": "C", "octave": 3, "type": "quarter", "length": {"16n": 4}, "position": "0:0:0"},
        {"pitch": "E", "octave": 3, "accidental": "sharp", "type": "half", "length": {"4n": 2}, "position": "0:1:0"},
        {"pitch": "G", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    ],
    [
        {"pitch": "C", "octave": 4, "type": "quarter", "length": {"4n": 1}, "position": "1:0:0"},
    ],
    [
        {"pitch": "C", "octave": 3, "type": "quarter", "length": {"4n": 4}, "position": "0:0:0"},
        {"pitch": "D", "octave": 3, "accidental": "sharp", "type": "half", "length": {"4n": 2}, "position": "0:1:0"},
        {"pitch": "E", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    ],
    [
        {"pitch": "F", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:0:0"},
        {"pitch": "G", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:1:0"},
        {"pitch": "A", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:2:0"},
        {"pitch": "B", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    ],
    [
        {"pitch": "G", "octave": 3, "type": "quarter", "length": {"1m": 1}, "position": "1:0:0"},
    ],
    [
        {"pitch": "C", "octave": 3, "type": "quarter", "length": {"16n": 4}, "position": "0:0:0"},
        {"pitch": "E", "octave": 3, "accidental": "sharp", "type": "half", "length": {"4n": 2}, "position": "0:1:0"},
        {"pitch": "G", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    ],
    [
        {"pitch": "C", "octave": 4, "type": "quarter", "length": {"4n": 1}, "position": "1:0:0"},
    ],
    [
        {"pitch": "C", "octave": 3, "type": "quarter", "length": {"4n": 4}, "position": "0:0:0"},
        {"pitch": "D", "octave": 3, "accidental": "sharp", "type": "half", "length": {"4n": 2}, "position": "0:1:0"},
        {"pitch": "E", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    ],
    [
        {"pitch": "F", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:0:0"},
        {"pitch": "G", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:1:0"},
        {"pitch": "A", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:2:0"},
        {"pitch": "B", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    ],
    [
        {"pitch": "G", "octave": 3, "type": "quarter", "length": {"1m": 1}, "position": "1:0:0"},
    ],
    [
        {"pitch": "C", "octave": 3, "type": "quarter", "length": {"16n": 4}, "position": "0:0:0"},
        {"pitch": "E", "octave": 3, "accidental": "sharp", "type": "half", "length": {"4n": 2}, "position": "0:1:0"},
        {"pitch": "G", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    ],
    [
        {"pitch": "C", "octave": 4, "type": "quarter", "length": {"4n": 1}, "position": "1:0:0"},
    ],
    [
        {"pitch": "C", "octave": 3, "type": "quarter", "length": {"4n": 4}, "position": "0:0:0"},
        {"pitch": "D", "octave": 3, "accidental": "sharp", "type": "half", "length": {"4n": 2}, "position": "0:1:0"},
        {"pitch": "E", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    ],
    [
        {"pitch": "F", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:0:0"},
        {"pitch": "G", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:1:0"},
        {"pitch": "A", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:2:0"},
        {"pitch": "B", "octave": 3, "type": "quarter", "length": {"4n": 1}, "position": "0:3:0"},
    ],
    [
        {"pitch": "G", "octave": 3, "type": "quarter", "length": {"1m": 1}, "position": "1:0:0"},
    ],
];

function Score() {
    const barsPerLines = 3;
    let splitByBar = [];
    for (let i = 0; i < testNotes.length; i += barsPerLines) {
        splitByBar.push(testNotes.slice(i, i+barsPerLines));
    }
    console.log(splitByBar);
    return (
        <div>
            <div id={'download'}>
                {splitByBar.map((bar, i) => <ScoreLine gapBetweenLines={gapBetweenLines} lineWidth={lineWidth} id={i.toString()} notes={bar} />)}
            </div>
            <button onClick={takeScreenshot}>Take Screenshot</button>
        </div>
    );
}

export default Score;
