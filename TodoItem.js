function id() {
  return Date.now().toString(16);
}

function TodoItem(text, deadline) {
  this.text = text;
  this.deadline = deadline;
  this.done = Date.now() > deadline;
}

TodoItem.Empty = function() {
  return new TodoItem('', new Date(0));
};

function TodoItemStorage() {
  this._todoItems = {};
}

TodoItemStorage.prototype.createTodoItem = function(text, deadline) {
  var newId = id();

  if (newId in this._todoItems) {
    return false;
  } else {
    var todoItem = new TodoItem(text, deadline);

    this._todoItems[newId] = todoItem;
    return true;
  }
};

TodoItemStorage.prototype.getTodoItem = function(todoId) {
  if (todoId in this._todoItems) {
  return this._todoItems[todoId];
  }else{
  return TodoItem.Empty();
  }
};
// todoId 를 통해 todoItem을 todoItems에서 가져와 반환, 없으면 빈 todoitem 반환.




