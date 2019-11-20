const PI = 3.14159 

const sphereVolume = function (radius) {
    return (4 / 3) * PI * radius * radius * radius
}

console.log(sphereVolume(12));

const coneVolume = function (radius, height) {
    return PI * radius * radius * (height / 3)
}

console.log(coneVolume(12));

const prismVolume = function (height, width, depth) {
    return height * width * depth
}

console.log(prismVolume(12, 12, 5));

const totalVolume = function (solids) {
    const largeSphere = {
        type: 'sphere',
        radius: 40
      }
  
      const smallSphere = {
        type: 'sphere',
        radius: 10
      }
  
      const cone = {
        type: 'cone',
        radius: 3,
        height: 5
      }
  
      const duck = [
        largeSphere,
        smallSphere,
        cone
      ]

    let total = 0;

    for (solid of solids) {
        if (solid.type === 'sphere') {
            total += sphereVolume(solid.radius)
        } else if (solid.type === 'cone') {
            total += coneVolume(solid.radius, solid.height)
        } else if (solid.type === 'prism') {
            total += prismVolume(solid.height, solid.width, solid.depth)
        }
    }
    return totalVolume(duck);
}