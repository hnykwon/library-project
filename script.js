let myLibrary = [];
let card = document.querySelector(".card");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  myLibrary.push(Book(bookTitle, bookAuthor, bookPages, bookRead));
}

function render(library) {
  for (i = 0; i < library.length; i++) {
    card.innerHTML = library[i];
  }
}

addBookToLibrary();
render(myLibrary);
