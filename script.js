let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    return Math.floor(Math.random() * (9 - 0) + 0);
}

function compareGuesses(human, computer, target){
    if (human = target){
        return true;
    } else if(computer = target){
        return false
    } else {
        return true
    }
}

function updateScore(winner){
    if (winner === 'Computer'){
        computerScore++;
    }else if(winner === 'human'){
        humanScore++;
    }
}

function advanceRound(){
    currentRoundNumber++;
}

// 7. Great work! If you’d like to see the solution, move to the next task. If you’d like to extend your project on your own, you could consider the following:

// You probably calculated the distance from the computer guess to the target and from the human guess to the target. Move this into a separate getAbsoluteDistance() function that takes two numbers and returns the distance, and then use that inside your compareGuesses() function.
// Add functionality to check whether the user guess is between 0 and 9 and alert() 
// the user that their number is out of range. It’s not possible to set a number outside
//  this range with the + and = buttons, but users can do so by typing directly in the input field.
// 8.
// Great work! Visit our forums to compare your project to our sample solution code.
// You can also learn how to host your own solution on GitHub so you can share it with other learners!
// Your solution might look different from ours,
// and that’s okay! There are multiple ways to solve these projects,
// and you’ll learn more by seeing others’ code.