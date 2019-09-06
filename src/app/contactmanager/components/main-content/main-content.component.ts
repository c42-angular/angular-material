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
    this.route.params.subscribe(
      params => {
        let userId = params['id'];
        
        console.log(`The next user id passed is: ${userId}`);
        this.userService.users.subscribe(allUsers =>
          {
            if (!allUsers || allUsers.length == 0) return;
            
            if (!userId) userId = allUsers[0].id; // if no id is selected choose first user

            this.getUser(userId);
          });        
      }
    );
  }

  getUser(id: number) {
    this.user = this.userService.getUser(id);
    console.log(`User is: ${this.user}`);
  }
}
