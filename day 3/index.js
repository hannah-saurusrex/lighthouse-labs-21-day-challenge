const name = ['Tim', 'Sally', 'Beth'];
const votes = [
    0, // Tim
    2, // Sally
    1 // Beth
  ];

  const castVote = (name, votes) => {
    // Code here!
    updatedVotes = votes;
    
    if (name === "Tim") {
     votes[0] = updatedVotes[0] += 1;
  } else if (name === "Sally") {
     votes[1] = updatedVotes[1] += 1;
  } else if (name === "Beth") {
     votes[2] = updatedVotes[2] += 1;
  }
      return updatedVotes;
    // Remember to return a value!
  }

  
