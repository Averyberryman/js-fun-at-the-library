function shelfBook(title, shelfGenre) {
  if (shelfGenre.length < 3) {
    shelfGenre.unshift(title);
  }
}

function unshelfBook(title, shelf) {
for (var i = 0; i < shelf.length; i++) {
  if (shelf[i].title === title) {
    shelf.splice([i], 1)
  }
}
}

function listTitles(shelf) {
  var titles = []
  for (var i = 0; i < shelf.length; i++) {
    titles.push(shelf[i].title);
  }
return titles.join(', ') 
}


function searchShelf(shelf, title) {
  var titles = []
  for (var i = 0; i < shelf.length; i++)
  titles.push(shelf[i].title);
   console.log(titles)
if (titles.includes(title)) {
  return true
} else {
  return false
  }
}






module.exports = {
shelfBook,
unshelfBook,
listTitles,
searchShelf
};