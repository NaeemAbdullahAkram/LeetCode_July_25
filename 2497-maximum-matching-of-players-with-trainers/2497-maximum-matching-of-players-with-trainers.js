var matchPlayersAndTrainers = function (players, trainers) {
players.sort((a, b) => a - b);
trainers.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  let count = 0;

  for (i; i < players.length; i++) {
    for (j; j < trainers.length; j++) {
      if (players[i] <= trainers[j]) {
        ++count;
        j++;
        break;
      }
    }
  }
  return count;
};