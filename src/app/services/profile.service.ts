import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;

  constructor(private http: Http) {
    console.log("Service is now ready");
    this.username = 'spgdaman';
  }

  getProfileInfo() {
    return this.http.get("https://api.github.com/users/" + this.username)
    .map(res => res.json());
  }
}
