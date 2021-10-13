function merge (arr1, arr2) {
  const combinedArr = [];
  for (var i = 0; i < arr1.length; i++) {
    combinedArr.push(arr1[i]);
  }
  for (var j = 0; j < arr2.length; j++) {
    combinedArr.push(arr2[j]);
  }
  return combinedArr.sort();
}

// test
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);