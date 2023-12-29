import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent {

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  ELEMENT_DATA: TimetableElement[] = [
    { position: 1, workside: 'Hydrogen', date: '22.01.23', starttime: 11.01, endtime: 18.01},
    { position: 2, workside: 'Helium', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 3, workside: 'Lithium', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 4, workside: 'Beryllium', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 5, workside: 'Boron', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 6, workside: 'Carbon', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 7, workside: 'Nitrogen', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 8, workside: 'Oxygen', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 9, workside: 'Fluorine', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 10, workside: 'Neon', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 11, workside: 'Sodium', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 12, workside: 'Magnesium', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 13, workside: 'Aluminum', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 14, workside: 'Silicon', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 15, workside: 'Phosphorus', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 16, workside: 'Sulfur', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 17, workside: 'Chlorine', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 18, workside: 'Argon', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 19, workside: 'Potassium', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 20, workside: 'Calcium', date: '22.01.23', starttime: 11.00, endtime: 18.00},
  ];

  displayedColumns: string[] = ['position', 'workside', 'date', 'starttime', 'endtime'];
  dataSource = new MatTableDataSource<TimetableElement>(this.ELEMENT_DATA);

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}

export interface TimetableElement {
  position: number;
  workside: string;
  date: string;
  starttime: number;
  endtime: number;
}

