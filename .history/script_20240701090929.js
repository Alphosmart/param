'use strict';

var allTodos = [];

// Get the display area
function addTodo() {
  var inputs = document.getElementById('todo').value;
  if (inputs !== '') {
    allTodos.push(inputs);
    console.log(allTodos);
    document.getElementById('todo').value = '';
    displayTodo();
  } else {
    alert('Please enter something.');
  }
}

// Display Todo
function displayTodo() {
  showFace.innerHTML = '';
  for (var i = 0; i < allTodos.length; i++) {
    showFace.innerHTML += `
      <h3>${i + 1}. ${allTodos[i]}</h3>
      <button class='btnDelete' onclick="deleteTodo(${i})">Delete</button>
      <button onclick="editTodo(${i})" style="color: orangered">Edit</button>
    `;
  }
}

// Delete Todo
function deleteTodo(index) {
  var confirmDelete = confirm('Are you sure you want to delete this item?');
  if (confirmDelete) {
    allTodos.splice(index, 1);
    displayTodo();
  }
}

// Edit Todo
function editTodo(index) {
  var newTodo = prompt('Edit your todo:', allTodos[index]);
  if (newTodo !== null && newTodo !== '') {
    allTodos[index] = newTodo;
    displayTodo();
  } else if (newTodo === '') {
    alert('The input cannot be empty.');
  }
}
