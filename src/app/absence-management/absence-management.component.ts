import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, Subscribable } from 'rxjs';
import { formatDate } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { HelpPopupComponent } from '../help-popup/help-popup.component';

@Component({
  selector: 'app-absence-management',
  templateUrl: './absence-management.component.html',
  styleUrls: ['./absence-management.component.scss']
})
export class AbsenceManagementComponent {
  
  selected: Date = new Date();
  

}
