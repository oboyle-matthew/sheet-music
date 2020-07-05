const pitchToTop = {
    "E": 0,
    "D": 1,
    "C": 2,
    "B": 3,
    "A": 4,
    "G": 5,
    "F": 6,
};

export const getDistanceFromTop = (note) => {
    const pitch = pitchToTop[note.pitch];
    let distanceFromTop = pitch;
    if (pitch > 2) {
        distanceFromTop += (4 - note.octave)*7;
    } else {
        distanceFromTop += (5 - note.octave)*7;
    }
    return distanceFromTop;
};

export const getLeftDistance = (note) => {
    const { position } = note;
    const quarters = position.split(":")[1];
    const sixteenths = position.split(":")[2];
    return (parseFloat(quarters) * 4) + parseFloat(sixteenths);
}
