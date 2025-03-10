// src/00-objectball.js

function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }
  
  // Function to get the number of points scored by a player
  function numPointsScored(playerName) {
    const game = gameObject();
    for (const team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].points;
      }
    }
    return null; // Player not found
  }
  
  // Function to get the shoe size of a player
  function shoeSize(playerName) {
    const game = gameObject();
    for (const team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].shoe;
      }
    }
    return null; // Player not found
  }
  
  // Function to get the colors of a team
  function teamColors(teamName) {
    const game = gameObject();
    for (const team in game) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
    return null; // Team not found
  }
  
  // Function to get the names of both teams
  function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  
  // Function to get the jersey numbers of a team
  function playerNumbers(teamName) {
    const game = gameObject();
    for (const team in game) {
      if (game[team].teamName === teamName) {
        return Object.values(game[team].players).map(player => player.number);
      }
    }
    return null; // Team not found
  }
  
  // Function to get the stats of a player
  function playerStats(playerName) {
    const game = gameObject();
    for (const team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName];
      }
    }
    return null; // Player not found
  }
  
  // Function to get the rebounds of the player with the largest shoe size
  function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let playerWithLargestShoe = null;
  
    for (const team in game) {
      for (const player in game[team].players) {
        const playerStats = game[team].players[player];
        if (playerStats.shoe > largestShoeSize) {
          largestShoeSize = playerStats.shoe;
          playerWithLargestShoe = playerStats;
        }
      }
    }
    return playerWithLargestShoe.rebounds;
  }
  
  // Bonus: Function to get the player with the most points
  function mostPointsScored() {
    const game = gameObject();
    let mostPoints = 0;
    let playerWithMostPoints = null;
  
    for (const team in game) {
      for (const player in game[team].players) {
        const playerStats = game[team].players[player];
        if (playerStats.points > mostPoints) {
          mostPoints = playerStats.points;
          playerWithMostPoints = player;
        }
      }
    }
    return playerWithMostPoints;
  }
  
  // Bonus: Function to get the winning team
  function winningTeam() {
    const game = gameObject();
    let homeTeamPoints = 0;
    let awayTeamPoints = 0;
  
    for (const player in game.home.players) {
      homeTeamPoints += game.home.players[player].points;
    }
  
    for (const player in game.away.players) {
      awayTeamPoints += game.away.players[player].points;
    }
  
    return homeTeamPoints > awayTeamPoints ? game.home.teamName : game.away.teamName;
  }
  
  // Bonus: Function to get the player with the longest name
  function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
  
    for (const team in game) {
      for (const player in game[team].players) {
        if (player.length > longestName.length) {
          longestName = player;
        }
      }
    }
    return longestName;
  }
  
  // Super Bonus: Function to check if the player with the longest name has the most steals
  function doesLongNameStealATon() {
    const game = gameObject();
    let longestName = "";
    let mostSteals = 0;
    let playerWithMostSteals = null;
  
    for (const team in game) {
      for (const player in game[team].players) {
        const playerStats = game[team].players[player];
        if (player.length > longestName.length) {
          longestName = player;
        }
        if (playerStats.steals > mostSteals) {
          mostSteals = playerStats.steals;
          playerWithMostSteals = player;
        }
      }
    }
    return longestName === playerWithMostSteals;
  }
  // Test numPointsScored
console.log("Points scored by Alan Anderson:", numPointsScored("Alan Anderson")); // Should log 22
console.log("Points scored by Ben Gordon:", numPointsScored("Ben Gordon")); // Should log 33

// Test shoeSize
console.log("Shoe size of Mason Plumlee:", shoeSize("Mason Plumlee")); // Should log 19
console.log("Shoe size of Bismak Biyombo:", shoeSize("Bismak Biyombo")); // Should log 16

// Test teamColors
console.log("Colors of Brooklyn Nets:", teamColors("Brooklyn Nets")); // Should log ["Black", "White"]
console.log("Colors of Charlotte Hornets:", teamColors("Charlotte Hornets")); // Should log ["Turquoise", "Purple"]

// Test teamNames
console.log("Team names:", teamNames()); // Should log ["Brooklyn Nets", "Charlotte Hornets"]

// Test playerNumbers
console.log("Jersey numbers for Brooklyn Nets:", playerNumbers("Brooklyn Nets")); // Should log [0, 30, 11, 1, 31]
console.log("Jersey numbers for Charlotte Hornets:", playerNumbers("Charlotte Hornets")); // Should log [4, 0, 2, 8, 33]

// Test playerStats
console.log("Stats for Jason Terry:", playerStats("Jason Terry"));
// Should log:
// {
//   number: 31,
//   shoe: 15,
//   points: 19,
//   rebounds: 2,
//   assists: 2,
//   steals: 4,
//   blocks: 11,
//   slamDunks: 1
// }

// Test bigShoeRebounds
console.log("Rebounds for player with largest shoe size:", bigShoeRebounds()); // Should log 12

// Test mostPointsScored
console.log("Player with most points:", mostPointsScored()); // Should log "Ben Gordon"

// Test winningTeam
console.log("Winning team:", winningTeam()); // Should log "Charlotte Hornets"

// Test playerWithLongestName
console.log("Player with longest name:", playerWithLongestName()); // Should log "Brendan Haywood"

// Test doesLongNameStealATon
console.log("Does player with longest name have the most steals?", doesLongNameStealATon()); // Should log true