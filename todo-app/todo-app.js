const todos = [{
    text: 'Workout',
    body: true
},{
    text: 'Study JS',
    body: true
},{
    text: 'Not lose it',
    body: false
},{
    text: 'Maybe Game',
    body: false
},{
    text: 'LOSE IT',
    body: false
}]

const sortTodos = function(todos){
    todos.sort(function(a, b){
        if (a.body && !b.body){
            return 1
         } else if (b.body && !a.body){
            return -1
        } else {
            return 0
        }
    })
}

// const todosLeft = function(todos){
//     let count = 0
//     todos.forEach(function(todo){
//         !todo.body ? count++ : false 
//     })
//     const summaryP = document.createElement('p')
//     summaryP.textContent = `You have ${count} todos left.` 
//     document.querySelector('body').appendChild(summaryP)
// }

// const addTodoList = function(todos){
//     todos.forEach(function(todo){
//         const todoP = document.createElement('p')
//         todoP.textContent = `${todo.text}. Status: ${todo.body}`
//         document.querySelector('body').appendChild(todoP)
//     })
// }

const todosLeft = todos.filter(function(todo){
    return !todo.body
})

const summaryP = document.createElement('p')
summaryP.textContent = `You have ${todosLeft.length} left.`
document.querySelector('body').appendChild(summaryP)

todos.forEach(function(todo){
    const todoP = document.createElement('p')
    todoP.textContent = `${todo.text}.`
    document.querySelector('body').appendChild(todoP)
})

document.querySelector('button').addEventListener('click', function (e){
    e.target.textContent = "The button was clicked"
})