

if (localStorage.getItem("localHighScores")) {
    scoresArray = JSON.parse(localStorage.getItem("localHighScores"));
  } else {
    scoresArray = [];
  }