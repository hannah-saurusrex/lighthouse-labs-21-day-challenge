const buses = { // this is an object containing buses. Each bus has a name, and within the name is a speed and distance.
    pickadilly: {
        distance: 10,
        speed: 5
    },
    uptown: {
        distance: 13,
        speed: 10
    }
  }

const busTimes = buses => { // in this function we will get the bus times from the buses object found above
    let busArrivalTimes = {}; // first, we need to create a new object that will hold our newly calculated bus arrival times 

    for (const bus in buses) { // create a for loop to move through the object and grab the information we need. 
        //this says for each bus in the buses object we will....
        busArrivalTimes[bus] = buses[bus].distance / buses[bus].speed;
        // the bus arrival time object equals... == grab each bus.distance in the buses object, and 
        //divide it by the bus.speed in the buses object to obtain the arrival time
    }
    return busArrivalTimes; // you must active your function to run by declaring "return"! (to inform the function to return the info) 
    //this takes the sum of the equation above, and dumps the information into a new object called busArrivalTime.
}

