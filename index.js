const fetchBooks = () => {
  fetch('https://striveschool-api.herokuapp.com/books')
    .then((response) => {
      console.log(response)

      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Generic Error')
      }
    })
    .then((booksData) => {
      console.log(booksData)
      const booksRow = document.getElementById('books-row')

      booksData.forEach((book) => {
        const col = document.createElement('col')
        col.classList.add('col')
        const card = document.createElement('div')
        card.classList.add('card')

        card.innerHTML = `<img src=${book.img} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-price">Price: ${book.price}€</p>
          <div class="d-flex justify-content-between">
          <button class="btn btn-outline-danger remove-btn">Remove</button>
          <button class="btn btn-primary buy-btn ms-auto"><i class="bi bi-bag-plus"></i></button>
          </div>
        </div>`

        col.appendChild(card)
        booksRow.appendChild(col)

        const removeBtn = card.querySelector('.remove-btn')
        removeBtn.addEventListener('click', () => {
          col.remove()
        })
      })
    })
    .catch((error) => console.log(error))
}

window.onload = () => fetchBooks()
