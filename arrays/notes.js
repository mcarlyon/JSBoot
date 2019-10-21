const notes = [{
    title: 'Worried',
    body: 'How do I get out of here?'
},{
    title: 'Scared',
    body: 'Things are gonna go downhill pretty quick, man'
},{
    title: 'Determined',
    body: 'Stay the course and carry a towel'
}]

// notes.splice(1, 0, 'Note 1.5')
// notes[2] = "Note 7"

// notes.forEach(function(note, index){
//     console.log(`${note} and index ${index}`);
// })

//console.log(notes.length)
//console.log(notes)

//console.log(notes.indexOf('Note 2'))

console.log ('bcd' < 'bac') //Returns booleans for alphabetical order

const sortNotes = function(notes){
    notes.sort(function(a, b){
        if (a.title.toLowerCase() < b.title.toLowerCase()){
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()){
            return 1
        } else {
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes)

const findNote = function(notes, noteTitle){
    return notes.find(function(note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function(notes, query){
    return notes.filter(function(note, index){
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}
//console.log(findNotes(notes, 'here'))

// const findNote = function(notes, noteTitle){
//     const index = notes.findIndex(function(note, index){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

//const note = findNote(notes, 'Scared')
//console.log(note)

// const index = notes.findIndex(function(note, index){
//     //console.log(note)
//     return note.title === 'Scared'
// })

// console.log(index)