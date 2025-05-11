const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const button = document.querySelector(".new-quote-btn")

const getQuote = async () => {
    try {
      const response = await fetch("https://dummyjson.com/quotes/random");
      const data = await response.json();
  
      const quoteInput = data.quote;
      const authorInput = data.author || 'Unknown';
  
      quote.textContent = quoteInput;
      author.textContent = authorInput;
    } catch (error) {
      console.log(error);
      quote.textContent = 'An error occurred.';
      author.textContent = '';
    }
  }

  getQuote();
  button.addEventListener('click', getQuote);