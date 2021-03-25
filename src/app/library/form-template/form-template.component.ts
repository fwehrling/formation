import { Component, OnInit } from '@angular/core';

class User {
  username: string;
  password: string;
}

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css'],
})
export class FormTemplateComponent implements OnInit {
  user = new User();

  constructor() {}

  ngOnInit(): void {
    this.user.username = 'franck';
  }

  register() {
    console.log(this.user);
  }
}
