const right = document.getElementById("right")              // gets elements from the dom
const left = document.getElementById("left")                // document.getElementsByTagName
const todos = document.getElementById("todos");             // will find every element with the selected tag name
const textBoxes = document.getElementsByTagName("input");   // and store them to the named variable in an array
const form = document.getElementById("btn")                 // button for adding todos
const values = []                                           // creates empty array 
const todo =                                                // creates a empty todo object
{
    id: "",
    title:  "",
    category: "", 
    imageURL:"",
    notes:""
}

function getAllTodos() {                                       
    fetch('http://localhost:3000/todoList/')                // fetch request - async
    .then(res => res.json())                              
    .then(data => renderTodos(data))                                             
}

getAllTodos()                                             

window.onload = function() {                                        // when the website loads - DOMContentLoaded?
    for(let i = 0; i < textBoxes.length; i++) {                     // for loop to add items from textboxes to array because
        values.push(textBoxes[i]);                                  // function won't work on document.getElementsByTagName
        textBoxes[i].addEventListener("mouseover", function() {     // 1st event listener "mouseover"
            if(textBoxes[i].value.includes(textBoxes[i].id))
            {
                textBoxes[i].value = ""
            } 
        })
    }
}

function renderTodos(todoList) {                            // creates initial set of todos
    for (let i = 0; i < todoList.length; i++) {                        
        let addTodo = "<br></br>";                          // create placeholder for initial set of todos                                     
        addTodo += "ID: "+todoList[i].id+"<br><br>";
        addTodo += "Title: "+todoList[i].title+"<br><br>";
        addTodo += "Category: "+todoList[i].category+"<br><br>";
        addTodo += "Notes: "+todoList[i].notes+"<br><br>";
        let img = document.createElement("img");                        // loads image from url
        img.src = todoList[i].imageURL;
        img.setAttribute("height","100px");
        img.setAttribute("width","100px");
        img.setAttribute("id","img")
        todos.innerHTML += addTodo+"<br><br><br>";
        todos.appendChild(img)
        document.getElementById("img").addEventListener("click",function() {  // 2nd event listener "click"         
            document.getElementById("img").setAttribute("height","500px");
            document.getElementById("img").setAttribute("width","500px");
            document.getElementById("img").addEventListener("mouseout",function() {     // 3rd event listener "mouseout" to return pic to size
                document.getElementById("img").setAttribute("height","100px");
                document.getElementById("img").setAttribute("width","100px");
            })
        })
    }       // return todoList - can take this off? it still works
}

form.addEventListener("click", (event) => {      // event? is this a submit even though its a click?
    {  
        values.forEach(function(i){             // forEach for empty array (values) to add new todo
            if (i.id == "id")
            {
                todo.id = i.value 
                i.value  = ""
            } 
            else if(i.id == "title")
            {
                todo.title = i.value 
                i.value  = ""
            } 
            else if(i.id == "category")
            {
                todo.category = i.value 
                i.value  = ""
            }  
            else if(i.id == "notes")
            {
                todo.notes = i.value 
                i.value  = ""
            }  
        })
    }   

    let addTodo = "";                                        // takes each element and adds to div
        addTodo += "<br>ID: "+todo.id+"<br><br>";
        addTodo += "Title: "+todo.title+"<br><br>";
        addTodo += "Category: "+todo.category+"<br><br>";
        addTodo += "Notes: "+todo.notes+"<br><br>";  
        todos.innerHTML += addTodo+"<br><br><br>";                      
})   