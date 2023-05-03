const screen = {
  bookContainer: document.querySelector(".book"),
  renderBook(book) {
    this.bookContainer.innerHTML = `
        <div class="container book-details">
            <img
              src="${book.coverUrl ?? 'https://placehold.co/180x220'}"
              alt="cover of ${book.title}" />
            <article class="book-details-text">
              <h2>${book.title ?? ""}</h2>
              <h3>${book.author ?? ""}</h3>
              <p>
                ${book.description ?? ""}
              </p>
              <a href="${book.epubUrl ?? ""}" class="btn download-btn">
                <i class="fa fa-arrow-down"></i>
                Download epub
              </a>
            </article>
        </div>
        `;
  },
  renderNotFound() {
    this.bookContainer.innerHTML = `
      <div class="not-found">
        <p>Book not found 😕</p>
      </div>`;
  },
};

export { screen };