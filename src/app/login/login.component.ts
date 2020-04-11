import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
f: FormGroup;
  constructor(   private formBuilder: FormBuilder,
                 private router: Router,
                 ) { }

  ngOnInit(): void {
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
this.router.navigateByUrl('home');
    }
  }
}
