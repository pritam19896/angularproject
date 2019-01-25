import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ServerService } from "../server.service";
@Component({
  selector: "app-newuserform",
  templateUrl: "./newuserform.component.html",
  styleUrls: ["./newuserform.component.css"]
})
export class NewuserformComponent {
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  password: string;
  confpassword: string;
  userdata: any=[];

  constructor(public postService: ServerService) {}
  getdata() {
    this.userdata=this.postService.getproducts()
    // .then(res => {console.log(res);});
    console.log(this.userdata);
  }

  onAddPost(form: NgForm) {
    if (form.invalid) {
      alert("invalid form");
      return;
    } else {
      var data = {
        first_name: form.value.first_name,
        middle_name: form.value.middle_name,
        last_name: form.value.last_name,
        email: form.value.email,
        password: form.value.password
      };

      form.resetForm();

      this.postService
        .addPost(data)
        .then(res => {
          console.log(res);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
}
