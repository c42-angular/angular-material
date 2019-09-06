import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { MatSidenav } from '@angular/material';

import { UserService } from './../../services/user.service';
import { User } from '../../models/user';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @ViewChild(MatSidenav, {static: false}) 
  sidenav: MatSidenav;

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);
  users: Observable<User[]>;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.users = this.userService.users;
    this.userService.loadAll();

    this.router.events.subscribe(() => 
      {
        if (this.isScreenSmall()) this.sidenav.close();
      }
    );
    this.users.subscribe(data => console.log(data));
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }
}
