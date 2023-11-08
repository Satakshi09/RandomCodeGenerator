const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

document.addEventListener("DOMContentLoaded", function () {
    const quoteText = document.getElementById("quote-text");
    const newQuoteButton = document.getElementById("new-quote");

    newQuoteButton.addEventListener("click", function () {
        const randomQuote = getRandomQuote();
        quoteText.textContent = randomQuote;
    });
});
