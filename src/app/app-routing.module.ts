import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingInComponent } from './features/sing-in/sing-in.component';
import { HomeComponent } from './features/home/home.component';
import { AuthGuardService } from './core/auth-guard.service';
import { TestComponent } from './features/test/test.component';

const routes: Routes = [
  { path: 'sing-in', component: SingInComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'test', component: TestComponent, canActivate: [AuthGuardService] },
  { path: 'people', loadChildren: () => import('./features/people/people.module').then(m => m.PeopleModule), canActivate: [AuthGuardService] },
  { path: 'jobs', loadChildren: () => import('./features/jobs/jobs.module').then(m => m.JobsModule), canActivate: [AuthGuardService] },
  { path: '**', component: HomeComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
