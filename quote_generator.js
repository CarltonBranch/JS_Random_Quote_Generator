let btn = document.getElementById("main-btn");
let quotes = []

let getQuotesFromAPI = async () => {
    const response = await fetch('https://type.fit/api/quotes').then(function (response) {
        return response.json();
    })
    return response;
};

let getRandomQuote = (data) => {
    let size = data.length;
    let randomIndex = Math.floor(Math.random() * size);
    return data[randomIndex];
};

btn.onclick = async function () {
    if (quotes.length === 0) {
        quotes = await getQuotesFromAPI();
    }
    let quote = getRandomQuote(quotes);
    let display = document.getElementById('main-txt');
    display.innerHTML = `<div>${quote.text}</div><br><div>--${quote.author}</div>`;
};
