import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers:[ProfileService],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userInfo: any;
  repoInfo: any;

  constructor(profileData: ProfileService) {
    this.userInfo = profileData.getProfileInfo();
  }

  ngOnInit() {
  }

}
