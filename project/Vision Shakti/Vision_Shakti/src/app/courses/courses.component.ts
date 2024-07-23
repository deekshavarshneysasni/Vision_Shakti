import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  name: string = "";
  email: string = "";
  mobile: string = "";
  password: string = "";
  course: string = "";
  message: string = "";

  constructor(private http: HttpClient, private router: Router) {} // Inject Router here

  // Email Validation
  ValidateEmail = (email: any) => {
    var validRegex = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$"; // Corrected regex
    return email.match(validRegex) ? true : false;
  };

  save(): void {
    if (!this.name || !this.email || !this.mobile || !this.password || !this.course || !this.message) {
      Swal.fire("Error", "Please enter all the fields", "error");
      return; // Return here to prevent further execution
    } else if (!this.ValidateEmail(this.email)) {
      Swal.fire("Error", "Please enter a valid email", "error");
      return; // Return here to prevent further execution
    }

    let user = {
      name: this.name,
      email: this.email,
      mobile: this.mobile,
      password: this.password,
      course: this.course,
      message: this.message
    };

    // Fix the missing comma in the http.post call
    this.http.post("http://localhost:3000/api/courses", user, { withCredentials: true })
      .subscribe(
        () =>{
          console.log('Registeration successful');
         this.router.navigate(['/login']); // Use router here
        },
        (err)=>{ Swal.fire("Error", err.error.message, "error");
  });
  }
}
