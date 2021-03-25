import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UsernameService } from '../shared/username.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-form-code',
  templateUrl: './form-code.component.html',
  styleUrls: ['./form-code.component.css'],
})
export class FormCodeComponent implements OnInit {
  userForm: FormGroup;
  passwordForm: FormGroup;
  usernameCtrl: FormControl;
  passwordCtrl: FormControl;
  confirmCtrl: FormControl;
  birthdayCtrl: FormControl;

  constructor(
    private fb: FormBuilder,
    private usernameService: UsernameService
  ) {}

  static isOldEnough(control: FormControl) {
    const birthDatePlus18 = new Date(control.value);
    birthDatePlus18.setFullYear(birthDatePlus18.getFullYear() + 18);
    return birthDatePlus18 < new Date() ? null : { tooYoung: true };
  }

  static passwordMatch(group: FormGroup) {
    const password = group.get('password').value;
    const confirm = group.get('confirm').value;
    return password === confirm ? null : { matchingError: true };
  }

  isUsernameAvailable(control: AbstractControl) {
    const username = control.value;

    return this.usernameService
      .isUsernameAvailable(username)
      .pipe(map((available) => (available ? null : { alreadyUsed: true })))
      .subscribe((error) => {
        console.log('error', error);
        return error;
      });
  }

  ngOnInit(): void {
    this.usernameCtrl = this.fb.control('', [
      Validators.required,
      Validators.minLength(3),
      (control) => this.isUsernameAvailable(control),
    ]);

    this.passwordCtrl = this.fb.control('', Validators.required);

    this.confirmCtrl = this.fb.control('', Validators.required);

    this.birthdayCtrl = this.fb.control('', [
      Validators.required,
      FormCodeComponent.isOldEnough,
    ]);

    this.passwordForm = this.fb.group(
      {
        password: this.passwordCtrl,
        confirm: this.confirmCtrl,
      },
      {
        validator: FormCodeComponent.passwordMatch,
      }
    );

    this.userForm = this.fb.group({
      username: this.usernameCtrl,
      passwordForm: this.passwordForm,
      birthday: this.birthdayCtrl,
    });
  }

  register() {
    console.log(this.userForm.value);
  }
}
