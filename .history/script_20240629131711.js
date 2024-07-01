var allTodos = [];
function addTodo() {
  var inputs = document.getElementById('todo').value;
  if (inputs !== '') {
    allTodos.push(inputs);
    console.log(allTodos);
    document.getElementById('todo').value = '';
    displayTodo();
  } else {
    alert('Hey, fill something now');
  }
}

function displayTodo() {
  showFace.innerHTML = '';
  for (var i = 0; i < allTodos.length; i++) {
    showFace.innerHTML += `
                <h3> ${i + 1}. ${allTodos[i]}</h3>
                <button class='btnDelete' onclick="deleteTodo(${i})">Delete</button>
                <button class='btnEdit' onClick='editTodo(${i}) style="color: orangered">Edit</button>
            `;
  }
}

function deleteTodo(index) {
  // console.log(index);
  var asapu = confirm('Unimaginable bad things will happen o, are you sure?');
  // console.log(asapu);
  if (asapu == true) {
    allTodos.splice(index, 1);
    displayTodo();
  } else {
    displayTodo();
  }
}

function editTodo(index) {
  // console.log(index);
  var asapu;
  asapu = confirm('Unimaginable bad things will happen o, are you sure?');
  // console.log(asapu);
  if (asapu == true) {
    allTodos.splice(index, 1);
    displayTodo();
  } else {
    displayTodo();
  }
}
