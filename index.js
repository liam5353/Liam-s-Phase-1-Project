const right = document.getElementById("right")              
const left = document.getElementById("left")               
const todos = document.getElementById("todos");             
const textBoxes = document.getElementsByTagName("input");   
const form = document.getElementById("btn")                 
const values = []                                           
const todo =                                                
{
    id: "",
    title:  "",
    category: "", 
    imageURL:"",
    notes:""
}

function getAllTodos() {                                       
    fetch('http://localhost:3000/todoList/')                
    .then(res => res.json())                              
    .then(data => renderTodos(data))                                             
}

getAllTodos()                                             

window.onload = function() {                                        
    for(let i = 0; i < textBoxes.length; i++) {                     
        values.push(textBoxes[i]);                                  
        textBoxes[i].addEventListener("mouseover", function() {     
            if(textBoxes[i].value.includes(textBoxes[i].id))
            {
                textBoxes[i].value = ""
            } 
        })
    }
}

function renderTodos(todoList) {                            
    for (let i = 0; i < todoList.length; i++) {                        
        let addTodo = "<br></br>";                                                             
        addTodo += "ID: "+todoList[i].id+"<br><br>";
        addTodo += "Title: "+todoList[i].title+"<br><br>";
        addTodo += "Category: "+todoList[i].category+"<br><br>";
        addTodo += "Notes: "+todoList[i].notes+"<br><br>";
        let img = document.createElement("img");                        
        img.src = todoList[i].imageURL;
        img.setAttribute("height","100px");
        img.setAttribute("width","100px");
        img.setAttribute("id","img")
        todos.innerHTML += addTodo+"<br><br><br>";
        todos.appendChild(img)
        document.getElementById("img").addEventListener("click",function() {         
            document.getElementById("img").setAttribute("height","500px");
            document.getElementById("img").setAttribute("width","500px");
            document.getElementById("img").addEventListener("mouseout",function() {    
                document.getElementById("img").setAttribute("height","100px");
                document.getElementById("img").setAttribute("width","100px");
            })
        })
    }       
}

form.addEventListener("click", function() {      
    {  
        values.forEach(function(i){             
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

    let addTodo = "";                                        
        addTodo += "<br>ID: "+todo.id+"<br><br>";
        addTodo += "Title: "+todo.title+"<br><br>";
        addTodo += "Category: "+todo.category+"<br><br>";
        addTodo += "Notes: "+todo.notes+"<br><br>";  
        todos.innerHTML += addTodo+"<br><br><br>";                      
})   