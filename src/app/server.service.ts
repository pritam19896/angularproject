import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
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

  getproducts() {
    return this.http
      .get("http://localhost:7000/test/getuserdata").map(res => res.json() );
      // .toPromise()
      // .then(res => res.json());


     }
}
