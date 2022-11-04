import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodosComponent } from './components/todos/todos.component';



@NgModule({
  declarations: [HomeComponent, TodoComponent, TodosComponent],
  imports: [
    CommonModule
  ]
})
export class TodosModule { }
