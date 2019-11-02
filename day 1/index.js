// lighthouse labs 21 day coding challenge

// day 1
// given an array of volunteers, and neighborhoods, determine how many neighborhoods each volunteer has to go to

var volunteers = [
    'sally',
    'colin',
    'hannah',
    'sylus'
];

var neighborhoods = [
    'congress park',
    'rino',
    'athmar park',
    'ruby hill',
    'cheeseman park',
    'city park'
];

const doorToDoor = (volunteers, neighborhoods) => {
    return neighborhoods.length / volunteers.length
};

console.log(doorToDoor);