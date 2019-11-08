const bins = {
    waste: 4,
    recycling: 2,
    compost: 5
}

const smartGarbage = (trash, bins) => {
    // Code here!
    bins[trash] +=1;
    return bins;
}