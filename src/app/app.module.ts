import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppSidenavigationComponent } from './app-sidenavigation/app-sidenavigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TimeManagementComponent } from './time-management/time-management.component';
import { AbsenceManagementComponent } from './absence-management/absence-management.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { TimeformComponent } from './timeform/timeform.component';
import { AbsenceformComponent } from './absenceform/absenceform.component';
import { TimePopupComponent } from './time-popup/time-popup.component';
import { HelpPopupComponent } from './help-popup/help-popup.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { SettingsComponent } from './settings/settings.component';
import { BreaktimeManagementComponent } from './breaktime-management/breaktime-management.component';
import { BreaktimeformComponent } from './breaktimeform/breaktimeform.component';

@NgModule({
  declarations: [
    AppComponent,
    AppSidenavigationComponent,
    TimeManagementComponent,
    AbsenceManagementComponent,
    UserComponent,
    DashboardComponent,
    TimeformComponent,
    AbsenceformComponent,
    TimePopupComponent,
    HelpPopupComponent,
    SettingsComponent,
    BreaktimeManagementComponent,
    BreaktimeformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'de' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
