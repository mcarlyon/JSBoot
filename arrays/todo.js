const todoList = ['Workout', 'Study JS', 'Study React', 'Not lose it', 'Maybe Game']

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

const deleteTodos = function(todos, text){
    const index = todos.findIndex(function(todo, index){
        return todo.text.toLowerCase() === text.toLowerCase()
    })
    //missed the if
    index > -1 ? todos.splice(index, 1) : false
}

//deleteTodos(todos, 'workout')
//console.log(todos)

const getThingsToDo = function(todos){
    return todos.filter(function(todo){
        //return todo.body === false
        return !todo.body
    })
}

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

//console.log(getThingsToDo(todos))
sortTodos(todos)
console.log(todos)

