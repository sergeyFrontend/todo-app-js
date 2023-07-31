(function () {

   const todos = [];


  function createAppTitle(title) {
    let appTitle = document.createElement("h2");
    appTitle.innerHTML = title;

    return appTitle;
  }
  //
  function createTodoItemForm() {
    let form = document.createElement("form");
    let input = document.createElement("input");
    let buttonWrapper = document.createElement("div");
    let button = document.createElement("button");

    form.classList.add("input-group", "mb-3");
    input.classList.add("form-control");
    input.placeholder = " Введите название нового дела";
    buttonWrapper.classList.add("input-group-append");
    button.classList.add("btn", "btn-primary");
    button.textContent = "Добавить дело";
    button.disabled = true;

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);



    input.addEventListener('input',()=>{
      if(input.value !== '') {
        button.disabled = false;
      } else if (input.value === '') {
        button.disabled = true;
      }
    })




    return {
      form,
      input,
      button,
    };
  }
  //
  function createTodoList() {
    let list = document.createElement("ul");
    list.classList.add("list-group");

    return list;
  }
  //
  function createTodoItem(todo) {
    const item = document.createElement("li");
    const buttonGroup = document.createElement("div");
    const doneButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    item.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    item.textContent = todo.name;
    item.setAttribute('id',todo.id);
    item.setAttribute('done',todo.done)

    buttonGroup.classList.add("btn-group", "btn-group-sm");
    doneButton.classList.add("btn", "btn-success");
    doneButton.textContent = "Готово";

    deleteButton.classList.add("btn", "btn-danger");

    deleteButton.textContent = "Удалить";

    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    return {
      item,
      deleteButton,
      doneButton,
    };
  }

  function createTodoApp(container, title = "Список дел") {
    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    todoItemForm.form.addEventListener("submit", function (e) {

      const todos = [];

      e.preventDefault();

      if (!todoItemForm.input.value) {
        return;
      }

      let todoItem = createTodoItem({name:todoItemForm.input.value,id:Math.random()*5,done:false});
      todos.push(todoItem);





      todoItem.doneButton.addEventListener("click", function () {
        todoItem.item.classList.toggle("list-group-item-success");
      });

      todoItem.deleteButton.addEventListener("click", function () {
        if (confirm("Вы уверены?")) {
          todoItem.item.remove();

        }
      });


      todos.forEach((todo)=>{
        todoList.append(todo.item)
      })


      todoItemForm.input.value = "";
      todoItemForm.button.disabled = true;
    });

  }
  window.createTodoApp = createTodoApp;
})();

//
