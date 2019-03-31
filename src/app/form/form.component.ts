import { Component, OnInit } from '@angular/core';
import { Users } from './users';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newUsername = new Users('');

  constructor() { }

  ngOnInit() {
  }

}
