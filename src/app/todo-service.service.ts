import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from "./todo";

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private http: HttpClient) { }
  public getTodo(){
  return   this.http.get('http://127.0.0.1:8000/api/todos');
  }
  public updateTodo(id: number, todo: Todo){
    return this.http.put('http://127.0.0.1:8000/api/todos/' + id.toString(), todo);
  }
  public CreateTodo(todo: Todo){
    return this.http.post('http://127.0.0.1:8000/api/todos', todo);
  }
  public deleteTodo(id: number){
    return this.http.delete('http://127.0.0.1:8000/api/todos/' + id.toString());
  }
}
