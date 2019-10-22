let todos = []

const todosJSON = localStorage.getItem('todos')

if (todosJSON !== null){
    todos = JSON.parse(todosJSON)
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

const filters = {
    searchText: '',
    hideCompleted: false
}

const createTodo = function(input){
    const todoP = document.createElement('p')
    todoP.textContent = input;
    document.querySelector("#todos").appendChild(todoP)
}

const renderTodos = function(todos, filters){
    document.querySelector("#todos").innerHTML = ''

    const filteredTodos = todos.filter(function(todo){
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.body
        return searchTextMatch && hideCompletedMatch
    })

    const todosLeft = todos.filter(function(todo){
        return !todo.body
    })

    const summaryP = document.createElement('h2')
    summaryP.textContent = `You have ${todosLeft.length} left.`
    document.querySelector('#todos').appendChild(summaryP)

    filteredTodos.forEach(function(todo){
        createTodo(`${todo.text}.`)
    })
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#add-todo').addEventListener('submit', function(e){
    e.preventDefault()
    if (e.target.elements.newTodo.value.length > 0){
        const newTodo = {
            text: `${e.target.elements.newTodo.value}`,
            body: false
        }
        todos.push(newTodo)
        localStorage.setItem('todos', JSON.stringify(todos))
        e.target.elements.newTodo.value = ''
    }
    renderTodos(todos, filters)
})

document.querySelector('#hideCompleted').addEventListener('change', function(e){
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})