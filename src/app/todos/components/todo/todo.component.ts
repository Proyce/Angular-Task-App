import { Component, OnInit } from '@angular/core';
import { isContext } from 'vm';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  isChecked: boolean = false;
  constructor() { }



  ngOnInit() {
  }

  toggleChecked(){
    this.isChecked = !this.isChecked
    console.log(this.isChecked);
  }

}
