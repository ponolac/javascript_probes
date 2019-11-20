// calc avg score for each team
var teamJimScore, teamMatteoScore, teamMiaScore;
teamJimScore = (89 + 120 + 103) / 3;
teamMatteoScore = (116 + 94 + 123) / 3;
teamMiaScore = (97 + 134 + 105) / 3;

console.log('Jim Score: ' + teamJimScore)
console.log('Matteo Score: ' + teamMatteoScore);

// compare scores, check for winner, print winner to console with avg score
if (teamJimScore > teamMatteoScore) {
    console.log('Jim\'s team is the winner with an average score of ' + teamJimScore);
} else if (teamJimScore === teamMatteoScore) {
    console.log('It\'s a draw. The tie score is ' + teamJimScore);
} else {
    console.log('Matteo\'s team is the winner with an average score of ' + teamMatteoScore);
}

if (teamMiaScore > teamJimScore && teamMatteoScore) {
    console.log('Mia\'s team is the winner with an avg score of ' + teamMiaScore);
} else if (teamMiaScore === teamJimScore && teamMatteoScore)
    console.log('There is a tie.');
    