import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ServerService } from "../server.service";

@Component({
  selector: "app-newuserform",
  templateUrl: "./newuserform.component.html",
  styleUrls: ["./newuserform.component.css"]
})
export class NewuserformComponent implements OnInit {
  // first_name: string;
  // middle_name: string;
  // last_name: string;
  // email: string;
  // password: string;
  // confpassword: string;
  userData: any;
  id: string;
  constructor(public postService: ServerService) {}
  ngOnInit() {
    this.getdata();
  }

  getdata() {
    this.postService.getproducts().subscribe(data => (this.userData = data));
    if (this.userData == undefined) {
    } else {
      console.log(this.userData.response);
    }
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

      this.postService.addPost(data).then(res => {
        console.log(res);
      });
      this.getdata();
    }
  }
    // updateuserdata(id){
    //   this.postService.updateUser(id);
    //   // .then(res => { console.log(id);});
    // }
    updateuserdata(id){
      console.log(id);
    }

    deleteuserdata(id){
      console.log(id);
    }

  //for data deletion

  // deleteProduct = function(_id) {
  //   if(confirm("Are you sure?")) {
  //     const url = `${"http://localhost:7000/test/getuserdata"}/${id}`;
  //     return this.http.delete(url).toPromise()
  //       .then(() => {
  //         this.getdata();
  //       })
  //   }
  // }
}
