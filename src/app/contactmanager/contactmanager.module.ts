import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { UserService } from './services/user.service';
import { NotesComponent } from './components/notes/notes.component';
import { NewContactDialogComponent } from './new-contact-dialog/new-contact-dialog.component';

// notice child routes
// see in ContactmanagerAppComponent - that has a side-nav that in turn has a router-outlet within it
const routes: Routes = [
  { path: '', component: ContactmanagerAppComponent,
    children: [
      { path: '', component: MainContentComponent },
      { path: ':id', component: MainContentComponent }
    ] },
  { path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [ContactmanagerAppComponent, ToolbarComponent, MainContentComponent, SideNavComponent, NotesComponent, NewContactDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    UserService
  ],
  entryComponents: [
    NewContactDialogComponent
  ]
})
export class ContactmanagerModule { }
