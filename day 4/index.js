const name = 'Bradley';
const unregisteredVoters = ['Jake', 'Alanna', 'Bradley', 'Stephanie'];

const registerToVote = (name, unregisteredVoters) => {
    let mailingList = [];

    for (let i in unregisteredVoters) {
        if (unregisteredVoters[i] === name) {
            unregisteredVoters.splice(i, 1);
            mailingList.push(unregisteredVoters);
        }
    }
    return unregisteredVoters;
}

registerToVote();