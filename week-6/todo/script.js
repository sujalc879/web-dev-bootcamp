let count = 0;

function addTodo() {
    const element = document.getElementById("todoInput");
    const Todo = element.value;

    const listEl = document.createElement("li");

    const spanEl = document.createElement("span");
    spanEl.innerHTML = Todo;
    listEl.appendChild(spanEl);

    const buttonEl = document.createElement("button");
    buttonEl.innerHTML = "Delete Todo";
    buttonEl.id = `${count}`;
    buttonEl.onclick = (e) => deleteTodo(e);
    listEl.appendChild(buttonEl);


    const olEl = document.getElementById("todos");
    olEl.appendChild(listEl);

    element.value = "";
    count++;
}


function deleteTodo(e) {
    const deleteEl = e.target.parentElement;
    deleteEl.remove();
    
}