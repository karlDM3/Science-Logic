const quotes = [
    "Logic will get you from A to B. Imagination will take you everywhere.",
    "The important thing is not to stop questioning.",
    "Science without religion is lame, religion without science is blind.",
    "Imagination is more important than knowledge.",
    "Try not to become a man of success, but rather try to become a man of value."
];

const emojis = document.querySelectorAll(".emoji");
const quoteBox = document.getElementById("quote");

emojis.forEach(emoji => {
    emoji.addEventListener("click", () => {
        const index = emoji.getAttribute("data-index");
        quoteBox.innerText = quotes[index];
    });
});
