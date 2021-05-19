import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private allUsersList: Array<User> = [
    {
      id: '0F8JIqi4zwvb77FGz6Wt',
      lastName: 'Fiedler',
      firstName: 'Heinz-Georg',
      email: 'heinz-georg.fiedler@example.com',
      title: 'Mr',
      imageUrl: 'https://randomuser.me/api/portraits/men/81.jpg',
    },
    {
      id: '0P6E1d4nr0L1ntW8cjGU',
      imageUrl: 'https://randomuser.me/api/portraits/women/74.jpg',
      lastName: 'Hughes',
      email: 'katie.hughes@example.com',
      title: 'Miss',
      firstName: 'Katie',
    },
    {
      id: '1Lkk06cOUCkiAsUXFLMN',
      title: 'Mr',
      lastName: 'Aasland',
      firstName: 'Vetle',
      imageUrl: 'https://randomuser.me/api/portraits/men/97.jpg',
      email: 'vetle.aasland@example.com',
    },
    {
      id: '1OuR3CWOEsfISTpFxsG7',
      imageUrl: 'https://randomuser.me/api/portraits/men/66.jpg',
      lastName: 'Vasquez',
      email: 'dylan.vasquez@example.com',
      title: 'Mr',
      firstName: 'Dylan',
    },
    {
      id: '1pRsh5nXDIH3pjEOZ17A',
      lastName: 'Vicente',
      title: 'Miss',
      firstName: 'Margarita',
      email: 'margarita.vicente@example.com',
      imageUrl: 'https://randomuser.me/api/portraits/women/5.jpg',
    },
    {
      id: '3JAf8R85oIlxXd58Piqk',
      email: 'joey.oliver@example.com',
      title: 'Mr',
      firstName: 'Joey',
      lastName: 'Oliver',
      imageUrl: 'https://randomuser.me/api/portraits/men/61.jpg',
    },
    {
      id: '5aZRSdkcBOM6j3lkWEoP',
      imageUrl: 'https://randomuser.me/api/portraits/women/50.jpg',
      email: 'lilja.lampinen@example.com',
      lastName: 'Lampinen',
      firstName: 'Lilja',
      title: 'Ms',
    },
    {
      id: '5tVxgsqPCjv2Ul5Rc7gw',
      email: 'abigail.liu@example.com',
      lastName: 'Liu',
      title: 'Miss',
      imageUrl: 'https://randomuser.me/api/portraits/women/83.jpg',
      firstName: 'Abigail',
    },
    {
      id: '6wy6UNkZueJfIUfq88d5',
      imageUrl: 'https://randomuser.me/api/portraits/women/32.jpg',
      firstName: 'Melanie',
      email: 'melanie.pilz@example.com',
      title: 'Miss',
      lastName: 'Pilz',
    },
    {
      id: '7DbXNPWlNDR4QYVvFZjr',
      email: 'evan.carlson@example.com',
      firstName: 'Evan',
      imageUrl: 'https://randomuser.me/api/portraits/men/80.jpg',
      lastName: 'Carlson',
      title: 'Mr',
    },
  ];
  private usersList: Array<User> = this.allUsersList;

  public usersListChange: BehaviorSubject<Array<User>> = new BehaviorSubject<
    Array<User>
  >(this.usersList);

  public addUser(user) {
    this.allUsersList.push(user);
    this.usersListChange.next(this.usersList);
  }

  public editUser(user) {
    const index = this.usersList.findIndex((x) => x.id === user.id);
    this.allUsersList[index] = user;
    this.usersListChange.next(this.usersList);
  }

  public deleteUser(userId) {
    const index = this.usersList.findIndex((user) => user.id === userId);
    this.allUsersList.splice(index, 1);
    this.usersListChange.next(this.usersList);
  }

  public searchUser(searchInput) {
    this.usersList = this.allUsersList.filter(user => user.firstName.toLowerCase().includes(searchInput.toLowerCase()) || user.lastName.toLowerCase().includes(searchInput.toLowerCase()) )
    this.usersListChange.next(this.usersList);
  }
}
