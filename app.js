

function gameNotes(opposingTeam, prevGameDate, prevGameStadium, prevGameCity, cubsPitcher,
opposingPitcher, cubsOffensivePlayer, cubsOffensivePlayerStats, cubsOffensivePlayerHits, winOrLose,
cubsScore, opponentScore) {
  this.opposingTeam = opposingTeam;
  this.prevGameDate = prevGameDate;
  this.prevGameStadium = prevGameStadium;
  this.prevGameCity = prevGameCity;
  this.cubsPitcher = cubsPitcher;
  this.opposingPitcher = opposingPitcher;
  this.cubsOffensivePlayer = cubsOffensivePlayer;
  this.cubsOffensivePlayerStats = cubsOffensivePlayerStats;
  this.cubsOffensivePlayerHits = cubsOffensivePlayerHits;
  this.cubsScore = cubsScore;
  this.opponentScore = opponentScore;
  this.score = "4-2";

  this.winOrLose = function() {
    if(cubsScore > opponentScore) {
      return "won";
    } else {
      return "lost";
    }
  };
}

var Jun23 = new gameNotes("Marlins", "Thursday, June 23", "Marlins Park", "Miami", "Jon Lester", "Wei-Yin Chen", "David Ross",
"1 for 3", "a homerun and a walk", 2, 4, "4-2");

function printResults(date) {
  console.log("The Cubs played the " + Jun23.opposingTeam + " on " + Jun23.prevGameDate + " at " + Jun23.prevGameStadium +
     " in " + Jun23.prevGameCity + ". " + Jun23.cubsPitcher + " took the mound for the Cubs, and " + Jun23.opposingPitcher + " pitched for the "
     + Jun23.opposingTeam + ". " + Jun23.cubsOffensivePlayer + " went " + Jun23.cubsOffensivePlayerStats + " with " +
      Jun23.cubsOffensivePlayerHits + ". The Cubs " + Jun23.winOrLose() + " with a final score of " + Jun23.score + ".");
};

printResults(Jun23);
