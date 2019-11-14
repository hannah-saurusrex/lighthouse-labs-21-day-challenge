const dynamicPricing = (numberOfPeople, distanceTraveled) => {
    let distanceFee = distanceTraveled*0.25; // all travelers pay $0.25 per kilometer traveled. 
    let rushHourFee = 0; // no extra fee until rush hour, which is explained below. set base rush hour fee as 0.

    if (numberOfPeople >= 30) rushHourFee = 0.25; // you only pay the rush hour fee when there are 30 or more people on the train

    let amount = 1 + distanceFee + rushHourFee; // all travelers pay a base fare of $1, plus any extra distance fee, and potential rush hour fee.
    let ticketPrice = amount.toFixed(2); // a total ticket price is the total amount, and we will show two decimal points, using the toFixed() property.

    return "$" + ticketPrice; // your ticket price displayed with a dollar sign and your total fare, as calculated above.
}