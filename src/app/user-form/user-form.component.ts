import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  submitted = false;
  userData = {
    name: '',
    email: '',
    password: ''
  };

  onSubmit(form: any) {
    this.submitted = true;
    this.userData = form.value;
    console.log(this.userData);
  }
}

