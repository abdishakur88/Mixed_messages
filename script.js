let messages = ["The pessimist sees difficulty in every opportunity.",
    "Don't let yesterday take up too much of today.",
    "You learn more from failure than from success.",
    "If you are working on something that you really care about, you don't have to be pushed."]

function generateRandomMessage(array) {
    let randomNumber = Math.floor(Math.random() * array.length);
    console.log(randomNumber)
    console.log(array.slice(randomNumber, randomNumber + 1))

}

console.log(messages);
generateRandomMessage(messages);
