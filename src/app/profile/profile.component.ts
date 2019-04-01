import { Component, OnInit } from '@angular/core';
//import { FormComponent } from '/../form/form';
// import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  // providers: [ProfileService],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {



  userInfo: any;
  repoInfo: any;

  // constructor(githubData: ProfileService) {
  //   this.userInfo = githubData.getProfileInfo();
  //   this.repoInfo = githubData.getRepoInfo();
  // }

  ngOnInit() {
  }

}
