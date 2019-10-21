let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function(book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

//console.log(bookSummary.summary);

let tempChange = function(fahren) {
    return {
        fahrenheight: fahren,
        celsius: Math.floor((fahren - 32) * (5 / 9)),
        kelvin: Math.floor((fahren + 459.67) * (5 / 9))
    }
}

let newTemp = tempChange(74);

console.log(`${newTemp.fahrenheight} degress F is ${newTemp.celsius} degrees C and ${newTemp.kelvin} degrees K.`);