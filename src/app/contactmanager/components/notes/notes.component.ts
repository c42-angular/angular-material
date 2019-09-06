import { Component, Input } from '@angular/core';

import { Note } from '../../models/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  
  // @Input() notes: Note[];

  displayedColumns: string[] = ['#', 'title', 'date'];
  dataSource: Note[] = [];
  
  constructor() { }

  @Input()
  set notes(val: Note[]) {
    this.dataSource = val;
    console.log(`notes property set with: ${val}`);
  }
}
