const todos = getSavedTodos()

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
        saveTodos(todos)
        e.target.elements.newTodo.value = ''
    }
    renderTodos(todos, filters)
})

document.querySelector('#hideCompleted').addEventListener('change', function(e){
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})