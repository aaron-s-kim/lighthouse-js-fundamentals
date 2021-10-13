/*
const judgeVegetable = function (vegetables, metric) {
  const metricList = [];
  vegetables.forEach(function (vegetable) {
    metricList.push(vegetable[metric]);
  })
  const sortedList = metricList.sort();

  vegetables.forEach(function (vegetable) {
    if (vegetable[metric] === sortedList[0]) {
      return vegetable.submitter;
    }
  })
}
*/

const judgeVegetable = function (vegetables, metric) {
  let highestRank = 0;
  let winner = '';
  for (let i = 0; i < vegetables.length; i++){
    if(vegetables[i][metric] > highestRank){
      highestRank = vegetables[i][metric];
      winner = vegetables[i]["submitter"];
    }
  }
  return winner;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));

// Expected output
// "Old Man Franklin"