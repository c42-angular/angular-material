import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';

import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import { Note } from '../../models/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements AfterViewInit {

  @ViewChild(MatPaginator, { static: true }) matPaginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) matSort: MatSort;

  displayedColumns: string[] = ['#', 'title', 'date'];
  dataSource: MatTableDataSource<Note>;

  constructor() { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.matPaginator;
    this.dataSource.sort = this.matSort;
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
