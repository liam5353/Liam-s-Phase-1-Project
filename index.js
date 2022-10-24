const right = document.getElementById("right")                         // setting a const element from DOM
let todos = document.getElementById("todos");                          // gets todo div
let TextBoxes = document.getElementsByTagName("input");                // textbox div
todolist = []

let ToDo =                                                             // creates object of todo
{
    id: "",
    title:  "",
    category: "", 
    imageURL:"",
    notes:""
}

function renderTodos(todoList) {                                       // creates first set of todos
       for(let i = 0; i < todoList.length; i++)                        // for loop for iterating through array
    {
        let str = "";                                                  // string for adding new todos for textbox   
        str += "<br>ID: "+todoList[i].id+"<br><br>";
        str += "\nTitle: "+todoList[i].title+"<br><br>";
        str += "\nCategory: "+todoList[i].category+"<br><br>";
        str += "\nNotes: "+todoList[i].notes+"<br><br>";
        let img = document.createElement("img");                       // loads image
        img.src = todoList[i].imageURL;
        img.setAttribute("height","100px");
        img.setAttribute("width","100px");
        img.setAttribute("id","img")
        todos.innerHTML += str+"<br><br><br>";
        todos.appendChild(img)
        document.getElementById("img").addEventListener("click",function() {            // 1st event listener "click"
            document.getElementById("img").setAttribute("height","500px");
            document.getElementById("img").setAttribute("width","500px");
            document.getElementById("img").addEventListener("mouseout",function() {     // 4th event listener "mouseout" to return pic to size
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

form.addEventListener("submit", (e)=>{                    // 2nd event listener textbox "submit"             
    for(let i = 0; i < TextBoxes.length; i++)
    { 
        if(i == 0)
        {
            ToDo.id = TextBoxes[i].value 
            TextBoxes[i].value  = ""
        } 
        else if(i == 1)
        {
            ToDo.title = TextBoxes[i].value 
            TextBoxes[i].value  = ""
        } 
        else if(i == 2)
        {
            ToDo.category = TextBoxes[i].value 
            TextBoxes[i].value  = ""
        } 
        else if(i == 3)
        {
            ToDo.imageURL = TextBoxes[i].value 
            TextBoxes[i].value  = ""
        } 
        else if(i == 4)
        {
            ToDo.notes = TextBoxes[i].value 
            TextBoxes[i].value  = ""
        }  
    }  

    let str = "";                                           // creates a string using todo object 
        str += "<br>ID: "+ToDo.id+"<br><br>";
        str += "\nTitle: "+ToDo.title+"<br><br>";
        str += "\nCategory: "+ToDo.category+"<br><br>";
        str += "\nNotes: "+ToDo.notes+"<br><br>";
        let img = document.createElement("img");
        img.src = ToDo.imageURL;
        img.setAttribute("height","100px");
        img.setAttribute("width","100px");
        todos.innerHTML += str+"<br><br><br>";
        todos.appendChild(img)                              // takes element and adds to div
        e.preventDefault()
})   

function GetTextBoxes()
{ 
    for(let i = 0; i < TextBoxes.length; i++)
    { 
        TextBoxes[i].addEventListener("mouseover", function() {     // 3rd event listener "mouseover"
            text = TextBoxes[i].value 
            TextBoxes[i].value  = ""
        })
    }
}

GetTextBoxes()