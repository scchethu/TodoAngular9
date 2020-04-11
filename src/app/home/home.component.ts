import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Todo} from "../todo";
import {TodoServiceService} from "../todo-service.service";
import {ToastrService} from "ngx-toastr";
import {IError} from "../i-error";
import {InterceptorService} from "../interceptor.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, IError {
  private todo: FormControl;
  f: FormGroup;
  public todolist = new Array<Todo>();
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private todoservice: TodoServiceService,
    private toastr: ToastrService) {
   // this.todolist.push('hello');
  }
  showError(msg: string) {
    this.toastr.error(msg);
  }
  ngOnInit(): void {
    this.f = this.formBuilder.group(
      {
        todo: ['', Validators.required],
      }
    );
    this.todoservice.getTodo().subscribe((data: any) => {
     // alert(data);
      this.todolist = data;
    });

  }
  get fa(){return this.f.controls; }
addTodo()
{
// alert(this.fa.todo.value);
 const t = new Todo(null, this.fa.todo.value, new Date());
 this.todoservice.CreateTodo(t).subscribe((data: any) => {
   console.log(data);
   this.todolist = data;
  });
 this.fa.todo.setValue('');
}
deleteTodo(i: number){
  this.todoservice.deleteTodo(this.todolist[i].id).subscribe((data: any) => {
    console.log(data);
    this.todolist = data;
    this.toastr.success('Hello world!', 'Toastr fun!');
  });
}
toggleCheck(i: number){
    this.todolist[i].isChecked = !this.todolist[i].isChecked;
    this.todoservice.updateTodo(this.todolist[i].id, this.todolist[i]).subscribe((data: any) => {
    console.log(data);
    this.todolist = data;
  });
}
}
