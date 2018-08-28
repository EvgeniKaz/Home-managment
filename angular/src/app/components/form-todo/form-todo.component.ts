import { Component, OnInit } from '@angular/core';

import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-form-todo',
  templateUrl: './form-todo.component.html',
  styleUrls: ['./form-todo.component.css']
})
export class FormTodoComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  addTodo(text, name) {
    if (!text || !name) {
      alert('Plaese add post');
    } else {
      const date = new Date();
      this.todoService.postTodo({ text, name, date }).subscribe((todo) => {
        console.log(todo);
      });
    }
  }

}
