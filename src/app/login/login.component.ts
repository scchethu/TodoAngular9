import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {TodoServiceService} from "../todo-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
f: FormGroup;
  constructor(   private formBuilder: FormBuilder,
                 private router: Router,
                 private todoservice: TodoServiceService
                 ) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null)
    {
      this.router.navigateByUrl('home');
    }
    this.f = this.formBuilder.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required]
      }
    );
  }
  get fa(){return this.f.controls; }
  submit(): void {
    if (!this.f.invalid ) {
     // alert(this.fa.username.value);
      this.todoservice.auth(this.fa.username.value, this.fa.password.value).subscribe((data: any) => {
        localStorage.setItem('token', data.success.token);
        this.router.navigateByUrl('home');
      });

    }
  }
}
