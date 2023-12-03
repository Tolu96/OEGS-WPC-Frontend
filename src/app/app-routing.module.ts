import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TimeManagementComponent } from './time-management/time-management.component';
import { AbsenceManagementComponent } from './absence-management/absence-management.component';
import { UserComponent } from './user/user.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path:'',
        component: DashboardComponent,
      },
      {
        path:'zeiterfassung',
        component: TimeManagementComponent,
      },
      {
        path:'abwesenheit',
        component: AbsenceManagementComponent,
      },
      {
        path:'benutzer',
        component: UserComponent,
      },
      {
        path:'einstellungen',
        component: SettingsComponent,
      },
      {
        path:'**',
        redirectTo: ''
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
