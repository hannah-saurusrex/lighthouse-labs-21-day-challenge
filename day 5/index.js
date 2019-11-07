const stations = [
    ['Big Bear Donair', 10, 'restaurant'],
    ['Bright Lights Elementary', 50, 'school'],
    ['Moose Mountain Community Centre', 45, 'community centre'],
    ['Codeville Epic Academy', 15, 'school'],
    ['Big Al Pizza', 50, 'restaurant']
  ];
  

  // voters need to figure out where to go to vote. 
  // eligible voting locations include a capacity for at least 20, and ar a school or community centre.

  //use a for loop to loop over the items in the array, and conditional statements to see if the items meet our requirements

  function chooseStations (stations) {
      // this is an empty array where our newly selected items will live
      const goodStations = [];

    // loop through the stations
    for (const station of stations) {
        // assign index station variable names
        const name = station[0];
        const capacity = station[1];
        const type = station[2];
        // use an if statment to check if a selected place has the proper capacity
        if (capacity >= 20) {

            if (type === 'school' || type === 'community centre') {
                goodStations.push(name);
            }
        }
    }
    console.log(goodStations);
    return goodStations;
  }
