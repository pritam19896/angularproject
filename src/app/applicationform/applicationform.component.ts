// import { FormData } from "./applicationform.model";
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-applicationform",
  templateUrl: "./applicationform.component.html",
  styleUrls: ["./applicationform.component.css"]
})
export class ApplicationformComponent {
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  password: string;
  confpassword: string;

  // constructor(public posts:FormData) {}

  onAddPost(form: NgForm) {
    console.log(
      "name    : " +
        this.first_name +
        "  " +
        this.middle_name +
        "  " +
        this.last_name
    );
    console.log("email   : " + this.email);
    console.log("password: " + this.password);
  }
}
