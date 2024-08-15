const quotes = [
    {
        quote: "Anyone who has never made a mistake has never tried anything new.",
        author: "Albert Einstein",
    },
    {
        quote: "Enjoy the little things in life because one day you will look back and realize they were the big things.",
        author: "Charles R. Swindoll",
    },
    {
        quote: "You define your own life.Don't let other people write your script",
        author: "Oprah Winfrey",
    },
    {
        quote: "Do not wait to strike till the iron is hot, but make it hot by striking.",
        author: "William Butler Yeats",
    },
    {
        quote: "Success is not how high you have climbed, but how you make a positive difference to the world.",
        author: "Roy T. Bennett",
    },
 {
        quote: "When everything seems to be going against you,remember that the airplane takes off against the wind,not with it.",
        author: "Hentry Ford",
    },
 {
        quote: "Good decisions come from experience.Experience comes from making bad decisions",
        author: "Mark Twain",
    },
 {
        quote: "If you can change your mind,you can change your life.",
        author: "William James",
    },
 {
        quote: "The only thing standing between you and outrageous success is continuous progress.",
        author: "Dan Waldschmidt",
    },

 {
        quote: "Hard work beats talent when talent doesn't work hard.",
        author: "Tim Notke",
    },

];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

document.getElementById("newQuoteBtn").addEventListener("click", function () {
    const { quote, author } = getRandomQuote();
    document.getElementById("quote").innerText = `"${quote}"`;
    document.getElementById("author").innerText = `- ${author}`;
});
