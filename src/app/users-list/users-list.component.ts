import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  public users: Array<User> = [];
  constructor(private userSerivce: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userSerivce.usersListChange.subscribe((data: Array<User>) => {
      this.users = data;
    });
  }

  public addUser(): void {
    this.router.navigate(['/add-user']);
  }

  public editUser(user): void {
    this.router.navigate(['/edit-user'], { state: user });
  }

  public deleteUser(userId): void {
    const isConfirm = confirm('Are you sure!! Do you want to delete the user?');
    if (isConfirm) {
      this.userSerivce.deleteUser(userId);
    }
  }

  public onChange($event): void {
    const value = $event.target.value;
    this.userSerivce.searchUser(value);
  }
}
