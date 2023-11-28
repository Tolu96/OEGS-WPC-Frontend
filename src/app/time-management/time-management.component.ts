import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscribable } from 'rxjs';
import { TimePopupComponent } from '../time-popup/time-popup.component';

@Component({
  selector: 'app-time-management',
  templateUrl: './time-management.component.html',
  styleUrls: ['./time-management.component.scss']
})
export class TimeManagementComponent {
  selected: Date = new Date();

  constructor(private dialog:MatDialog) {   
  }
  Opendialog(){
    this.dialog.open(TimePopupComponent,{
      width: '60%',
      height: '800px'
    })
  }
}
