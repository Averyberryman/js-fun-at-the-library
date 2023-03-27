function createTitle(title) {
  return "The " + title
}

function buildMainCharacter(name, age, pronouns) {
  return { 
    name: name,
    age: age, 
    pronouns: pronouns,
  }
}

function saveReview(content, reviews) {
  if (reviews.indexOf(content) > -1) {
    
  } else {
    reviews.push(content);
  }
}

function calculatePageCount(bookTitle) {
return bookTitle.length*20;
}

function writeBook(title, character, genre) {
var writtenBooks = {
  title: title,
  mainCharacter: character,
  pageCount: calculatePageCount(title),
  genre: genre
}
return writtenBooks
}

function editBook(editedBook) {
editedBook.pageCount = editedBook.pageCount * .75;

}




module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}