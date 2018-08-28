import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodosComponent } from './components/todos/todos.component';
import { FormTodoComponent } from './components/form-todo/form-todo.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'addtodo', component: FormTodoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodosComponent,
    FormTodoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
