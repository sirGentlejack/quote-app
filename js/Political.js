var arrayOfQuotes = [
  {
    author: "Jim Rohn",
    quotes: "Beware of what you become in pursuit of what you want.",
  },
  {
    author: "Gentle Jack",
    quotes: "YOLO - You Only Life Once.",
  },
  {
    author: "Ilemobayo",
    quotes: "Give your life to Christ.",
  },
  {
    author: "King B-boy",
    quotes: "I love wat i do.",
  },
    
  
  {
    author: "Lemo B",
    quotes: "simplicity is key.",
  },

  
  {
    author: "Lemo B",
    quotes: "simplicity is key.",
  },
];

function randomSelector(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}

function generateQuote() {
  var randomNumber = randomSelector(arrayOfQuotes.length);

  document.getElementById("quoteOutput").innerHTML =
    '"' + arrayOfQuotes[randomNumber].quotes + '"';

  document.getElementById("authorOutput").innerHTML =
    "- " + arrayOfQuotes[randomNumber].author;
}
