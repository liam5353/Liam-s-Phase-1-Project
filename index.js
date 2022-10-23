const right = document.getElementById("right")                          // setting a const element from DOM
let todos = document.getElementById("todos");   
let TextBoxes = document.getElementsByTagName("input");     
todolist = []
/*
id": 1,
    "title":  
    "category":  
    "imageURL":
    "notes":
*/
let ToDo = 
{
    id: "",
    title:  "",
    category: "", 
    imageURL:"",
    notes:""
}
function renderTodos(todoList) {   
todolist = todoList
       
       for(let i = 0; i < todoList.length; i++)                         // grabbing todos and putting onto DOM
       {
        let str = "";
        str += "<br>ID: "+todoList[i].id+"<br><br>";
        str += "\nTitle: "+todoList[i].title+"<br><br>";
        str += "\nCategory: "+todoList[i].category+"<br><br>";
                                                                        //str += "\nImageURL: " +todoList[i].imageURL;
        str += "\nNotes: "+todoList[i].notes+"<br><br>";
        let img = document.createElement("img");
        img.src = todoList[i].imageURL;
        img.setAttribute("height","100px");
        img.setAttribute("width","100px");
        todos.innerHTML += str+"<br><br><br>";
        todos.appendChild(img)
       }                  
    return todoList
}

function getAllTodos() {                                       
    fetch('http://localhost:3000/todoList/')               // read request - async
    .then(res => res.json())                               // .json to get data - async promise to do something when gets data back
    .then(data => renderTodos(data))                       // came through so we can parse data                        
}

getAllTodos()                                              // can't read yet - needs .json in line 2



form.addEventListener("submit", (e)=>{                    //  submit event with boxes for todos                
    console.log("button click")    
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
    let str = "";
        str += "<br>ID: "+ToDo.id+"<br><br>";
        str += "\nTitle: "+ToDo.title+"<br><br>";
        str += "\nCategory: "+ToDo.category+"<br><br>";
        //str += "\nImageURL: " +todoList[i].imageURL;
        str += "\nNotes: "+ToDo.notes+"<br><br>";
        let img = document.createElement("img");
        img.src = ToDo.imageURL;
        img.setAttribute("height","100px");
        img.setAttribute("width","100px");
        todos.innerHTML += str+"<br><br><br>";
        todos.appendChild(img)
        e.preventDefault()
})   

GetTextBoxes()

function GetTextBoxes()
{
    for(let i = 0; i < TextBoxes.length; i++)
    { 
        TextBoxes[i].addEventListener("click", function(){
            text = TextBoxes[i].value 
            TextBoxes[i].value  = ""
        })
    }
}