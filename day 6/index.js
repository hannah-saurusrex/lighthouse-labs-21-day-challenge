// given two arrays, check to see if they are the same length, then check to see if they contain the same items

const voter_signatures = [
    'Bill Billiamson',
    'Kate Etak',
    'Brandon Brandonus',
    'Simon Simonson',
    'Jane Janesford'
  ];

  const voter_ids = [
    'Bill Billiamson',
    'Kate Etak',
    'Brandon Brandonus',
    'Simon Simonson',
    'Jane Janesford'
  ];

  const voterTurnout = (voter_signatures, voter_ids) => {
    // Code here!
    // first, check to see if the two arrays are the same length
    //this says, if length of sigs does NOT match length of ids, then DO NOT continue;
    if (voter_signatures.length !== voter_ids.length) return false;
    
    // next, check to see if the items in the arrays match
    for (var i = 0; i < voter_signatures.length; i++) {
      if (voter_signatures[i] !== voter_ids[i]) return "FRAUD!";
    } return "All clear, we can count the votes!";
    
  };
  
  console.log(voterTurnout);

