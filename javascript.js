const token = ""; //Your unique authorization token

/**
 * Function that should add a TODO HTML block to the DOM using
 * the appropriate data from the form when the form is submitted
 * and call the API to update the server
 * @param event form submit event
 */
function addToDo(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  var object = {};
  formData.forEach(function (value, key) {
    object[key] = value;
  });

  createToDo(object.title, object.description);
}

/**
 * Creates and returns an HTML element representing a TODO
 * item that can be added to the DOM
 * @param {string} title
 * @param {string} description
 * @param {int} id
 * @returns HTML element
 */
function createElement(title, description, id) {
  var mainDiv = document.createElement("div");
  mainDiv.classList.add("todo");
  mainDiv.addEventListener("click", (event) => {
    toggleToDo(event, id);
  });
  mainDiv.innerHTML = `
        <div class="loader"></div>
        <div class="todo-header">
            <h2></h2>
            <button aria-label="delete item" onClick="removeToDo(event, ${id})">
            X
          </button>
        </div>
        <div class="todo-description">
           
        </div>`;
  mainDiv.getElementsByTagName("h2")[0].innerText = title;
  mainDiv.getElementsByClassName("todo-description")[0].innerText = description;
  return mainDiv;
}

/**
 * Method to add a class that marks the TODO as
 * completed, ie greyed out when TODO block is clicked. If
 * block is already completed (ie clicked before), then it
 * should call the API to update the TODO item and then remove
 * the class.
 * @param event the onclick event
 */
function toggleToDo(event, id) {
  let targetElement = getRootElement(event.currentTarget);
  if (targetElement.classList.contains("completed")) {
    updateToDo(targetElement, id, false);
  } else {
    updateToDo(targetElement, id, true);
  }
}

/**
 * Function to remove a TODO block from the HTML when the 'X' button is clicked
 * and makes a DELETE API call to the server to delete the remote version
 * @param event the onclick event
 * @param id the id of the TODO item to remove
 */
function removeToDo(event, id) {
  event.preventDefault();
  event.stopPropagation();
  let todoElement = getRootElement(event.currentTarget);
  deleteToDo(todoElement, id);
}

/**
 * Function that gets the main div of a TODO block, denoted by the 'todo' class
 * Not recommended to change this method.
 * @param element the element to start searching from
 * @returns TODO block element or null
 */
function getRootElement(element) {
  let targetElement = element;
  while (targetElement && !targetElement.classList.contains("todo")) {
    targetElement = targetElement.parent
      ? targetElement.parent
      : targetElement.parentElement;
  }
  return targetElement;
}

/**
 * Get the list of TODOs from the server and displays them on the page
 * Should be called on page load
 */
function getToDos() {
  const req = new XMLHttpRequest(); //Create a new request

  //Create a function that will run when the API call is finished
  req.addEventListener("load", (event) => {
    let todoList = JSON.parse(event.target.response); //Parse the text data into a JavaScript object
    let container = document.getElementById("todo-container");

    //Create a TODO item for each item in the API response
    todoList.forEach((todo) => {
      let element = createElement(todo.title, todo.description, todo.id);
      if (todo.completed) {
        element.classList.add("completed");
      }
      container.appendChild(element); //Add the item to the page (DOM)
    });
  });

  req.open("GET", "https://todo.ctkraleigh.com/api/todos"); //Specify the HTTP method and url to make the API call to
  req.setRequestHeader("Authorization", `Bearer ${token}`); //Add the authorization header. Requests without this will be rejected
  req.setRequestHeader("content-type", "application/json"); //Add the content type header to specify what type of response format we want
  req.send();
}

/**
 * Makes an API call to create a TODO item then adds it to the DOM
 * TODO item should be loading until the API call is complete
 * @param {string} title
 * @param {string} description
 */
function createToDo(title, description) {
  //Your code here
}

/**
 * Deletes a TODO item by making a DELETE API call to the server
 * and removing the element after the call completes. Element should
 * be loading until the API call completes
 * @param {HTMLElement} element the element to delete
 * @param {int} id the id of the element to delete on the server
 */
function deleteToDo(element, id) {
  //Your code here
}

/**
 * Marks the specified TODO item as completed or not completed
 * depending on the isCompleted parameter. Ie, if isCompleted = true
 * then is should mark the item as completed, and vice versa by
 * making a PUT API call to the server with the appropriate body
 * and adding or removing the completed class
 * @param {HTMLElement} element the element to update
 * @param {int} id the id of the item on the server to update
 * @param {Boolean} isCompleted whether to mark the element as completed or not
 */
function updateToDo(element, id, isCompleted) {
  //Your code here
}

getToDos();
