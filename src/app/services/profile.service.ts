import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Users } from '../users';
import { Repositories } from '../repositories';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  username: Users;
  repository: Repositories;

  constructor(private http: HttpClient) {
    console.log('Service is now ready');
    this.username = 'spgdaman';
  }

  getProfileInfo() {

    interface ApiResponse {
      avatar: string;
      login: string;
      name: string;
    }

    let promise = new Promise((resolve, reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl + this.username).toPromise().then(response=>{
        resolve()
      },
      error=>{

      })
    })

    return promise;
  }

  getRepoInfo() {

  }

 }
