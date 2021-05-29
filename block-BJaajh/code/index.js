function checkFive(num) {
    let result = '';
    if (num < 5) {
        result = num + ' is less than 5.';
    } else if (num === 5) {
        result = num + ' is equal to 5.';
    } else {
        result = num + ' is greater than 5.';
    }
    return result;
}

function getWinner(guest1, guest2) {
    if (guest1 === guest2) {
        return "TIE";
    } else if (guest1 === "Paper" && guest2 === "Rock") {
        return "Player 1 wins!";
    } else if (guest1 === "Scissor" && guest2 === "Paper") {
        return "`Player 1 wins!";
    } else if (guest1 === "Rock " && guest2 === "Scissors") {
        return "Player 1 wins";
    } else {
        return "Player 2 wins!";
    }
}

module.exports = {
    checkFive,
    getWinner,
};