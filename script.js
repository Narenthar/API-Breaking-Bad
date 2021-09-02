let displayarea = document.getElementById('display')
async function getquote() {
  try {
    let uri = await fetch('https://www.breakingbadapi.com/api/quote/random')
    let data = await uri.json()
    let quote = data[0].quote
    let author = data[0].author
    displayarea.innerHTML = ''
    let quotearea = document.createElement('div')
    quotearea.setAttribute('class', 'col-sm-6 quotearea')
    quotearea.innerHTML = `<p class="quote">"${quote}"</p>
  <p class="author">-${author}</p>`
    displayarea.append(quotearea)
  } catch (err) {
    alert('Error, Plaese try again')
  }
}
