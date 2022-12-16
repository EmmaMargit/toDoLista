import { Todo } from "./models/todo"; // Kompilering av båda js filerna

// Skapandet av listan
let toDos = [];
let ul = document.getElementById("toDoList");
let input = document.getElementById("item");
let addButton = document.getElementById("btnAdd");

function printList() {
  ul.innerHTML = "";
  // for loop för listan items
  for (let i = 0; i < toDos.length; i++) {
    let item = document.createElement("li"); // <li></li>
    item.className = "lista";
    ul.appendChild(item); // placera initåt ul elementet
    item.innerHTML = toDos[i].todoName;

    if (toDos[i].completed === true) {
      item.classList.toggle("completed");
    }

    function completedTodo() {
      toDos[i].completed = !toDos[i].completed;
      saveTodo();
      printList();
    }

    let deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";
    deleteButton.innerHTML = "delete";
    ul.appendChild(deleteButton); // placera initåt ul elementet
    deleteButton.addEventListener("click", () => {
      toDos.splice([i], 1);
      saveTodo();
    });

    let completedButton = document.createElement("button");
    completedButton.className = "completedButton";
    completedButton.innerHTML = "done";
    ul.appendChild(completedButton); // placera initåt ul elementet

    completedButton.addEventListener("click", () => {
      completedTodo([i]);
    });

    item.addEventListener("click", () => {
      // Kan klicka på itemssakerna
      handleClick(toDos[i]);
    });
  }
}

function addItemTolist(e) {
  e.preventDefault();
  let itemToAdd = new Todo(input.value, false);

  toDos.push(itemToAdd);
  console.log("todo har lagts in", toDos);
  printList();
  saveTodo();
  input.value = "";
}

// Lägga till nya saker i listan
addButton.addEventListener("click", addItemTolist);

function saveTodo() {
  let todoItem = JSON.stringify(toDos);
  localStorage.setItem("toDos", todoItem);
}

window.addEventListener("load", getFromLS);

function getFromLS() {
  if (localStorage.getItem("toDos") === null) {
    toDos = [];
  } else {
    toDos = JSON.parse(localStorage.getItem("toDos")).map((todoItem) => {
      return new Todo(todoItem.todoName, todoItem.completed);
    });
  }
  printList();
}

function deleteTodos() {
  toDos.remove();
}

ul.addEventListener("click", deleteTodos);