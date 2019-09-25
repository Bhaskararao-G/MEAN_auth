import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { WorkersComponent } from './pages/workers/workers.component';
import { ServicesComponent } from './pages/services/services.component';
import { PostJobComponent } from './pages/jobs/post-job/post-job.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/jobs',
    pathMatch: 'full'
  },
  {
    path: 'jobs',
    children: [
      {
        path: '',
        component: JobsComponent
      },
      {
        path: 'post-job',
        component: PostJobComponent
      }
    ]
  },
  {
    path: 'workers',
    component: WorkersComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
