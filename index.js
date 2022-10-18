window.addEventListener("DOMContentLoaded", () => {
    fetchTodos()
    document.querySelector('new-todo').addEventListener("submit", addTodo)
})

function addTodo(event) {
    event.preventDefault()
    const todo = {
    content: document.querySelector('#content').value
}    

fetch("http://localhost:3000/todos", {
    method: "Post",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(todo)
})   

.then(res => res.json())
.then(data => {
    // console.log(data)
    const todos = document.querySelector("#todos-container")
    todos.innerHTML += renderSingleTodo(data)
    document.querySelector('#content').value = " "
})

function fetchTodos() {
    fetch("http://localhost:3000/todos")
    .then(res => res.json())
    .then(data => {
        console.log("fetch response", data)
        console.log("renderAllTodos return value", renderAllTodos(data))
        const todos = document.querySelector("#todos-container")
        todos.innerHTML = renderAllTodos(data)
        addTodoListeners()
    })
}

function addTodoListeners() {
    const todos = document.querySelectorAll("#todos-container")
    todos.forEach(td => td.addEventListener('click', deleteTodo))
}

function deleteTodo(event) {
    // console.log(event.target.parentElement.id)
    fetch(`http://localhost:3000/todos/${event.target.id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const todoNode = event.target.parentElement.parentElement
    document.querySelector("#todos-container").removeChild(todoNode)
}

function renderAllTodos(todos) {
    return todos.map(td => renderSingleTodo(td)).join("")
}

function renderSingleTodo(todo) {
    return  `
        <div class="todo-card" id="${todo.id}">
            <div class="todo-frame">
                <h1 class="center-text">${todo.content}</h1>
                <button data-action="delete" id="${todo.id}" class="todo-delete-button">Delete</button><br></br>
            </div>
        </div> 
    ` 
}}