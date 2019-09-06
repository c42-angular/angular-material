import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  user: User;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    const userId = this.route.snapshot.params['id'];
    console.log(`The user id passed is: ${userId}`);
    this.getUser(userId);

    this.route.params.subscribe(
      nextId => {
        const userId = this.route.snapshot.params['id'];
        console.log(`The next user id passed is: ${userId}`);
        this.getUser(userId);
      }
    );
  }

  getUser(id: number) {
    this.user = this.userService.getUser(id);
    console.log(this.user);
  }
}
