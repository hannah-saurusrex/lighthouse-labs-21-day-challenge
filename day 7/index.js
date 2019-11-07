const interviews = [
    'smart city', 
    'rebuild the lighthouse', 
    'arts funding', 
    'transportation',
    'arts funding', 
    'rebuild the lighthouse', 
    'sports funding', 
    'tax cuts', 
    'smart city',
    'arts funding', 
    'smart city'
  ]
  
const termTopics = (interviews) => {
// Code here!
let goodTopics = [" ", " ", " "]; // this is the array the topic counts will get pushed into

for (var i = 0; i < interviews.length; i++) {
    if (interviews[i] === "smart city") {
    goodTopics[0]++;
    } if (interviews[i] === "arts funding") {
    goodTopics[1]++;
    } if (interviews[i] === "transportation") {
    goodTopics[2]++;
    }
}
    return goodTopics;
}