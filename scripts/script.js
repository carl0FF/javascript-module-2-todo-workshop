let todos = [];

const createTodo = (text) => {
  todos.push(text);
};

document.querySelector("#new-todo").addEventListener("submit", (e) => {
  e.preventDefault();
  const text = e.target.elements.text.value.trim();

  if (text.length > 0) {
    createTodo(text);
    e.target.elements.text.value = "";
  }

  renderTodos(todos);
});

const generateTodoDOM = (todo) => {
  const todoEl = document.createElement("label");
  const containerEl = document.createElement("div");
  const todoText = document.createElement("span");

  // Setup the todo text
  todoText.textContent = todo;
  containerEl.appendChild(todoText);

  // Setup container
  todoEl.classList.add("list-item");
  containerEl.classList.add("list-item__container");
  todoEl.appendChild(containerEl);

  return todoEl;
};

const renderTodos = (todos) => {
  const todoList = document.querySelector("#todos");
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    todoList.appendChild(generateTodoDOM(todo));
  });
};
