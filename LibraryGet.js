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

function getBookFromLibrary(Title){
    let book = LIBRARY.find(book => book.Title ==Title)
    
    if(book){
        console.log( 'Yay!!! Book found')
    }
    else {
        console.log (`Book with Title: ${Title} not found`)
    }
}

getBookFromLibrary("The Open")