const right = document.getElementById("right")             // gets elements from the dom
const left = document.getElementById("left")               // document.getElementsByTagName
const todos = document.getElementById("todos");            // will find every element with the selected tag name
const textBoxes = document.getElementsByTagName("input");  // and store them to the named variable in an array style

const todo =                                               // creates a blank todo object
{
    id: "",
    title:  "",
    category: "", 
    imageURL:"",
    notes:""
}

function getAllTodos() {                                       
    fetch('http://localhost:3000/todoList/')              // fetch request - async
    .then(res => res.json())                              
    .then(data => renderTodos(data))                                             
}

getAllTodos()                                             

let form = document.getElementById("btn")
let values = []                                        //Create blank array 

window.onload = function() {                           //When the website loads
    for(let i = 0; i < textBoxes.length; i++) {        //for loop to add items from textboxes to array
        values.push(textBoxes[i]);
        textBoxes[i].addEventListener("mouseover", function(){ // 1st event listener "mouseover"
            if(textBoxes[i].value.includes(textBoxes[i].id))
            {
                textBoxes[i].value = ""
            } 
        })
    }
}
/*
Needs to be a regular for loop because for each function does not work on document.getElementsByTagName
*/
function renderTodos(todoList) {                            // creates initial set of todos
    for (let i = 0; i < todoList.length; i++) {                        
        let addTodo = "<br></br>";                          //create placeholder for inital set of todos                                     
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
        document.getElementById("img").addEventListener("click",function() {  // 1st event listener "click"         
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

form.addEventListener("click", (event)=> {   
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

    let addTodo = "";                                        // takes element and adds to div
        addTodo += "<br>ID: "+todo.id+"<br><br>";
        addTodo += "Title: "+todo.title+"<br><br>";
        addTodo += "Category: "+todo.category+"<br><br>";
        addTodo += "Notes: "+todo.notes+"<br><br>";  
        todos.innerHTML += addTodo+"<br><br><br>";                      
})   