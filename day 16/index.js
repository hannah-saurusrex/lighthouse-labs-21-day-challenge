let color1 = 100;

const festivalColours = color1 => {
    return [((color1 + 150) % 360), ((color1 + 210) % 360)];
}

console.log(festivalColours);