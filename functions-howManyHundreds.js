// Functions – howManyHundreds
// each container can hold exactly 100 bottles
// a container will only be sent if full

const howManyHundreds = function (bottles) {
  var containers = 0;
  if (bottles < 100) {
    return containers;
  } else {
    for (var x = 1; x <= bottles; x++) {
      if (x % 100 === 0) {
        containers += 1;
      }
    }
  }
  return containers;
}

// test values
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);