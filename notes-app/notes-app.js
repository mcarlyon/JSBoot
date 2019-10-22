let notes = [{
    title: 'Worried',
    body: 'How do I get out of here?'
},{
    title: 'Scared',
    body: 'Things are gonna go downhill pretty quick, man'
},{
    title: 'Determined',
    body: 'Stay the course and carry a towel'
}]

//DOM
const addNote = function(note){
    console.log(note)
}

const filters = {
    searchText: ''
}

//Check for existing saved data
const notesJSON = localStorage.getItem('notes')
if (notesJSON !== null){
    notes = JSON.parse(notesJSON)
}

// const user = {
//     name: 'Bob',
//     age: 30
// }
// const userJSON = JSON.stringify(user)
// console.log(userJSON)
// localStorage.setItem('user', userJSON)

const userJSON = localStorage.getItem('user')
const user = JSON.parse(userJSON)
console.log(`${user.name} is ${user.age}`)

// localStorage.setItem('location', 'Xanadu') //Create and Update
// console.log(localStorage.getItem('location')) //Read
// localStorage.removeItem('location') //Delete
// localStorage.clear() //Delete All
//Local Storage only supports strings.

const renderNotes = function (notes, filters) {
    document.querySelector('#notes').innerHTML = ''

    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    filteredNotes.forEach(function(note){
        const noteElement = document.createElement('p')

        if(note.title.length > 0){
            noteElement.textContent = note.title
        } else {
            noteElement.textContent = 'Unnamed Note'
        }
        document.querySelector('#notes').appendChild(noteElement)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e){
    notes.push({
        title: '',
        body: ''
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes, filters)
})

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#sort-options').addEventListener('change', function(e){
    console.log(e.target.value)
})

