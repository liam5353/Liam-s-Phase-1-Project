const right = document.getElementById("right")               // setting a const element from DOM
const left = document.getElementById("left")
const todos = document.getElementById("todos");              // gets todo div
const textBoxes = document.getElementsByTagName("input");    // textbox div
const todo =                                                 // creates todo string
{
    id: "",
    title:  "",
    category: "", 
    imageURL:"",
    notes:""
}
// todolist = []

function renderTodos(todoList) {                                       // creates first set of todos
    for (let i = 0; i < todoList.length; i++) {                        // empty string for adding new todos for textbox
        let addTodo = "<br></br>";                                        
        addTodo += "ID: "+todoList[i].id+"<br><br>";
        addTodo += "Title: "+todoList[i].title+"<br><br>";
        addTodo += "Category: "+todoList[i].category+"<br><br>";
        addTodo += "Notes: "+todoList[i].notes+"<br><br>";
        let img = document.createElement("img");                        // loads image
        img.src = todoList[i].imageURL;
        img.setAttribute("height","100px");
        img.setAttribute("width","100px");
        img.setAttribute("id","img")
        todos.innerHTML += addTodo+"<br><br><br>";
        todos.appendChild(img)
        document.getElementById("img").addEventListener("click",function() {            // 1st event listener "click"
            document.getElementById("img").setAttribute("height","500px");
            document.getElementById("img").setAttribute("width","500px");
            document.getElementById("img").addEventListener("mouseout",function() {     // 2nd event listener "mouseout" to return pic to size
                document.getElementById("img").setAttribute("height","100px");
                document.getElementById("img").setAttribute("width","100px");
            })
        })
    } 
    return todoList
}

function getAllTodos() {                                       
    fetch('http://localhost:3000/todoList/')              // fetch request - async
    .then(res => res.json())                              // .json to get data - async promise to do something when gets data back
    .then(data => renderTodos(data))                      // came through so we can grab from string                         
}

getAllTodos()                                             

form.addEventListener("submit", (e)=> {                               
    for(let i = 0; i < textBoxes.length; i++) { 
        if (i == 0)
        {
            todo.id = textBoxes[i].value 
            textBoxes[i].value  = ""
        } 
        else if(i == 1)
        {
            todo.title = textBoxes[i].value 
            textBoxes[i].value  = ""
        } 
        else if(i == 2)
        {
            todo.category = textBoxes[i].value 
            textBoxes[i].value  = ""
        } 
        else if(i == 3)
        {
            todo.imageURL = textBoxes[i].value 
            textBoxes[i].value  = ""
        } 
        else if(i == 4)
        {
            todo.notes = textBoxes[i].value 
            textBoxes[i].value  = ""
        }  
    }  

    let addTodo = "";                                        // creates a string using todo object 
        addTodo += "<br>ID: "+todo.id+"<br><br>";
        addTodo += "Title: "+todo.title+"<br><br>";
        addTodo += "Category: "+todo.category+"<br><br>";
        addTodo += "Notes: "+todo.notes+"<br><br>";             
        let img = document.createElement("img");
        img.src = todo.imageURL;
        img.setAttribute("height","200px");
        img.setAttribute("width","200px");
        todos.innerHTML += addTodo+"<br><br><br>";
        todos.appendChild(img)                              // takes element and adds to div
        e.preventDefault()
})   

function getTextBoxes() { 
    for(let i = 0; i < textBoxes.length; i++) { 
        textBoxes[i].addEventListener("", function() {     // 3rd event listener "mouseover"
            text = textBoxes[i].value 
            textBoxes[i].value  = ""
        })
    }
}

getTextBoxes()