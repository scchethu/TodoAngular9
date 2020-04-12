import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Todo} from "./todo";

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
     this.headers = new HttpHeaders();
    this.headers.set('Content-Type', 'application/json');
    this.headers = this.headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
        }
  public getTodo(){
  return   this.http.get('http://127.0.0.1:8000/api/todos', { headers: this.headers});
  }
  public updateTodo(id: number, todo: Todo){
    return this.http.put('http://127.0.0.1:8000/api/todos/' + id.toString(), todo, { headers: this.headers});
  }
  public CreateTodo(todo: Todo){
    return this.http.post('http://127.0.0.1:8000/api/todos', todo, { headers: this.headers});
  }
  public deleteTodo(id: number){
    return this.http.delete('http://127.0.0.1:8000/api/todos/' + id.toString(), { headers: this.headers});
  }
  public auth(usernme: string, password: string){
    return this.http.post('http://127.0.0.1:8000/api/login', {email: usernme, password});
  }
}
