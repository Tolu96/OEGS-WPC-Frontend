import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AsyncPipe, NgIf } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { HelpPopupComponent } from '../help-popup/help-popup.component';

@Component({
  selector: 'app-app-sidenavigation',
  templateUrl: './app-sidenavigation.component.html',
  styleUrls: ['./app-sidenavigation.component.scss']
})
export class AppSidenavigationComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(private dialog:MatDialog){
  }

  Opendialog(){
   this.dialog.open(HelpPopupComponent,{
      width: '60%',
      height: '400px'
   });
  }
}
