import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submit(): void {
    if (this.form.invalid) {
      Swal.fire("Error", "Please enter valid email and password", "error");
      return;
    }

    this.http.post<any>("http://localhost:3000/api/login", this.form.value, {
      withCredentials: true
    }).subscribe(
      (res) => {
        if (res.message === "success") {
          Swal.fire("Success", "Logged in successfully", 'success');
          this.router.navigate(['/']); // navigate to the desired route
        } else {
          Swal.fire("Error", "Login failed. Please try again.", 'error');
        }
      },
      (err) => {
        Swal.fire("Error", err.error.message || "An error occurred", 'error');
      }
    );
  }
}