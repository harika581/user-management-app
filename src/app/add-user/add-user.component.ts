import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})

export class AddUserComponent implements OnInit {
  public userForm: FormGroup;
  public isEdit: boolean;
  private userData: any;
  constructor(
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.userData = this.router.getCurrentNavigation().extras.state;
      this.isEdit = true;
    } else {
      this.isEdit = false;
    }
  }

  public ngOnInit(): void {
    if (this.isEdit) {
      this.userForm = this.formBuilder.group({
        id: [this.userData.id],
        title: [this.userData.title, Validators.required],
        firstName: [this.userData.firstName, Validators.required],
        lastName: [this.userData.lastName, Validators.required],
        email: [this.userData.email, Validators.required],
        imageUrl: [this.userData.imageUrl, Validators.required],
      });
    } else {
      this.userForm = this.formBuilder.group({
        id: [new Date().getTime()],
        title: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        imageUrl: ['', Validators.required],
      });
    }
  }

  public saveUser(): void {
    if(this.userForm.invalid) return;
    if (this.isEdit) {
      this.userService.editUser(this.userForm.value);
      this.router.navigate(['/']);
    } else {
      this.userService.addUser(this.userForm.value);
      this.router.navigate(['/']);
    }
  }

  public back(): void {
    this.router.navigate(['/']);
  }
}
