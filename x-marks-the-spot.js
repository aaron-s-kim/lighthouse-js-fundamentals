// X Marks the perfect shot
// The parade begins at [0,0]
// Calculate final x-y position after moves

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

const finalPosition = function (moves) {
  let loc = [0, 0];
  for (const dir of moves) {
    if (dir === "north") {
      loc[1] += 1;
    } else if (dir === "south") {
      loc[1] -= 1;
    } else if (dir === "west") {
      loc[0] -= 1;
    } else if (dir === "east") {
      loc[0] += 1;
    }
  }
  return loc;
}

console.log(finalPosition(moves));
// the finalPosition function should return the array: [-1, 4]
