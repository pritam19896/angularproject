import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-loginform",
  templateUrl: "./loginform.component.html",
  styleUrls: ["./loginform.component.css"]
})
export class LoginformComponent {
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  password: string;
  confpassword: string;

  // constructor(public posts:FormData) {}

  onAddPost(form: NgForm) {
    console.log("email   : " + this.email);
    console.log("password: " + this.password);
  }
}
