import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';

import { NewContactDialogComponent } from '../../new-contact-dialog/new-contact-dialog.component';
import { User } from '../../models/user';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(
    private _dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _router: Router) { }

  ngOnInit() {
  }

  openAddContactDialog() {
    let dialogRef = this._dialog.open(NewContactDialogComponent, { width: '400px' });

    dialogRef.afterClosed().subscribe((result: User) => {
      console.log('The dialog was closed', result);

      if (result) {
        this._snackBar.open("Contact added", "Navigate", { duration: 5000 })
          .onAction().subscribe(() => {
            this._router.navigate(['/contactmanager', result.id]);
          })
      }
    });
  }
}
