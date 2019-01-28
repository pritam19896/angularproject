import { Userdata } from './newuserform/userdata';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class ServerService {
  constructor(private http: HttpClient) {}

  addPost(val) {
    var url = "http://localhost:7000/test/postuserdata";

    console.log(val);
    return this.http.post(url, val).toPromise();

    // .then(res => {res.json(val)});
    // 0 requests made - .subscribe() not called.
  }

  getproducts():Observable<Userdata[]> {
    return this.http
      .get<Userdata[]>("http://localhost:7000/test/getuserdata");
      // .toPromise()
      // .then(res => res.json());


     }
}
