// https://type.fit/api/quotes

async function fetchRandomQuote() {
    try {
      const response = await fetch('https://type.fit/api/quotes');
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      return data[randomIndex].text;
    } catch (error) {
      console.error('Error fetching quote:', error);
      return 'An error occurred while fetching the quote. Please try again later.';
    }
  }

  // Function to generate random quote
  async function generateQuote() {
    const quote = await fetchRandomQuote();
    document.getElementById('quote').innerText = quote;
  }

  // Event listener for the button click
  document.getElementById('generateBtn').addEventListener('click', generateQuote);

  // Initial quote generation
  generateQuote();
