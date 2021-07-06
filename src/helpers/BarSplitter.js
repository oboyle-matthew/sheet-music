export const splitByBarsPerLine = (scoreInfo, barsPerLine) => {
    const parts = scoreInfo.parts;
    console.log(parts);
    const measures = scoreInfo.measures;
    console.log(measures);
    const lines = [];
    let keySig = defaultKeySig();
    for (let i = 0; i < measures.length; i += barsPerLine) {
        const measure = measures[i];
        if (measure.hasOwnProperty("keySig")) {
            keySig = measure.keySig;
        } else {
            measure.keySig = keySig;
        }
        console.log(measures.slice(i, i+barsPerLine));
        lines.push(measures.slice(i, i+barsPerLine));
    }
    console.log(lines);
};

const defaultKeySig = () => {
    return {note: "C", modality: "Major"}
}