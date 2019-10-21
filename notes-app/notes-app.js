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

//DOM
const addNote = function(note){
    console.log(note)
}

document.querySelector('button').addEventListener('click', function (e){
    e.target.textContent = "The button was clicked"
})

