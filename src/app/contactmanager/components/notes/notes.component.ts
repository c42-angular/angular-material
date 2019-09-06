import { Component, OnInit, Input, NgZone } from '@angular/core';

import { MatTableDataSource } from '@angular/material';

import { Note } from '../../models/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  
  // @Input() notes: Note[];

  displayedColumns: string[] = ['#', 'title', 'date'];
  dataSource: MatTableDataSource<Note>;
  
  constructor(private zone: NgZone) { }

  @Input()
  set notes(val: Note[]) {
    this.dataSource = new MatTableDataSource<Note>(val);
    console.log(`notes property set with: ${val}`);
  }

  ngOnInit() {
    console.log('ngOnInit() fired on NotesComponent')
    // // this.zone.run(() => this.dataSource = this.notes);
    // this.dataSource = new MatTableDataSource<Note>(this.notes);
    // console.log(`this.datasource: ${this.dataSource}`);
  }
}
