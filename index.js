const quotes = [
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh"
];
// Function to get a random quote
function getRandomQuote(){
    const randomNmber = Math.floor(Math.random() * quotes.length)
    return quotes[randomNmber]
}
// function to display the quote on the webpage
function displayQuote(){
    const quoteElement =document.getElementById('quote')
    quoteElement.textContent = getRandomQuote()

}
//event listener 
document.getElementById('generate-btn').addEventListener('click',displayQuote)
// display the quote
displayQuote()