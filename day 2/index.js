// for three interview topics, return three possible answers

const interviewAnswer = (topic) => {
    // Code here!
   if (topic === 'arts funding') {
     return "We'll have to get creative!";
   } else if (topic === 'economy') {
     return 'Time is money.';
   } else if (topic === 'transportation') {
     return "It's going to be a long road, so we better get moving.";
   } else {
     return 'QUACK!';
   }
    // Remember to return a value!
  }
  
  interviewAnswer('time is money');