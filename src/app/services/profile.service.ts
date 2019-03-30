import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Users } from '../users';
import { Repositories } from '../repositories';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  username: Users;
  repository: Repositories;

  constructor(private http: Http) {
    console.log("Service is now ready");
    this.username = 'spgdaman';
  }

  getProfileInfo() {

    interface ApiResponse {
      avatar: string;
      login: string;
      name: string;
    }
    return this.http.get("https://api.github.com/users/" + this.username)
    .map(res => res.json());
  }
}
