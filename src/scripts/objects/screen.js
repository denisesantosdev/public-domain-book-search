const screen = {
    bookContainer: document.querySelector(".book"),
    renderBook(book){
        this.bookContainer.innerHTML = `
        <div class="container book-details">
            <img
              src="https://placehold.co/180x220"
              alt="" />
            <article class="book-details-text">
              <h2>${book.title}</h2>
              <h3>${book.author}</h3>
              <p>
                ${book.description}
              </p>
              <a href="${book.epubUrl}" class="btn download-btn">
                <i class="fa fa-arrow-down"></i>
                Download epub
              </a>
            </article>
        </div>
        `
    },
}

export {screen}