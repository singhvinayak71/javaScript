const bookStore = [
    {
        author: 'bill Gates',
        bookName: 'How to Prevent the Next Pandemi',
        publised: 2002
    },
    {
        author: 'dr. Thomas Matthew',
        bookName: 'Ratan N. Tata: The Authorized Biography',
        publised: 2010
    },
    {
        author: 'bimal Jalal',
        bookName: 'The India Story',
        publised: 2009
    },
    {
        author: 'devika Rangachari',
        bookName: 'Queen of Fire',
        publised: 2008
    },
    {
        author: 'priyam Gandhi Mody',
        bookName: 'A Nation To Protect',
        publised: 2011
    },

    {
        author: 'amit Shah',
        bookName: 'Rashtra Pratham - 82 Varshon ki Swarnim Gatha',
        publised: 2010
    },
    {
        author: 'pm Narendra Modi',
        bookName: 'The Braille edition of the book Exam Warriors',
        publised: 2000
    },
    {
        author: 'amartya Sen',
        bookName: 'Home in the World',
        publised: 2021
    },

]




const addBooks = document.getElementById('bookStore')
addBooks.style.textTransform = "capitalize"

const authorName = document.getElementsByClassName('authername');
const bookname = document.getElementsByClassName('bookname');
const publisedIn = document.getElementsByClassName('publised')

// filter out all book that publised before 2010
const filteredBook = bookStore.filter((elem) => elem.publised <= 2010);

filteredBook.forEach((element , index)=>{
    console.log(element)
    addBooks.innerHTML += `<div><div>${element.author}</div> <p>${element.bookName}</p> <i> Publised in : ${element.publised}</i></div>`;

    console.log(`${element.author} book name "${element.bookName}" and publised in ${element.publised}`)

    })


















// const authorName = document.getElementById('authername');
// const bookname = document.getElementById('bookname');
// const publisedIn = document.getElementById('publised')

// console.log(authorName.innerHTML)


// const capitalize = bookStore.map((elem) => {
//     // console.log(elem)
// })
// const filteredBook = bookStore.filter((elem) => elem.publised >= 2010);

// filteredBook.forEach((element)=>{
    // authorName.innerHTML += `<div>${element.author}</div>`
    // bookname.innerHTML += `<div>${element.bookName}</div>`
    // publisedIn.innerHTML += `<div>${element.publised}</div>`
            // console.log(`${element.author.toLocaleUpperCase()} book name "${element.bookName}" and publised in ${element.publised}`)
    // })
