const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

const finalPosition = (moves) => {
    
    const paradePos = {x:0, y:0};

    moves.forEach(move => {
        switch (move) {
            case "north":
                paradePos.y++;
                break;
            case "south":
                paradePos.y--;
                break;
            case "east":
                paradePos.x++;
                break;
            case "west":
                paradePos.x--;
        }
    });
    return [paradePos.x, paradePos.y];
}