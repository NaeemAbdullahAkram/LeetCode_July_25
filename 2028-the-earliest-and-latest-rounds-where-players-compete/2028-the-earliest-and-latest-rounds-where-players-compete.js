
var earliestAndLatest = function (n, firstPlayer, secondPlayer) {
  let earliest = n;
  let latest = 0;

  const visited = new Set();

  const findEarliestAndLatest = (remain, players, current, round) => {
    if (visited.has(remain)) return;
    
    const player = players[current];
    const opponent = players[players.length - current]; // since we're 1-indexed

    if (player === firstPlayer && opponent === secondPlayer) {
      earliest = Math.min(earliest, round);
      latest = Math.max(latest, round);
      return;
    }

    if (opponent <= player) {
	  // we've gone halfway through the list, so everyone has been matched up
	  // go to the next round
      const nextPlayers = players.filter((p) => remain & (1 << p));
      findEarliestAndLatest(remain, nextPlayers, 1, round + 1);
      return;
    }

    const remainIfPlayerWins = remain ^ (1 << opponent);
    const remainIfOpponentWins = remain ^ (1 << player);
    const next = current + 1;

	// it's possible both firstPlayer and secondPlayer are in the first half of the list
    if (player === firstPlayer || player === secondPlayer) {
      findEarliestAndLatest(remainIfPlayerWins, players, next, round);
      return;
    }
    
	// it's possible both firstPlayer and secondPlayer are in the second half of the list
    if (opponent === firstPlayer || opponent === secondPlayer) {
      findEarliestAndLatest(remainIfOpponentWins, players, next, round);
      return;
    }

    // neither player nor opponent are firstPlayer or secondPlayer
    findEarliestAndLatest(remainIfPlayerWins, players, next, round);
    findEarliestAndLatest(remainIfOpponentWins, players, next, round);
    visited.add(remain);
  }

  const players = new Array(n + 1).fill(0).map((_, i) => i);
  const ALL_PLAYERS_REMAIN = 2 ** (n + 1) - 1;
  findEarliestAndLatest(ALL_PLAYERS_REMAIN, players, 1, 1);

  return [earliest, latest]
};