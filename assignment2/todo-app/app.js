// print out text in todo form
// add new todo
// clear the todo form
// once checkbox is ticked, remove the finished todo
// if reset button is clicked, remove all todos

const todoWrapper = document.querySelector(".todo-items-wrapper")
const todoForm = document.querySelector(".todo-form")
const todoItems = document.querySelector("#todo-items")
const todoInput = document.getElementById("todo-input")
const resetButton = document.querySelector(".btn")

todoForm.addEventListener("submit", addTodo)

function addTodo(e) {
    //to prevent it from reloading the page
    e.preventDefault();

    // get id
    const id = todoItems.children.length + 1
    console.log(id)

    //get value
    let text = todoInput.value
    console.log(text)
    if(!text) return

    const newTodo = `
    <div class="todo-item">
                    <div class="checkbox">
                        <div class="check-mark" onclick = "completeTodo(${id})">
                            <img src="./images/icon-check.svg" alt="">
                        </div>
                        <div class="close-mark" onclick = "deleteTodo(${id})">
                            <img src="./images/icon-cross.svg" alt="">
                        </div>
                    </div>
                    <div class="todo-text">
                        ${text}
                    </div>
    `

    todoItems.innerHTML += newTodo
    todoItems.classList.add("wrapper-border")

    todoInput.value = ""

}

function findTodo(id) {
    return todoItems.children[id - 1]
}

// Feature: Complete & Undo Todo 
function completeTodo(id) {
   const todoItem = findTodo(id)

   let designatedChild = todoItem.lastElementChild
//    console.log(designatedChild)
   designatedChild.classList.toggle("done")

}


// Feature: Delete Todo

function deleteTodo(id) {
    const todoItem = findTodo(id) 

   todoItems.removeChild(todoItem)
  
   if(todoItems.childElementCount === 0) {
    todoItems.classList.remove("wrapper-border")
   }
}


// // Feature: Reset Todo
function resetTodo() {
    todoItems.remove()
    location.reload()
}

resetButton.addEventListener("click", resetTodo)