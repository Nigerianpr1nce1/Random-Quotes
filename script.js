const quotes = document.querySelector('.quote')
const author = document.querySelector('.author')
let category = 'happiness'
const url = 'https://api.quotable.io/random'


 function getQuotes() {
     fetch(url)
    .then((data) => data.json())
    .then((item) => {
        quotes.textContent = item.content
        author.textContent = item.author
    })
}
 function get(){
    getQuotes()
 }