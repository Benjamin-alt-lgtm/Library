LIBRARY =[
        {   Title: 'Murder', 
            Author: 'Arnold Bennett',
            Id: 1, 
            Series: 'Crime' },
        {
            Title: 'An Occurence at Owl Creek Bridge One of the Missing',
            Author: 'Ambrose Bierce',
            Id: 2,
            Series: 'Adventure'
        },
        {
            Title: 'A Boy at Seven',
            Author: 'John Bidwell',
            Id: 3,
            Series: 'First Edition'
        },
        {
            Title: 'The Open Boat',
            Author: 'Stephen Crane',
            Id: 5,
            Series: 'Classic'
        },
        {
            Title: 'The Signalman',
            Author: 'Charles Dickson',
            Id: 6,
            Series: 'Suspense'
        }
  ]

  function updateLibraryBookSeries(bookId, newSeries){
    let book = LIBRARY.find(book => book.Id == bookId)
    if(book){
        book.Series = newSeries
        console.log(`Yes!!! Book with ID ${bookId} series as been changed to ${newSeries}`)
    }
    else {
        console.log(`Sorry book with ID ${bookId} not found`)
    }
    console.log(LIBRARY)
  }

  updateLibraryBookSeries(5, 'Action')
