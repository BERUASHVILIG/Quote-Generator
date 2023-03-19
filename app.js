const quoteContainer = document.getElementById("quote-container");

function createQuoteElement(quote) {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("mainDiv");

  const quoteId = document.createElement("h3");
  quoteId.classList.add("quoteId");
  quoteId.innerHTML = `Advice: #${quote.slip.id}`;

  const quoteAdvice = document.createElement("p");
  quoteAdvice.classList.add("quoteAdvice");
  quoteAdvice.innerHTML = `<span style=" font-size:2rem">“</span>  ${quote.slip.advice}  <span style=" font-size:2rem">”</span>`;

  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = "New Quote";
  btn.addEventListener("click", () => {
    fetchQuotes();
  });

  mainDiv.append(quoteId, quoteAdvice, btn);
  return mainDiv;
}

function renderQuotes(quotes) {
  quoteContainer.innerHTML = "";
  for (let quote of quotes) {
    const currentQuote = createQuoteElement(quote);
    quoteContainer.append(currentQuote);
  }
}

async function fetchQuotes() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  const quotes = [data];
  renderQuotes(quotes);
}

fetchQuotes();
