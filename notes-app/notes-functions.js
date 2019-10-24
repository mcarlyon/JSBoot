//Read existing notes from locaclStorage
const getSavedNotes = function(){
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null){
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

//Save the notes to localStorage
const saveNotes = function(notes){
    localStorage.setItem('notes', JSON.stringify(notes))
}

//Generate the DOM structure for a note
const generateNoteDOM = function(note){
    const noteElement = document.createElement('div')
    const textElement = document.createElement('span')
    const button = document.createElement('button')

    button.textContent = 'X'
    noteElement.appendChild(button)

    if(note.title.length > 0){
        textElement.textContent = note.title
    } else {
        textElement.textContent = 'Unnamed Note'
    }

    noteElement.appendChild(textElement)

    return noteElement
}

//Render application notes
const renderNotes = function (notes, filters) {
    document.querySelector('#notes').innerHTML = ''

    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    filteredNotes.forEach(function(note){
        const noteElement = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteElement)
    })
}
