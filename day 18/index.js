const tickets = [
    'red',
    'red',
    'green',
    'blue',
    'green'
  ];

  const raffleEntries = {
    red: 10,
    green: 30,
    blue: 15
  };

const countTickets = (tickets) => {

    var counts = {
        red: 0,
        blue: 0,
        green: 0
    };

    for (var ticket of tickets) {
    //     if (ticket == 'red') {
    //         return counts.red++;
    //     } else if (ticket == 'blue') {
    //         return counts.blue++;
    //     } else if (ticket == 'green') {
    //         return counts.green++;
    //     }
    // }
    counts[ticket]++;
    }
return counts;
}

const bestOdds = (tickets, raffleEntries) => {

    var counts = countTickets(tickets);
    var redP = counts.red / raffleEntries.red;
    var blueP = counts.blue / raffleEntries.blue;
    var greenP = counts.green / raffleEntries.green;

    if (redP > blueP && redP > greenP) {
        return "You have the best odds of winning the red raffle."
    } else if (blueP > greenP && blueP > redP) {
        return "You have the best odds of winning the blue raffle."
    } else if (greenP > redP && greenP > blueP) {
        return "You have the best odds of winning the green raffle."
    }
}