let LIBRARY = [
    {
        Title: "Murder",
        Author: "Arnold Bennett",
        Id: 1,
        Series: "Crime",
    }, 

    {
        Title: "An Occurence at Owl Creek Bridge One of the Missing",
        Author: "Ambrose Bierce",
        Id: 2,
        Series: "Adventure",
    }, 

    {
        Title: "A Boy at Seven",
        Author: "John Bidwell",
        Id: 3,
        Series: "First Edition",
    }, 

    {
        Title: "The Higgler",
        Author: "A.E. Coppard",
        Id: 4,
        Series: "Romance",
    },
    
    {
        Title: "The Open Boat",
        Author: "Stephen Crane",
        Id: 5,
        Series: "Classic",
    }, 
]
console.log("Library before new books were added")
console.log(LIBRARY)
//ADD A BOOK TO THE LIBRARY

function addNewBook(Title, Author, Series){
   let booksId = LIBRARY.length+1
   let books ={
    Title: Title,
    Author: Author,
    Id: booksId,
    Series: Series
   }
   LIBRARY.push(books)
}
console.log("After a new book were added")
addNewBook("The Signalman", "Charles Dickson", "Suspense")
console.log(LIBRARY)