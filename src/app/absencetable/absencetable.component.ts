import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-absencetable',
  templateUrl: './absencetable.component.html',
  styleUrls: ['./absencetable.component.scss']
})
export class AbsencetableComponent {

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  ELEMENT_DATA: AbsencetableElement[] = [
    { position: 1, absence: 'Krankheit', date: '22.01.23', starttime: 11.01, endtime: 18.01},
    { position: 2, absence: 'Urlaub', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 3, absence: 'Krankheit', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 4, absence: 'Krankheit', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 5, absence: 'Urlaub', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 6, absence: 'Krankheit', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 7, absence: 'Urlaub', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 8, absence: 'Urlaub', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 9, absence: 'Krankheit', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 10, absence: 'Urlaub', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 11, absence: 'Krankheit', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 12, absence: 'Krankheit', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 13, absence: 'Krankheit', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 14, absence: 'Urlaub', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 15, absence: 'Urlaub', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 16, absence: 'Urlaub', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 17, absence: 'Krankheit', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 18, absence: 'Urlaub', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 19, absence: 'Krankheit', date: '22.01.23', starttime: 11.00, endtime: 18.00},
    { position: 20, absence: 'Krankheit', date: '22.01.23', starttime: 11.00, endtime: 18.00},
  ];

  displayedColumns: string[] = ['position', 'date', 'absence', 'starttime', 'endtime'];
  dataSource = new MatTableDataSource<AbsencetableElement>(this.ELEMENT_DATA);

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}

export interface AbsencetableElement {
  position: number;
  absence: string;
  date: string;
  starttime: number;
  endtime: number;
}
