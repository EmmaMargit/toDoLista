import { Todo } from "./models/todo"; // Kompilering av båda js filerna


// Skapandet av listan 
let toDos = [new Todo("Tvätta"), new Todo("Gå med hunden"), new Todo("Läsa en bok"), new Todo("Laga mat"), new Todo("Plugga")];
let ul = document.getElementById("toDoList");

function printList(){

    // for loop för listan items
    for(let i = 0; i < toDos.length; i++){
        console.log(toDos[i]); 
        
        let item = document.createElement("li"); // <li></li>
        item.className="lista";
        if(toDos [i].completed){
            item.innerHTML = toDos[i].todoName;
        }else{
            item.innerHTML = toDos[i].todoName;
        }
        //item.innerHTML = toDos[i].todoName; // <li>Tvätta</li>

        item.addEventListener("click", () => { // Kan klicka på itemssakerna
            handleClick(toDos[i]);
        });

        ul.appendChild(item);  // <ul><li>Tvätta</li></ul>
    }
}
printList();

// function för knappen, det som skrivs i consolen
function handleClick(todo){
        console.log("Klickade på", todo);
}


// Lägga till nya saker i listan
document.getElementById("btnAdd").addEventListener("click", addItemTolist);
function addItemTolist(){
    let itemToAdd = document.getElementById("item").value;
        console.log(itemToAdd);
    let newObject = new Todo (itemToAdd);
    newObject.completed = true;
    toDos.push(newObject);
    document.getElementById("toDoList").innerHTML = "";
    printList();
}

      