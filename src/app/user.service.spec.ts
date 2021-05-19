import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should add user when addUser called', () => {
    const userListChangeSpy = spyOn(service.usersListChange, 'next');
    service.addUser({
      id: new Date().getTime(),
      title: 'Mr',
      firstName: 'first',
      lastName: 'last',
      email: 'test@email.com',
      imageUrl: 'imageurl.com',
    });
    expect(userListChangeSpy).toHaveBeenCalledTimes(1);
  });
  it('should edit user when addUser called', () => {
    const userListChangeSpy = spyOn(service.usersListChange, 'next');
    service.editUser({
      id: "0F8JIqi4zwvb77FGz6Wt",
      title: 'Mr',
      firstName: 'first',
      lastName: 'last',
      email: 'test@email.com',
      imageUrl: 'imageurl.com',
    });
    expect(userListChangeSpy).toHaveBeenCalledTimes(1);
  });

  it('should search for user when search function called', () => {
    const userListChangeSpy = spyOn(service.usersListChange, 'next');
    service.deleteUser('0F8JIqi4zwvb77FGz6Wt');
    expect(userListChangeSpy).toHaveBeenCalledTimes(1);
  });
  it('should delete user when userId is passed', () => {
    const userListChangeSpy = spyOn(service.usersListChange, 'next');
    service.searchUser('first');
    expect(userListChangeSpy).toHaveBeenCalledTimes(1);
  });
});
