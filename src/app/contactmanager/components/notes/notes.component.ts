import { Component, Input, ViewChild, OnInit } from '@angular/core';

import { MatTableDataSource, MatPaginator } from '@angular/material';

import { Note } from '../../models/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) matPaginator: MatPaginator;

  displayedColumns: string[] = ['#', 'title', 'date'];
  dataSource: MatTableDataSource<Note>;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.matPaginator;
  }

  @Input()
  set notes(val: Note[]) {
    this.dataSource = new MatTableDataSource<Note>(val);
    console.log(`notes property set with: ${val}`);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
