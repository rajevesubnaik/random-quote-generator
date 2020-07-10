const generateBtn = document.getElementById('generate-btn');
const quote = document.getElementById('quote');
const quoteAuthor = document.querySelector('.quote-author');

const quotes = [
  {
    quote: 'Losers visualize the penalties of failer. Winners visualize rewards of success',
    author: 'Danial Ally'
  },
  {
    quote: 'If the Devil can distract you, he can destroy you.',
    author: 'Danial Ally'
  },
  {
    quote: 'Let people plan their own lives, as long as they don\'t hurt people or take their stuff.',
    author: 'Matt Kibbe'
  },
  {
    quote: 'Those who would give up their liberty for security deserve neither.',
    author: 'Ben Franklin'
  }
];



console.log(quotes[1].quote);

generateBtn.addEventListener('click', () => {
  const randNum = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[randNum].quote;
  quoteAuthor.textContent = quotes[randNum].author;
})