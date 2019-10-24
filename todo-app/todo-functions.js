//Search for existing Todo list. Provide an empty array if none found.
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null){
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

//Save Todo list to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

//Render todo list
const renderTodos = (todos, filters) => {
    document.querySelector("#todos").innerHTML = ''

    const filteredTodos = todos.filter(function(todo){
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.body
        debugger
        return searchTextMatch && hideCompletedMatch
    })

    debugger

    const todosLeft = todos.filter(function(todo){
        return !todo.body
    })

    debugger

    document.querySelector('#todos').appendChild(generateSummaryDOM(todosLeft))

    filteredTodos.forEach(function(todo){
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

//Generate the DOM structure for a todo
const generateTodoDOM = (todo) => {
    const todoElement = document.createElement('p')

    if(todo.text.length > 0){
        todoElement.textContent = todo.text
    } else {
        todoElement.textContent = 'Unnamed Todo'
    }

    return todoElement
}

//Generate the DOM structure for the summary
const generateSummaryDOM = (todosLeft) => {
    const summaryP = document.createElement('h2')
    summaryP.textContent = `You have ${todosLeft.length} left.`
    return summaryP
}