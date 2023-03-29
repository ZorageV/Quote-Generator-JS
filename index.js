let btn = document.getElementById('new-quote')
let quote = document.getElementById('quote')
let author =  document.getElementById('author')

const quotes = [
    {
        quote: "Life is what happens when you're busy making other plans." ,
        author: "— John Lennon"
    },
    {
        quote: "Get busy living or get busy dying." ,
        author: "— Stephen King"
    },
    {
        quote: "You only live once, but if you do it right, once is enough." ,
        author: "— Mae West"
    },
    {
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up." ,
        author: "— Thomas A. Edison"
    },
    {
        quote: "The purpose of our lives is to be happy." ,
        author: "— Dalai Lama"
    },
    {
        quote: "If you want to live a happy life, tie it to a goal, not to people or things." ,
        author:"- Albert Einstein"
    },
] 

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random()*quotes.length)
    quote.innerText =  quotes[random].quote
    author.innerText = quotes[random].author
} )