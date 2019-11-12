const samples = ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty']; // air samples 
const threshold = 0.3; // this threshold number indicates the level required for an output of clean

const checkAir = function (samples, threshold) { // write a function that tests the samples and threshold called "checkAir"
    var dirtyCount = 0; // make a new variable to hold the results of how many 'dirty's we find in our samples count.

    for (var sample of samples) {
        if (sample == 'dirty') dirtyCount++; // for all of our dirty samples, increment the dirtyCount variable by one.
    }

    pollutionLevel = dirtyCount / samples.length; // to obtain the pollution level, we will take the dirtyCount divided by the total number of samples

    if (pollutionLevel > threshold) { // if our pollution level is above the acceptable threshold of 0.3, here is what to return:
        return "Polluted";
    } else {
        return "Clean";
    }
}
