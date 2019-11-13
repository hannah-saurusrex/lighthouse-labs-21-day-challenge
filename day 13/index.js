// Tip: Work on one of these functions at a time.

const lightsOn = function(lights) {
    // Code here!
    for (var light of lights) { // grab the light in the lights array
      light.on = true; // if on is true, then return lights
    } return lights;
  }
  
  const lightsOff = function(lights) {
    // Code here!
    for (var light of lights) {
      light.on = false; // if on is false, return lights
    } return lights;
  }
  
  const toggleLights = function(lights, lightsAreOn) {
    // Code here!
    if (lightsAreOn === true) {
      return lightsOff(lights);
    } else {
        return lightsOn(lights);
    }
  }
  

  //examples
  // for lightsOff() function
//   const lights = [
//     {
//         id: 1,
//         on: true
//     },
//     {
//         id: 2,
//         on: true
//     },
//     {
//         id: 3,
//         on: true
//     },
//     {
//         id: 4,
//         on: true
//     },
//     {
//         id: 5,
//         on: true
//     }
//   ]
//output::
// [
//     {
//         id: 1,
//         on: false
//     },
//     {
//         id: 2,
//         on: false
//     },
//     {
//         id: 3,
//         on: false
//     },
//     {
//         id: 4,
//         on: false
//     },
//     {
//         id: 5,
//         on: false
//     }
//   ],