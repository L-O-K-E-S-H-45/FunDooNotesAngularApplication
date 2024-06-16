import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  todo: any;
  TodoList: any = ['Eat', 'Play', 'Study'];
  todos: {
    title: string,
    isEditing: boolean
  }[] = [];

  editableTodo: any;

  addTodo() {
    if (this.todo !== '' && this.todo.trim() !== '') {
      this.TodoList.push(this.todo);
      this.todo = '';
      this.todos.push(this.todo);
    }
    else {
      alert('todo cannot t be empty')
    }
  }

  editTodo(index: any) {
    let updatedTodo = prompt('Edit Todo:', this.TodoList[index])
    if (updatedTodo !== '') {
      this.TodoList[index] = updatedTodo;
    }
    else {
      alert('todo cannot t be empty')
    }
  }


  // 2nd way of editing
  edit(todo: any) {
    todo.isEditing = true;
  }

  save(todo: any) {
    console.log(todo)
    this.editableTodo = todo;
    if (this.todo !== '' && this.todo.trim() !== '') {
      this.todo.push(todo);
      this.todo.isEditing = false;
    }
  }

  deleteTodo(index: any) {
    this.TodoList.splice(index, 1);
  }

}
