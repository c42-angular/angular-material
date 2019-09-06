import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _users: BehaviorSubject<User[]>;
  private dataStore: {
    users: User[]
  };

  constructor(private http: HttpClient) {
    this.dataStore = {
      users: []
    };

    this._users = new BehaviorSubject<User[]>([]);
  }

  get users(): Observable<User[]> {
    return this._users.asObservable();
  }

  loadAll() {
    const usersUrl = 'https://angular-material-api.azurewebsites.net/users';

    return this.http.get<User[]>(usersUrl)
      .subscribe(data => {
        this.dataStore.users = data;
        this._users.next(Object.assign({}, this.dataStore).users);
      }
        , err => console.error('Failed to fetch users'));
  }

  getUser(userId: number) {
    return this.dataStore.users.find(u => u.id == userId);
  }
}
