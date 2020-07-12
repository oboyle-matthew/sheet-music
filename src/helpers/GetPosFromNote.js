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
};

export const getNoteLength = (length, timeSig) => {
    let total = 0;
    Object.keys(length).map(key => {
        const unit = key.charAt(key.length-1);
        if (unit === "n") {
            total += length[key] * (1/key.slice(0,-1));
        } else if (unit === "m") {
            total += length[key] * key.slice(0,-1) * timeSig;
        }
    });
    return (total / timeSig);
};
